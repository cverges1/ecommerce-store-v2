import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../utils/queries"; 
import { Link } from "react-router-dom"; 

function CategoryDivSection() {
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const allCategories = data.categories; 

  return (
    <section className="product-section">
      <h3 className="text-align-center section-title">Categories</h3>
      <div className="flex-row w-100 justify-around">
        {allCategories.map((category) => (
          <Link to={`/category/${category._id}`} key={category._id}>
          <div>
            <img
              src={category.categoryImage}
              alt=""
              className="product-img"
            />
          </div>
        </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryDivSection;