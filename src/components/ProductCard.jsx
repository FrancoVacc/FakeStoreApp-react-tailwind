import React from "react";
import { useCartContext } from "../contexts/CartContext";
import Swal from "sweetalert2";

const ProductCard = ({ element }) => {
  const { cart, setCart } = useCartContext();
  const { title, image, description, price, rating, id } = element;

  const addToCart = () => {
    setCart([...cart,{id,title,price,image}]);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your product is in your cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="flex justify-center">
      <div className="w-[75%] block bg-slate-200 rounded overflow-hidden m-4 md:flex ">
        <div className=" flex justify-center bg-white md:w-1/2 md:items-center">
          <div className="w-[60%]">
            <img src={image} alt="" />
          </div>
        </div>
        <div className=" p-2 flex flex-col justify-between md:w-1/2">
          <div>
            <h3 className="text-slate-800 text-lg text-center md:text-xl">{title}</h3>
          </div>
          <div>
            <p className="text-slate-600 text-xs mb-2 md:text-base">{description}</p>
          </div>
          <div className="flex">
            <p className="text-white text-xl w-[50%] bg-green-600 rounded-sm px-3 py-2 text-center">
              Usd ${price}
            </p>
            <p className="text-slate-800 text-xl w-[50%] rounded-sm px-3 py-2 text-center">
              {rating.rate} <i className="bi bi-star"></i>
            </p>
          </div>
          <button
            className="bg-green-600 text-white w-[100%] hover:bg-green-800 mt-4"
            onClick={addToCart}
          >
            Add to cart <i className="bi bi-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
