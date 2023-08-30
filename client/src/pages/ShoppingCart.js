import React from 'react';

const Cart = ({ serializedCategory }) => {
  return (
    <React.Fragment>
      {serializedCategory.map((product, index) => (
        <div className="cart-item" key={index}>
          <div className="left-column">
            <img src={`/images/${product.image}`} alt="" />
            <p className="product-title">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <p>QTY 1</p>
            <p>REMOVE</p>
          </div>

          <div className="right-column">
            <div className="order-summary">
              <p>Order Summary</p>
              <div className="order-summary-text">
                <div><p>Subtotal:</p></div>
                <div><p>Estimated Shipping</p></div>
                <div><p>Estimated Sales Tax</p></div>
              </div>
              <div className="order-summary-values">
                <div>{product.subtotal}</div>
                <div><p>Free</p></div>
                <div><p>-</p></div>
              </div>
            </div>

            <div className="total-section">
              <div><p>Total</p></div>
              <div>{product.total}</div>
              <button>PLACE ORDER</button>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Cart;