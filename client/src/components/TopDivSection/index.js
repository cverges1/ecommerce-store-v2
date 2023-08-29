import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../utils/queries";
import { Link } from "react-router-dom";

function TopDivSection() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  // console.log("Rendering TopDivSection...");
  // console.log("TopDivSection loading:", loading);
  // console.log("TopDivSection error:", error);
  // console.log("TopDivSection data:", data);

  if (loading) {
    // Initial loading state
    return <p>Loading...</p>;
  }

  if (error) {
    console.log("Error fetching sale products:", error);
    return <p>Error: {error.message}</p>;
  }

  const products = data.products;
  let saleProducts = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].salePrice > 0) {
      saleProducts.push(products[i]);
    }
  }

  const randomSaleProducts = saleProducts
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, 4);


  console.log("Sale products data:", randomSaleProducts);

  return (
    <section className="product-section">
      <h3 className="text-align-center section-title top-title">On Sale</h3>
      <div className="flex-row w-100">
        {randomSaleProducts.map((product) => (
          <div
            className="flex-item col card"
            id="responsive-cards"
            key={product._id}
          >
            <Link to={`/product/${product._id}`} className="product-a-tags">
              <img src={product.image} alt="" className="product-img" />
              <div className="product-text">
                <p className="text-align-center product-name">{product.name}</p>
                <p className="text-align-center product-price">
                  {product.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopDivSection;
