import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const OrderCard = props => {
    const {title, imageURL, price} = props
    return (
        <div className='flex justify-between items-center mb-2 bg-slate-400'>
            <div className='flex items-center gap-2 bg-slate-900'>
                <figure className='w-[80px] h-[80px]'>
                    <img className='w-full h-full rounded-lg object-fit' src={imageURL} alt="" />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                <AiOutlineClose
                    className='h-5 w-5 cursor-pointer'
                ></AiOutlineClose>
            </div>
        </div>
    )
}

export default OrderCard