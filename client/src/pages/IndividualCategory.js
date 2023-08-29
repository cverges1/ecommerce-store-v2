import React from 'react';
import { Link } from 'react-router-dom';

function ProductSection({ category }) {
  if (!category) {
    return <p>No category data available.</p>;
  }

  return (
    <section className="product-section">
      <h2 className="text-align-center category-title">{category.name}</h2>
      <div className="card-container">
        {category.categoryProducts.map((Product) => (
          <div key={Product.id} className="card">
            <Link to={`/product/${Product.id}`} className="product-a-tags">
              <img src={Product.image} alt="" className="product-img" />
              <div className="product-text">
                <p className="text-align-center product-name">{Product.name}</p>
                <p className="text-align-center product-price">{Product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
