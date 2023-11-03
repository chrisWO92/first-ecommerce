import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const OrderCard = props => {
    const {title, imageURL, price} = props
    const titleSlice = title.slice(0, 15)
    return (
        <div className='flex justify-between items-center mb-2 rounded-lg'>
            <div className='flex items-center gap-2 w-7/12'>
                <figure className='w-1/3 h-16'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageURL} alt="" />
                </figure>
                <p className='text-sm font-light w-2/3 p-1'>{titleSlice}</p>
            </div>
            <div className='flex items-center justify-center gap-0 w-5/12 p-1'>
                <p className='text-lg font-medium w-3/5 flex justify-end'>${price}</p>
                <AiOutlineClose
                    className='h-5 w-2/5 cursor-pointer'
                ></AiOutlineClose>
            </div>
        </div>
    )
}

export default OrderCard