import React from 'react';

const Cart = ({ serializedCategory }) => {
  return (
    <div>
      {serializedCategory.map((Product, index) => (
        <div key={index}>
          <div id="left-column-div-cart">
            <div><img src={`/images/${Product.image}`} alt="" /></div>
            <p id="product-title-cart">{Product.description}</p>
            <p id="product-price-cart">{Product.price}</p>
            <p>QTY 1</p>
            <p>REMOVE</p>
          </div>

          <div id="right-column-div-cart">
            <div>
              <p>Order Summary</p>
              <div id="left-text">
                <div><p>Subtotal:</p></div>
                <div><p>Estimated Shipping</p></div>
                <div><p>Estimated Sales Tax</p></div>
              </div>
              <div id="right-text">
                <div>{Product.subtotal}</div>
                <div><p>Free</p></div>
                <div><p>-</p></div>
              </div>
            </div>

            <div>
              <div><p>Total</p></div>
              <div>{Product.total}</div>
              <button>PLACE ORDER</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
