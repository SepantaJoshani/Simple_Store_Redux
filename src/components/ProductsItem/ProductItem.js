import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ name, description, price, image,id }) => {
  return (
    <div className="relative max-w-xs mx-auto overflow-auto bg-white rounded-lg shadow-lg hover:opacity-80 dark:bg-gray-800">
      <div className="px-4 py-2 ">
        <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
          {name}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>

     <Link to={`/products/${id}`}> <img className="object-cover w-full mt-2 mb-6 " src={image} alt="NIKE AIR" /></Link>

      <div className="absolute bottom-0 flex items-center justify-between w-full px-4 py-2 bg-gray-900 ">
        <h1 className="text-lg font-bold text-white">${price}</h1>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
