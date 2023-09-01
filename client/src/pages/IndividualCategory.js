import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_BY_CATEGORY } from '../utils/queries';
import { Link, useParams } from 'react-router-dom';

function ProductSection() {
  // Get the category ID from the URL parameters
  const { id } = useParams();

  // Fetch products using GraphQL query
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { categoryId: id },
  });

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products;

  return (
    <section className="product-section">
      <h2 className="text-align-center category-title">
        Products in this Category
      </h2>
      <div className="card-container">
        {products.map((product) => (
          <div key={product._id} className="card">
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

export default ProductSection;
