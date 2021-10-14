import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { cartActions } from "../../store/cartSlice";
import { useToasts } from "react-toast-notifications";

const ProductItem = ({ name, description, price, image, id }) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const history = useHistory();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        name,
        id,
        price,
        image,
      })
    );
    addToast("Added Successfully", { appearance: "success",autoDismiss:true });
  };

  const pushHandler = () => {
    history.push(`/products/${id}`);
  };

  const priceItem = price.toFixed(2);

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

      <img
        onClick={pushHandler}
        className="object-cover w-full mt-2 mb-6 cursor-pointer "
        src={image}
        alt="NIKE AIR"
      />

      <div className="absolute bottom-0 flex items-center justify-between w-full px-4 py-2 bg-gray-900 ">
        <h1 className="text-lg font-bold text-white">${priceItem}</h1>
        <button
          onClick={addToCartHandler}
          className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
