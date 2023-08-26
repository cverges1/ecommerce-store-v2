import { gql } from "@apollo/client";

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