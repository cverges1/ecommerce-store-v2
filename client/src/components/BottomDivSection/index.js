import React from "react";
import { useQuery } from "@apollo/client";
import { GET_NEW_PRODUCTS } from "../utils/queries"; 
// Replace GET_NEW_PRODUCTS with the actual defined query in utils/queries.js 

function BottomDivSection() {
  const { loading, error, data } = useQuery(GET_NEW_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const newProducts = data.newProducts; 

  return (
    <section className="product-section">
      <h3 className="text-align-center section-title">New Arrivals</h3>
      <div className="flex-row w-100">
        {newProducts.map((product) => (
          <div className="flex-item col card" id="responsive-cardss" key={product.id}>
            <a href={`/product/${product.id}`} className="product-a-tags">
              <img src={product.image} alt="" className="product-img" />
              <div className="text-bottom">
                <p className="text-align-center product-name">{product.name}</p>
                <p className="text-align-center product-price">{product.price}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BottomDivSection;