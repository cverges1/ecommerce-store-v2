import { gql } from "@apollo/client";

export const GET_SALE_PRODUCTS = gql`
  query GetSaleProducts {
    saleProducts {
      _id
      name
      image
      price
    }
  }
`;
console.log("Executing GET_SALE_PRODUCTS query");

export const GET_NEW_PRODUCTS = gql`
  query GetNewProducts {
    newProducts {
      _id
      name
      image
      price
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    allCategories {
      _id
      name
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      _id
      categoryName
      categoryImage
    }
  }
`;

export const GET_CATEGORY = gql`
  query GetCategory($categoryId: ID!) {
    category(_id: $categoryId) {
      _id
      categoryName
      categoryImage
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts($category: ID, $name: String) {
    products(category: $category, name: $name) {
      _id
      productName
      description
      productId
      categoryImage
      categoryId {
        _id
        categoryName
        categoryImage
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($productId: ID!) {
    product(_id: $productId) {
      _id
      productName
      description
      productId
      categoryImage
      categoryId {
        _id
        categoryName
        categoryImage
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    user {
      _id
      firstName
      lastName
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          productName
          description
          productId
          categoryImage
          categoryId {
            _id
            categoryName
            categoryImage
          }
        }
      }
    }
  }
`;

export const GET_ORDER = gql`
  query GetOrder($orderId: ID!) {
    order(_id: $orderId) {
      _id
      purchaseDate
      products {
        _id
        productName
        description
        productId
        categoryImage
        categoryId {
          _id
          categoryName
          categoryImage
        }
      }
    }
  }
`;