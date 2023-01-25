import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const CartProvider = ({children}) =>{

    const [cart, setCart] = useState(initialState)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    

    return(
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCartContext = () => useContext(CartContext);