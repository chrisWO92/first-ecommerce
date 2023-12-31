import React, { useContext } from 'react'
import './style.css'
import { EcommerceContext } from '../../context'
import { AiOutlineClose } from 'react-icons/ai'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'


const CheckOutSideMenu = () => {
    const { states, stateUpdaters } = useContext(EcommerceContext)

    const {
        count,
        detailOpen,
        detailInfo,
        cart,
        checkoutMenuOpen,
        order
    } = states

    const {
        setCount,
        setDetailOpen,
        openProductDetail,
        closeProductDetail,
        setDetailInfo,
        setCart,
        setCheckoutMenuOpen,
        openCheckOutMenu,
        closeCheckOutMenu,
        setOrder
    } = stateUpdaters



    const handleDelete = (id) => {
        const filteredCart = cart.filter(product => product.id != id)
        setCart(filteredCart)
    }

    const handleCheckout = () => {

        const orderToAdd = {
            products: cart,
            totalProducts: cart.length,
            totalPrice: totalPrice(cart)
        }

        setOrder([...order, orderToAdd])
        setCart([])
        closeCheckOutMenu()
    }

    return (
        <aside className={`${checkoutMenuOpen ? "flex" : "hidden"} checkout flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <AiOutlineClose
                    className='h-5 w-5 cursor-pointer'
                    onClick={closeCheckOutMenu}
                ></AiOutlineClose>
            </div>
            <div className='p-6 overflow-y-scroll'>
                {
                    cart.map((product) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageURL={product.img}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='p-6 flex justify-end items-center mr-10'>
                <span className='font-ligth mr-4 text-lg'>Total</span>
                <span className='font-medium text-xl'>{totalPrice(cart)}</span>
            </div>
            <Link to='/my-order/last'>
                <button
                    className='bg-black text-white rounded-lg py-3 mx-4 w-10/12'
                    onClick={() => handleCheckout()}
                >
                    Checkout
                </button>
            </Link>
        </aside>
    )
}

export default CheckOutSideMenu 