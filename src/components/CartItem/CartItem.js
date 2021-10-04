import React from "react";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";
import RemoveIcon from "../Icons/RemoveIcon";
import { Link } from "react-router-dom";

const CartItem = ({name,image,price}) => {
  return (
    
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4 md:w-8/12 md:mx-auto">
          <Link to="/">
          <img
              className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-coolGray-500"
                src={image}
              alt="Polaroid camera"
            />
            </Link>
            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                    {name}
                  </h3>
                </div>
                <div className="space-y-2 text-right">
                  <p className="text-lg font-semibold">${price}</p>
                  <div className="cursor-pointer">
                  <PlusIcon/>
                  </div>
                 <div className="cursor-pointer">
                 <MinusIcon />
                 </div>
                </div>
              </div>
              <div className="flex text-sm divide-x">
                <button
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
                  <p className='text-lg'>3</p>
                </button>
              </div>
            </div>
          </div>
        </li>
  );
};

export default CartItem;
