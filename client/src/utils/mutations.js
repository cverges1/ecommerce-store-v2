// Importing out graph ql dependency
import { gql } from '@apollo/client';

//mutation for LOGIN
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const SIGNUP_MUTATION = gql`
  mutation Signup($userData: SignupInput!) {
    addUser(userData: $userData) {
      token
    }
  }
`;

// Mutation for ADD_USERS
export const ADD_USERS = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

// Keeping for future implementation

// export const ADD_CATEGORY = gql`
//   mutation addCategory(
//     $categoryName: String!
//     $categoryImage: String) {
//     addCategory(
//       categoryName: $categoryName
//       categoryImage: $categoryImage
//   )`;

// export const ADD_PRODUCT = gql`
//   mutation addProduct(
//     $name: String!
//     $description: String!
//     $categoryID: [Category]!
//     $image: String!
//     $price: Float
//     $salePrice: Float
//     $createdAt: Date)
//       addProduct(
//         name: $name
//         description: $description
//         categoryID: $categoryID
//         image: $image
//         price: $price
//         salePrice: $salePrice
//         createdAt: $createdAt
//       )`;
// mutation addOrder(
//   $products: [ID]!) {
//   addOrder(products: $products) {
//     purchaseDate
//     products {
//       _id
//       name
//       description
//       price
//       quantity
//       category {
//         name
//           }
//         }
//       }
//     }
//   `;