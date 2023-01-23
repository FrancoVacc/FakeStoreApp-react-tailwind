import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../img/logo.png"

const NavBar = () => {
  return (
    <div className='flex py-4'>
      <img src={logo} alt="" className='w-8 h-8 my-4 mx-3'/>
      <ul className='flex py-4' >
        <li className='mx-3'>
          <NavLink to={"/"} className="text-gray-800 text-xs ">Home</NavLink>
        </li>
        <li className='mx-3'>
          <NavLink to={"/categories"} className="text-gray-800 text-xs">Categories</NavLink>
        </li>
        <li className='mx-3'>
          <NavLink to={"/about"} className="text-gray-800 text-xs">About</NavLink>
        </li>
      </ul>
      
    </div>
  )
}

export default NavBar