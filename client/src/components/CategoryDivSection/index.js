import React from "react";

function CategoryDivSection() {
  return (
    <section class="product-section">
    <h3 class="text-align-center section-title">Categories</h3>
    <div class="flex-row w-100 justify-around">
      {/* {{#each allCategories as |Category|}} */}
      {/* {Loop these} */}
        <a href="/category/{{Category.id}}">
          <div>
            <img src="{{Category.image}}" alt="" class="product-img" />
          </div>
        </a>
      {/* {{/each}} */}
    </div>
  </section>
  );
}

export default CategoryDivSection;