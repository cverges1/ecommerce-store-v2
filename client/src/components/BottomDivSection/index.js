import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../utils/queries"; 
import { Link } from "react-router-dom";

function BottomDivSection() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products;
  const newProducts = [data.products[0], data.products[1],data.products[2],data.products[3]]

  console.log('new products', products)

  return (
    <section className="product-section">
      <h3 className="text-align-center section-title">New Arrivals</h3>
      <div className="flex-row w-100">
        {newProducts.map((product) => (
          <div className="flex-item col card" id="responsive-cardss" key={product.id}>
            <Link to={`/product/${product._id}`} className="product-a-tags">
              <img src={product.image} alt="" className="product-img" />
              <div className="text-bottom">
                <p className="text-align-center product-name">{product.name}</p>
                <p className="text-align-center product-price">{product.price}</p>
              </div>
              </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BottomDivSection;