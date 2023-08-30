import { useReducer } from 'react';
import {
    UPDATE_PRODUCTS,
    UPDATE_SINGLE_PRODUCT,
    UPDATE_CATEGORIES,
    UPDATE_SINGLE_CATEGORY,
    ADD_TO_CART

} from "./actions";

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
            }
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