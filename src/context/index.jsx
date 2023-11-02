import React, { createContext, useState } from 'react'

export const EcommerceContext = createContext()

export const EcommerceProvider = ({ children }) => {
    //Shopping Cart - Increment Quantity
    const [count, setCount] = useState(0)

    //Product Detail - Open/Close
    const [detailOpen, setDetailOpen] = useState(false)   
    const openProductDetail = () => setDetailOpen(true)
    const closeProductDetail = () => setDetailOpen(false)

    //Product Detail - Show Detail
    const [detailInfo, setDetailInfo] = useState({})

    //Cart - Adding products to Cart
    const [cart, setCart] = useState([])
    
    //Checkout - Open/Close
    const [checkoutMenuOpen, setCheckoutMenuOpen] = useState(false)
    const openCheckOutMenu = () => setCheckoutMenuOpen(true)
    const closeCheckOutMenu = () => setCheckoutMenuOpen(false)

    const states = {
        count, 
        detailOpen, 
        detailInfo, 
        cart,
        checkoutMenuOpen
    }

    const stateUpdaters = {
        setCount, 
        setDetailOpen, 
        openProductDetail, 
        closeProductDetail, 
        setDetailInfo, 
        setCart, 
        setCheckoutMenuOpen, 
        openCheckOutMenu, 
        closeCheckOutMenu
    }

    const value = {
        states, 
        stateUpdaters
    }

    return (
        <EcommerceContext.Provider 
            value={value}
        >
            {children}
        </EcommerceContext.Provider>
    )
}
