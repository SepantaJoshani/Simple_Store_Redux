import React, { Fragment } from "react";
import ProductItem from "../components/ProductsItem/ProductItem";
import products from "../products";
import Stats from "../components/stats/Stats";
import { useState } from "react";
import { useSelector } from "react-redux";
const Products = () => {
  const [search, setSearch] = useState("");
  const showSearch = useSelector((state) => state.ui.showSearch);

  return (
    <Fragment>
      <section className="py-5 text-gray-600 body-font">
        {showSearch && (
          <div className="flex flex-row h-20 p-4 place-content-center">
            <input
              className="w-40 h-8"
              placeholder="search..."
              type="text"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
        )}
        <div className="grid w-auto grid-cols-1 gap-6 md:grid md:grid-cols-3 lg:grid-cols-4">
          {products
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((product) => (
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
