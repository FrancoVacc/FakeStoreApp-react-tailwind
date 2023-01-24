import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Product = () => {
  
  const {element} = useLoaderData()


  return (
    <>
      <ProductCard element={element}/>
    </>
  )
}

export default Product;

export const loadProduct = async({params}) =>{
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const element  = await res.json()

  
  return{element}
}