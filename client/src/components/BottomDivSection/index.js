import React from "react";

function BottomDivSection() {
  return (
    <section class="product-section">
    <h3 class="text-align-center section-title">New Arrivals</h3>
    <div class="flex-row w-100">
      {/* {{#each newProducts as |Product|}} */}
      {/* {Loop these} */}
        <div class="flex-item col card" id="responsive-cardss">
          <a href="/product/{{Product.id}}" class="product-a-tags">
            <img src="{{Product.image}}" alt="" class="product-img"/>
            <div class="text-bottom">
              <p class="text-align-center product-name">{{Product.name}}</p>
              <p class="text-align-center product-price">{{Product.price}}</p>
            </div>
          </a>
        </div>
      {/* {{/each}} */}
    </div>
  </section>
  );
}

export default BottomDivSection;