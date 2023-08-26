import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../utils/queries";

function IndividualProducts({ productId }) {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { productId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const productData = data.product;

  return (
    <section id='single-product-section'>
      <div id='left-column'>
        <img src={productData.image} alt='' className='product-image' />
      </div>

      <div id='right-column'>
        <div className='wrapper-div'>
          <section id="top-section">
            <h4 id='product-title'>{productData.name}</h4>
            <p id='product-price'>{productData.price}</p>
            <div className='quan-add-div flex-row'>
              <div id='quantity-box'>
                <button className='quantity-btn' id='subtract-btn'>-</button>
                <p className='quantity-value'>1</p>
                <button className='quantity-btn' id='add-btn'>+</button>
              </div>
              <div id='add-to-cart-btn-div'>
                <button id='add-to-cart-btn'>ADD TO CART</button>
              </div>
            </div>
          </section>
          <section id="mid-section">
            <h5>DETAILS</h5>
            <p id="mid-details">{productData.description}</p>
          </section>
          <section id="bottom-section">
            <h5>SHIPPING</h5>
            <p>
              Take advantage of our exclusive offer for dog lovers! Enjoy free
              standard shipping on your entire order with any purchase of dog
              products, such as dog food, toys, leashes/collars, or dog beds. For
              all other orders over $50, we provide free standard shipping as well.
              Rest assured, returns are hassle-free with free in-store returns. Some
              restrictions may apply. Shop now and give your furry friend the love
              they deserve, with the added benefit of free shipping!
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default IndividualProducts;