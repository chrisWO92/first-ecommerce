import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    const date = new Date();
    const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
    ];

    return (
        <div className='flex justify-between items-center border border-black mb-2 rounded-lg p-2'>
            <div className='flex flex-col items-center gap-2 w-7/12'>
                <p className='text-lg font-light    '>{`${day}-${month}-${year}`}</p>
                <p className='text-lg font-medium'>{totalProducts} items</p>
            </div>
            <div className='flex items-center justify-center gap-0 w-5/12 p-1'>
                <p className='text-lg font-medium w-3/5 flex justify-end'>${totalPrice}</p>
                <MdOutlineKeyboardDoubleArrowRight className='w-5 h-5 ml-5' />
            </div>
        </div>
    )
}

export default OrdersCard