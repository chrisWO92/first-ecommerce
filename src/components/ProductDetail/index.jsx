import React, { useContext } from 'react'
import './style.css'
import { EcommerceContext } from '../../context'
import { AiOutlineClose } from 'react-icons/ai'

const ProductDetail = () => {
    const { states, stateUpdaters } = useContext(EcommerceContext)
    const { 
        count, 
        detailOpen, 
        detailInfo,
    } = states
    console.log(detailInfo.img)
    const { setCount, setDetailOpen, openProductDetail, closeProductDetail } = stateUpdaters
    return (
        <aside className={`${detailOpen ? "flex" : "hidden"} detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <AiOutlineClose
                    className='h-5 w-5 cursor-pointer'
                    onClick={closeProductDetail}
                ></AiOutlineClose>
            </div>
            <figure className='px-6'>
                <img 
                className='w-full h-full rounded-lg'
                src={detailInfo.img} 
                alt={detailInfo.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${detailInfo.price}</span>
                <span className='font-medium text-md'>{detailInfo.title}</span>
                <span className='font-light text-sm'>{detailInfo.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail 