import React from "react";
import { useParams } from "react-router-dom";
import IndividualProducts from "../components/IndividualProducts";

function SingleProduct() {
  const { id } = useParams();

  return (
    <React.Fragment>
      <IndividualProducts productId={id} />
    </React.Fragment>
  );
}

export default SingleProduct;