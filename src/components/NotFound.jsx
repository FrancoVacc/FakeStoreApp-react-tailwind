import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <>
      <h2 className='text-center mx-auto my-10 font-bold text-red-500 text-4xl'>Oh No! - Error</h2>
      <h4 className='text-center mx-auto my-10 font-bold text-gray-500 text-4xl'>404</h4>
      <p className='text-center mx-auto my-10 font-bold text-gray-500 text-4xl'>This page is not Found....</p> 
      <Link to={"/"}><p  className='text-center mx-auto my-10 font-bold text-red-500 text-4xl'>Go Back</p></Link>
    </>
  )
}

export default NotFound