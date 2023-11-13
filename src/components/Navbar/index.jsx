import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { EcommerceContext } from '../../context'
import {AiOutlineShoppingCart} from 'react-icons/ai'


const Navbar = () => {
    const {states, stateUpdaters} = useContext(EcommerceContext)
    const {count, detailOpen, cart} = states
    const {setCount, setDetailOpen, setSearchValue} = stateUpdaters
    const activeStyle = 'underline underline-offset-4'

    const handleClick = (e) => {
        e.preventDefault()
        setSearchValue('')
    }

    return (
        <nav className='flex justify-between items-center w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg my-auto'>
                    <NavLink
                        to='/'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                        //onClick={handleClick}
                    >
                        Shopi
                    </NavLink>
                </li>
                <li className='h-full'>
                    <NavLink
                        to='/'
                        className={({ isActive}) => isActive ? `h-full ${activeStyle}` : `h-full`}
                        //onClick={(e) => handleClick(e)}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                        //onClick={handleClick}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/jewelery'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                        //onClick={(e) => handleClick(e)}
                    >
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/men-clothing'
                        className={({ isActive}) => isActive ? `h-full ${activeStyle}` : `h-full`}
                        //onClick={(e) => handleClick(e)}
                    >
                        Men's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/women-clothing'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                        //onClick={(e) => handleClick(e)}
                    >
                        Women's clothing
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    chris@gmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sing-in'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        Sing In
                    </NavLink>
                </li>
                <li className='flex gap-1 items-center'>
                    <AiOutlineShoppingCart className='h-5 w-5' />
                    {cart.length}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar