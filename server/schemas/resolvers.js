require("dotenv").config();
const { AuthenticationError } = require("apollo-server-express");
const { User, Order, Product, Category } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")(process.env.STRIPE);

const resolvers = {
  Query: {
    // need to add queries for categories, products and single product
    categories: async (parent, args, context) => {
        return await Category.find();
    },
    category: async (parent, { _id }) => {
        return await Category.findById(_id)
    },
    products: async (parent, { category, name }) => {
      const params = {};
      if (category) {
        params.category = category;
      }
      if (name) {
        params.name = {
          $regex: name
        };
      }
      return await Product.find(params).populate({path: "categoryID"});
      // If you are getting errors with the params, just do a basic Product.find()
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },

    // saleProducts: async (parent, args, context) => {
    //   try {
    //     console.log("Resolver for saleProducts is called");
    
    //     // Fetch saleProducts from your database here
    //     const saleProducts = await Product.find({ isOnSale: true });
    
    //     return saleProducts;
    //   } catch (error) {
    //     console.error("Error in saleProducts resolver:", error);
    //     throw error; // Rethrow the error to maintain error propagation
    //   }
    // },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user_id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("You are not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id{CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user_id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("You are not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("You are not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Invalid email or password");
      }

      const correctPw = await user.checkPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Invalid email or password");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;