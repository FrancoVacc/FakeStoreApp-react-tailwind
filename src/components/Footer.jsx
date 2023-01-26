import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex bg-img bg-cover py-4'>
        <p className='text-gray-800 m-auto'>Made with ❤ by: <Link to={"/about"} className="italic text-purple-600">Franco Vaccari</Link> </p>
    </div>
  )
}

export default Footer