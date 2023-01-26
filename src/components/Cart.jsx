import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useCartContext } from '../contexts/CartContext';
import img4 from "../img/cart.png";

const Cart = () => {
    const {cart, setCart} = useCartContext()
    
    const navigate = useNavigate()

    const handleDelete = (id) => {

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your item has been deleted.',
            'success'
          )
          const newArray = cart.filter((item) => item.id !== id);
          setCart(newArray);
        }
      })
    }

    const handleBuy = () =>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'bg-green-600 rounded-sm text-white px-4 py-2 mx-2 text-lg',
              cancelButton: 'bg-red-600 rounded-sm text-white px-4 py-2 mx-2 text-lg'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You are Buying this staff",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes 😎',
            cancelButtonText: 'No 😪',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Ready',
                'Congratulations!!! 😎',
                'success'
              )
              setCart([]);
              navigate("/")
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled 😪',
                'I hope you can buy later',
                'error'
              )
            }
          })

          
    }

  return (
    <div>
        <div className='flex justify-center'>
            <div className='relative'>
                <h4 className='absolute top-10 left-10 text-2xl text-white font-bold lg:text-4xl lg:top-28 lg:left-28'>Your Cart</h4>
                <img src={img4} alt="" />
            </div>
        </div>
        <div>
            <ul className='md:px-16'>
                {
                    cart.length > 0 ? cart.map((item) =>
                        (<div key={item.id}className='py-1 mx-5 my-1 border grid md:grid-cols-7 gap-x-1'>
                            <img src={item.image} alt="" className='w-10 p-1 mx-1' />
                            <p className='mx-1 md:col-span-4'>{item.title}</p>
                            <p className='mx-1 rounded-sm bg-green-600 text-white text-xs py-1 px-3 text-center md:text-xl'>Usd ${item.price}</p>
                            <button className='mx-1 rounded-sm bg-red-600 text-white text-xs py-1 px-3 md:text-xl' onClick={()=>handleDelete(item.id)}>Delete</button>
                        </div>)
                    ) : 
                    <h4 className='text-center text-2xl p-5 m-5'>No Items 😥</h4>
                }
            </ul>
            {
                cart.length > 0 &&
                <div className='flex justify-center p-5'>
                    <button className=' rounded-sm bg-green-600 text-white text-xs py-1 px-3 md:text-2xl' onClick={handleBuy}>Buy Your Cart!!</button>
                </div>
            }
        </div>
    </div>
  )
}

export default Cart