import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({el}) => {

 const{id, title, image, price, rating} = el


  return (
    <Link to={`/${id}`}>
      <div className="bg-slate-200 rounded overflow-hidden m-5 w-52 hover:shadow-xl hover:shadow-slate-600">
        <div className="w-52 p-4 bg-white ">
          <img src={image} alt={title} />
        </div>
        <div className="p-2">
          <p>{title}</p>
        </div>
        <div className="p-2 bg-green-600 flex justify-between items-center">
          <p className="text-white">Usd ${price}</p>
          <div className="flex items-center">
            {" "}
            <p className="m-1 text-white">{rating.rate}</p>
            <i className="bi bi-star text-white"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
