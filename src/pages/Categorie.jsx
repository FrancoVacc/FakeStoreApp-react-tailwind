import React from 'react'
import { useLoaderData} from 'react-router-dom'
import ItemCard from '../components/ItemCard'



const Categorie = () => {

  const {element, params} = useLoaderData()

  return (
    <>
      <h1 className="text-purple-500 text-center text-lg mb-5">Categorie - {params.id}</h1>
      <div className='flex flex-wrap flex-grow justify-center'>
          {
            element.map((item)=>(<ItemCard key={item.id} item={item}/>))
          }
      </div>
    </>
  )
}

export default Categorie

export const loadCategorie = async({params}) =>{
  const res = await fetch(`https://fakestoreapi.com/products/category/${params.id}`)
  console.log(res)
  const element  = await res.json()
  
  return{element, params}
}