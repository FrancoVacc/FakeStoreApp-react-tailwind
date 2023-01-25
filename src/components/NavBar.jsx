import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import logo from "../img/logo.png";

const NavBar = () => {
  const {cart} = useCartContext()

  return (
    <div className="flex justify-between  bg-slate-100 py-4">
      <div className="flex">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-8 h-8 my-4 mx-4" />
        </Link>


        <ul className="py-4 mx-4 flex">
          <li className="mx-3">
            <NavLink to={"/"} className="text-gray-800 text-sm ">
              Home
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink to={"/categories"} className="text-gray-800 text-sm">
              Categories
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink to={"/about"} className="text-gray-800 text-sm">
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <Link className="h-[100%] w-40 relative flex flex-col items-center" to={"/cart"}>
        {
          cart.length > 0 &&
          <span className="bg-purple-600 text-white rounded-full w-5 h-5 text-center">{cart.length}</span>
        }
        <i className="bi bi-cart text-3xl  text-purple-600"></i>
      </Link>
    </div>
  );
};

export default NavBar;
