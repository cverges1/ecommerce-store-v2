import React from "react";
import { useQuery } from "@apollo/client";
// import ( GET_SALE_PRODUCTS ) from "../utils/queries.js";
// Replace GET_SALE_PRODUCTS with the actual defined query in graphql/queries.js 

function TopDivSection() {
  // query
  // store array of data
  // map over array
  const { loading, error, data } = useQuery(GET_SALE_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const saleProducts = data.saleProducts;
  return (
    <section className="product-section">
      <h3 className="text-align-center section-title top-title">On Sale</h3>
      <div className="flex-row w-100">
        {saleProducts.map((product) => (
          <div className="flex-item col card" id="responsive-cards" key={product._id}>
            <a href={`/product/${product._id}`} className="product-a-tags">
              <img src={product.image} alt="" className="product-img" />
              <div className="product-text">
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

export default TopDivSection;