import React, { useContext } from 'react'
import './style.css'
import { EcommerceContext } from '../../context'
import { AiOutlineClose } from 'react-icons/ai'
import OrderCard from '../OrderCard'

const CheckOutSideMenu = () => {
    const { states, stateUpdaters } = useContext(EcommerceContext)

    const {
        count,
        detailOpen,
        detailInfo,
        cart,
        checkoutMenuOpen
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
        closeCheckOutMenu
    } = stateUpdaters



    console.log(cart)

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
                            title={product.title}
                            imageURL={product.img}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </aside>
    )
}

export default CheckOutSideMenu 