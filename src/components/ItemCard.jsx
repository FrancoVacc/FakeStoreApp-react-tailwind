import React from 'react'

const ItemCard = (item) => {
  return (
    <div className='w-40 h-64 bg-slate-300 rounded overflow-hidden m-5'>
        <div className='w-40 h-28 bg-gray-800'>{item.image}</div>
        <div className='w-40 p-2'><p>{item.title}</p></div>
        <div className='w-40 p-2 bg-green-600'><p className="text-white">{item.price}</p></div>
        <div className='flex w-40 p-2 justify-end items-center'><p className='m-1'>{item.rating.rate}</p><i className="bi bi-star"></i></div>
    </div>
  )
}

export default ItemCard