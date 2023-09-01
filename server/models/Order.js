//importing our mongoose dependency
const mongoose = require("mongoose");

const { Schema } = mongoose;

//setting up the schema model for Order
const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
