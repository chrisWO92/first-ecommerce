import React, { useContext } from 'react'
import { EcommerceContext } from '../../context'

const Card = props => {
  console.log(props)
  const { title, category, img, price } = props
  const { states, stateUpdaters } = useContext(EcommerceContext)
  console.log(title)

  const {
    count, 
    detailOpen, 
    detailInfo, 
    cart,
    checkoutMenuOpen
} = states

  const  {
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

  const showProduct = () => {
    setDetailInfo(props)
    console.log(detailInfo)
    openProductDetail()
  }

  const addingProduct = (e) => {
    e.stopPropagation()
    setCount(count + 1)
    setCart([...cart, { title, category, img, price }])
    openCheckOutMenu()
    closeProductDetail()
    //console.log(cart)
  }
  
  return (
    <div 
      className='bg-white cursor-pointer w-56 h-60'
      onClick={() => showProduct()}
      >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs font-medium m-2 px-3 py-0.5'>{category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={img} alt={title} />
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
          onClick={(e) => addingProduct(e)}
        >+</div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </div>
  )
}

export default Card