// Importing out reducers from react 
import { useReducer } from 'react';
// Importing our actions from its respective file
import {
    UPDATE_PRODUCTS,
    UPDATE_SINGLE_PRODUCT,
    UPDATE_CATEGORIES,
    UPDATE_SINGLE_CATEGORY,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART

} from "./actions";

// Switch/case statements for each action using State
export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                product: [...action.product],
            };
        case UPDATE_SINGLE_PRODUCT:
            return {
                ...state,
                currentProduct: [...action.currentProduct],
            };
        case UPDATE_CATEGORIES:
            return {
                ...state,
                category: [...action.category]
            };
        case UPDATE_SINGLE_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
            return product._id !== action._id;
            });
            return {
                ...state,
            cartOpen: newState.length > 0,
            cart: newState
            };
        case CLEAR_CART:
            return {
          ...state,
          cartOpen: false,
          cart: []
            };
  
        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity
          }
            return product
            })
        };

        case ADD_TO_CART:
            return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

            default: return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState)
}