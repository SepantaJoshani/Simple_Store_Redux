import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "../Icons/CartIcon";
import CloseIcon from "../Icons/CloseIcon";
import LogoutIcon from "../Icons/LogoutIcon";
import MenuItem from "../Icons/MenuItem";
import ShoppingBag from "../Icons/ShoppingBag";
import UserIcon from "../Icons/UserIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className="bg-blue-400 ">
      <div className="flex items-center justify-between px-3 py-3">
        <div className="flex items-center">
          <button className="md:hidden" onClick={toggleHandler}>
            {isOpen ? <MenuItem /> : <CloseIcon />}
          </button>
          <div className="items-center hidden space-x-2 md:flex ">
            <NavLink className="hover:text-white" to="/products">
              Shop
            </NavLink>
            <NavLink className="hover:text-white" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
        <div>
          <Link to="products">
            <div className="flex items-center space-x-1">
              <ShoppingBag />
              <h1 className="text-xl">Store</h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-1">
          <NavLink to="/contact">
            <UserIcon />
          </NavLink>
          <NavLink to="/cart">
            <div className="relative px-5 py-2">
              <div className="z-0 ">
                <CartIcon />
              </div>
              <span class="inline-flex items-center justify-center px-2 py-1  text-xs font-bold leading-none text-gray-600 bg-white rounded-full absolute top-1 bottom-6 right-2 z-100">
                9
              </span>
            </div>
          </NavLink>
        </div>
      </div>
      <div className={`px-3 pb-1 ${isOpen && `hidden`} mb-2 md:hidden`}>
        <NavLink
          className="block p-2 rounded-md hover:bg-blue-300"
          to="/products"
        >
          Shop
        </NavLink>
        <NavLink
          className="block p-2 rounded-md hover:bg-blue-300"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
