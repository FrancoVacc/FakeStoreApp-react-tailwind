import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../img/home-img/1.png"
import img2 from "../img/home-img/2.png"
import img3 from "../img/home-img/3.png"
import img4 from "../img/home-img/4.png"

const Home = () => {

  return (
    <div>
      <h2 className="text-purple-500 text-center text-lg" >Welcome to Fake Store</h2>
      <div className=' p-4 mb-5 flex flex-wrap justify-center sm:flex-grow sm:flex-nowrap'>
        <img src={img1} alt="" className='m-1 w-2/3 sm:w-1/2'/>
        <img src={img2} alt="" className='m-1 w-2/3 sm:w-1/2'/>
      </div>
      <div className='flex justify-center'>
        <Link to={"/categories"}><h2 className="text-purple-500 text-center text-lg">Explore our product</h2></Link>
      </div>
      <div className=' p-4 mb-5 flex flex-wrap justify-center sm:flex-grow sm:flex-nowrap'>
        <img src={img3} alt="" className='m-1 w-2/3 sm:w-1/2' />
        <img src={img4} alt="" className='m-1 w-2/3 sm:w-1/2' />
      </div>
    </div>
  )
}

export default Home

