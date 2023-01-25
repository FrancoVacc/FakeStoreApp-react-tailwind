import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Slider from "../components/Slider";
import img4 from "../img/home-img/img4.png"

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((item) => {
        setIsLoading(false);
        setProducts(item);
      });
  }, []);

  return (
    <div>
      <Slider />

      <h2 className="w-[100%] text-center text-white bg-purple-600 mt-2">
        Some of our products
      </h2>
      <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <Loading />
        ) : (
          products.map((el) => (
            <Link key={el.id} to={`/${el.id}`}>
              <div className=" w-24 flex flex-col  m-4 border border-solid border-transparent overflow-hidden rounded-md hover:shadow-lg md:w-52">
                <img src={el.image} alt="" className="p-4" />
                <p className="text-center text-white bg-green-600 text-xs md:text-lg">
                  Usd$ {el.price}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
      <Link to={"/categories"}> <img src={img4} alt="" className='w-[100%] mt-5'/></Link>
    </div>
  );
};

export default Home;
