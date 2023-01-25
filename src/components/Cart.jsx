import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useCartContext } from '../contexts/CartContext';
import img4 from "../img/cart.png";

const Cart = () => {
    const {cart, setCart} = useCartContext()
    
    const navigate = useNavigate()

    const handleDelete = (id) => {
        const newArray = cart.filter((item) => item.id !== id);
        setCart(newArray);
    }

    const handleBuy = () =>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
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
            <ul>
                {
                    cart.length > 0 ? cart.map((item) =>
                        (<div key={item.id}className='p-1 mx-5 my-1 flex items-center border justify-between lg:mx-60 '>
                            <img src={item.image} alt="" className='w-10 p-1 mx-1' />
                            <p className='mx-1'>{item.title}</p>
                            <p className='mx-1 rounded-sm bg-green-600 text-white text-xs py-1 px-3'>Usd ${item.price}</p>
                            <button className='mx-1 rounded-sm bg-red-600 text-white text-xs py-1 px-3' onClick={()=>handleDelete(item.id)}>Delete</button>
                        </div>)
                    ) : 
                    <h4 className='text-center text-2xl p-5 m-5'>No Items 😥</h4>
                }
            </ul>
            {
                cart.length > 0 &&
                <div className='flex justify-center p-5'>
                    <button className=' rounded-sm bg-green-600 text-white text-xs py-1 px-3' onClick={handleBuy}>Buy Your Cart!!</button>
                </div>
            }
        </div>
    </div>
  )
}

export default Cart