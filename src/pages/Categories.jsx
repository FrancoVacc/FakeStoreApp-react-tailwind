import React from "react";
import { Link } from "react-router-dom";
import electronics from "../img/categories/electronics.png";
import jewelery from "../img/categories/jewelery.png";
import mancloting from "../img/categories/man-clothing.png";
import womancloting from "../img/categories/womans-clothing.png";

const Categories = () => {
  return (
    <div>
      <h2 className="text-purple-500 text-center text-lg">Categories</h2>
      <div className="flex justify-center flex-wrap m-auto">
        <div className="md:p-4">
          <Link to={`/categories/electronics`} className="relative">
            <h4 className="absolute top-14 left-14 text-white font-bold text-lg md:text-3xl md:top-36 md:left-40">Electronics</h4>
            <img
              src={electronics}
              alt="electronics"
              className="m-4 w-80 rounded-md hover:shadow-lg hover:shadow-slate-600 md:w-[100%]"
            />
          </Link>
        </div>
        <div className="md:p-4">
          <Link to={`/categories/jewelery`} className="relative">
            <h4 className="absolute top-14 left-14 text-white font-bold text-lg md:text-3xl md:top-36 md:left-40">Jewelery</h4>
            <img
              src={jewelery}
              alt="jewelery"
              className="m-4 w-80 rounded-md hover:shadow-lg hover:shadow-slate-600 md:w-[100%]"
            />
          </Link>
        </div>
        <div className="md:p-4">
          <Link to={`/categories/men's%20clothing`} className="relative">
            <h4 className="absolute top-14 left-14 text-white font-bold text-lg md:text-3xl md:top-36 md:left-40">Men's Clothing</h4>
            <img
              src={mancloting}
              alt="mens-cloting"
              className="m-4 w-80 rounded-md hover:shadow-lg hover:shadow-slate-600 md:w-[100%]"
            />
          </Link>
        </div>
        <div className="md:p-4">
          <Link to={`/categories/women's%20clothing`} className="relative">
            <h4 className="absolute top-14 left-14 text-white font-bold text-lg md:text-3xl md:top-36 md:left-40">Woman's Clothing</h4>
            <img
              src={womancloting}
              alt="womans-cloting"
              className="m-4 w-80 rounded-md hover:shadow-lg hover:shadow-slate-600 md:w-[100%]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
