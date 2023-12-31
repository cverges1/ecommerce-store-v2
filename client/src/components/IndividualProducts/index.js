import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_PRODUCT } from '../../utils/queries';
import { Link, useParams } from 'react-router-dom';

function IndividualProducts({ productId }) {
  // Get the product ID from URL parameters
  const { id } = useParams();

  // Fetch product details using GraphQL query
  const { loading, error, data } = useQuery(GET_SINGLE_PRODUCT, {
    variables: { id },
  });

  // State for managing the quantity
  const [quantity, setQuantity] = useState(1);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Event handler for increasing quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Event handler for decreasing quantity
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section id="single-product-section">
      <Link to={`/product/${data.product._id}`}></Link>
      <div id="left-column">
        <img src={data.product.image} alt="" className="product-image" />
      </div>
      <div id="right-column">
        <div className="wrapper-div">
          <section id="top-section">
            <h4 id="product-title">{data.product.name}</h4>
            <p id="product-price">{data.product.price}</p>
            <div className="quan-add-div flex-row">
              <div id="quantity-box">
                <button
                  className="quantity-btn"
                  id="subtract-btn"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <p className="quantity-value">{quantity}</p>
                <button
                  className="quantity-btn"
                  id="add-btn"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
              <div id="add-to-cart-btn-div">
                <button id="add-to-cart-btn">ADD TO CART</button>
              </div>
            </div>
          </section>
          <section id="mid-section">
            <h5>DETAILS</h5>
            <p id="mid-details">{data.product.description}</p>
          </section>
          <section id="bottom-section">
            <h5>SHIPPING</h5>
            <p>
              Take advantage of our exclusive offer for dog lovers! Enjoy free
              standard shipping on your entire order with any purchase of dog
              products, such as dog food, toys, leashes/collars, or dog beds.
              For all other orders over $50, we provide free standard shipping
              as well. Rest assured, returns are hassle-free with free in-store
              returns. Some restrictions may apply. Shop now and give your furry
              friend the love they deserve, with the added benefit of free
              shipping!
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default IndividualProducts;
