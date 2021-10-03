import React, { Fragment } from "react";
import ProductItem from "../components/ProductsItem/ProductItem";
import products from "../products";
import Stats from '../components/stats/Stats'
const Products = () => {
  return (
   <Fragment>
      <section className="py-5 text-gray-600 body-font">
      <div className="grid w-auto grid-cols-1 gap-6 md:grid md:grid-cols-3">
        {products.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </section>
    <Stats />
   </Fragment>
  );
};

export default Products;
