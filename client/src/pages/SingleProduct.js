import React from 'react';
import { useParams } from 'react-router-dom';
import IndividualProducts from '../components/IndividualProducts';

// Component for a single product
function SingleProduct() {
  // Get the product ID from the URL parameters
  const { id } = useParams();

  return (
    <React.Fragment>
      {/* Render the IndividualProducts component */}
      <IndividualProducts productId={id} categoryId={id} />
    </React.Fragment>
  );
}

export default SingleProduct;
