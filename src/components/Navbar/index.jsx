import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg my-auto'>
                    <NavLink
                        to='/'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        Shopi
                    </NavLink>
                </li>
                <li className='h-full'>
                    <NavLink
                        to='/'
                        className={({ isActive}) => isActive ? `h-full ${activeStyle}` : `h-full`}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({ isActive}) => isActive ? `h-full ${activeStyle}` : `h-full`}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        Others
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
                <li>
                    emoji
                </li>
            </ul>
        </nav>
    )
}

export default Navbar