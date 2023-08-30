// import React, { createContext, useContext, useReducer } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// const cartReducer = (state, action) => {


//   // NEED cart state management logic here


//   switch (action.type) {

//     // NEED 'ADD_TO_CART', 'REMOVE_FROM_CART', etc.

//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [cartState, cartDispatch] = useReducer(cartReducer, []);

//   return (
//     <CartContext.Provider value={{ cartState, cartDispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
