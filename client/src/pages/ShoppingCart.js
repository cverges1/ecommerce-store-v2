import React from 'react';
import CartComponent from '../components/Cart';

// ShoppingCart component
const Cart = ({ serializedCategory }) => {
  return (
    <React.Fragment>
      {/* Render the CartComponent */}
      <CartComponent />
    </React.Fragment>
  );
};

export default Cart;
