import React, { Fragment } from "react";
import { useRouteMatch } from "react-router";
import ProductDetail from "../components/ProductDetail.js/ProductDetail";
import products from "../products";
const ProductInfo = () => {
    const match = useRouteMatch();
   

  const product = products.find((item) => item.id === match.params.productId);

  console.log(match.params.productId);

  return (
    <Fragment>
      <ProductDetail
        name={product.name}
        price={product.price}
        description={product.description}
        image={product.image}
        id={product.id}
      />
    </Fragment>
  );
};

export default ProductInfo;
