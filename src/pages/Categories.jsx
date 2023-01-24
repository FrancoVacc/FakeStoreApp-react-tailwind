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
        <Link to={`/categories/electronics`}>
          <img
            src={electronics}
            alt="electronics"
            className="m-4 w-80 rounded-md hover:shadow-lg hover:shadow-slate-600"
          />
        </Link>
        <Link to={`/categories/jewelery`}>
          <img
            src={jewelery}
            alt="jewelery"
            className="m-4 w-80 rounded-md hover:shadow-lg hover:shadow-slate-600"
          />
        </Link>
        <Link to={`/categories/men's%20clothing`}>
          <img
            src={mancloting}
            alt="mens-cloting"
            className="m-4 w-80 rounded-md hover:shadow-lg hover:shadow-slate-600"
          />
        </Link>
        <Link to={`/categories/women's%20clothing`}>
          <img
            src={womancloting}
            alt="womans-cloting"
            className="m-4 w-80 rounded-md hover:shadow-lg hover:shadow-slate-600"
          />
        </Link>
      </div>
    </div>
  );
};

export default Categories;
