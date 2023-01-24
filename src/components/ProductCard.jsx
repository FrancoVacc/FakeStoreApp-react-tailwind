import React from "react";

const ProductCard = ({ element }) => {
  return (
    <div className="flex justify-center">
        <div className="w-[75%] block bg-slate-200 rounded overflow-hidden m-4 md:flex ">
        <div className=" flex justify-center bg-white md:w-1/2 md:items-center">
            <div className="w-[60%]">
            <img src={element.image} alt="" />
            </div>
        </div>
        <div className=" p-2 flex flex-col justify-between md:w-1/2">
            <div>
            <h3 className="text-slate-800 text-lg text-center">{element.title}</h3>
            </div>
            <div>
            <p className="text-slate-600 text-xs mb-2">{element.description}</p>
            </div>
            <div className="flex">
            <p className="text-white text-xl w-[50%] bg-green-600 rounded-sm px-3 py-2 text-center">
                Usd ${element.price}
            </p>
            <p className="text-slate-800 text-xl w-[50%] rounded-sm px-3 py-2 text-center">
                {element.rating.rate} <i className="bi bi-star"></i>
            </p>
            </div>
            <button className="bg-green-600 text-white w-[100%] hover:bg-green-800 mt-4">Buy Now <i className="bi bi-cart"></i></button>
        </div>
        </div>
    </div>
  );
};

export default ProductCard;
