import React from "react";
import ProductItem from "../components/ProductsItem/ProductItem";
import products from "../products";
const Products = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        {
          products.map(product=>(
            <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
         <ProductItem key={product.id} price={product.price} description={product.description} image={product.image} />
        </div>
        </div>
          ))
        }
      </div>
    </section>
  );
};

export default Products;
