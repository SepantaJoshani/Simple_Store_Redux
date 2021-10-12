import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { cartActions } from "../../store/cartSlice";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";
import RemoveIcon from "../Icons/RemoveIcon";

const CartItem = ({ name, image, price, id }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items)
  const history = useHistory();

  const selectedItem = cartItems.find(item=>item.id===id)
  const quantity = selectedItem.quantity

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        name,
        image,
        price,
        id,
        quantity
      })
    );
  };
const priceItem=price.toFixed(2)
  const removeItemHandler = ()=>{
    dispatch(cartActions.removeItemFromCart(id))
  }

  const removeHandler=()=>{
    dispatch(cartActions.clearItem(id))
  }

  const pushHandler = () => {
    history.push(`/products/${id}`);
  };
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4 md:w-8/12 md:mx-auto">
        <img
          onClick={pushHandler}
          className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none cursor-pointer dark:border-transparent sm:w-32 sm:h-32 dark:bg-coolGray-500"
          src={image}
          alt="Polaroid camera"
        />

        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {name}
              </h3>
            </div>
            <div className="space-y-2 text-right">
              <p className="text-lg font-semibold">${priceItem}</p>
              <div className="cursor-pointer" onClick={addItemHandler}>
                <PlusIcon />
              </div>
              <div className="cursor-pointer" onClick={removeItemHandler}>
                <MinusIcon />
              </div>
            </div>
          </div>
          <div className="flex text-sm divide-x">
            <button
            onClick={removeHandler}
              type="button"
              className="flex items-center px-2 py-1 pl-0 space-x-1"
            >
              <RemoveIcon />
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="flex items-center px-2 py-1 space-x-1"
            >
              <span>X</span>
              <p className="text-lg">{quantity} </p>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
