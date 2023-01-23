import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = (item) => {

  console.log(item.item)
  return (
    
    <Link to={`/${item.item.id}`}>
      <div className='bg-slate-300 rounded overflow-hidden m-5 w-52'>
          <div className='w-52 h-max p-4 bg-white '><img src={item.item.image} alt={item.item.title} /></div>
          <div className='p-2'><p>{item.item.title}</p></div>
          <div className='p-2 bg-green-600 flex justify-between items-center'><p className="text-white">${item.item.price}</p><div className='flex items-center'> <p className='m-1'>{item.item.rating.rate}</p><i className="bi bi-star"></i></div></div>
      </div>
    </Link>
  )
}

export default ItemCard