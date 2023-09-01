// Importing our graph ql dependency
import { gql } from '@apollo/client';

// Query for GET_ALL_CATEGORIES
export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    categories {
      _id
      categoryName
      categoryImage
    }
  }
`;

// Query for GET_SINGLE_CATEGORY
export const GET_SINGLE_CATEGORY = gql`
  query Category($categoryId: ID!) {
    category(_id: $id) {
      categoryName
      categoryImage
    }
    products(categoryID: $categoryId) {
      name
      image
      description
      price
      salePrice
      _id
    }
  }
`;

// Query for GET_PRODUCTS_BY_CATEGORY
export const GET_PRODUCTS_BY_CATEGORY = gql`
  query CATEGORY_PRODUCTS($categoryId: ID) {
    products(categoryID: $categoryId) {
      _id
      name
      description
      image
      price
      salePrice
      categoryID {
        _id
        categoryName
      }
    }
  }
`;
//Query for get products
export const GET_PRODUCTS = gql`
  query allProducts {
    products {
      _id
      name
      description
      image
      price
      salePrice
      createdAt
      categoryID {
        _id
        categoryImage
        categoryName
      }
    }
  }
`;
//Query for single product
export const GET_SINGLE_PRODUCT = gql`
  query Product($id: ID!) {
    product(_id: $id) {
      name
      image
      price
      salePrice
      description
      categoryID {
        _id
        categoryImage
        categoryName
      }
    }
  }
`;

//Query for GET_USER
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

// Query for GET_ORDER
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
// Query for SIGNUP
export const SIGNUP_MUTATION = gql`
  mutation Signup($userData: SignupInput!) {
    addUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
    }
  }
`;
