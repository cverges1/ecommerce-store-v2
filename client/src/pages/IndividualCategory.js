import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_CATEGORY } from "../utils/queries";
import { Link, useParams } from "react-router-dom";

function ProductSection({ categoryId }) {
  const { id } = useParams();
  console.log("category id via params",id)

  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: {categoryId: id} ,
  });

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="product-section">
      <h2 className="text-align-center category-title">
        {data.category}
      </h2>
      <div className="card-container">
        {data.products.map((product) => (
          <div key={product._id} className="card">
            <Link
              to={`/category/${product.categoryID._id}`}
              className="product-a-tags"
            >
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

export default ProductSection;
