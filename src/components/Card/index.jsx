import React, { useContext } from 'react'
import { EcommerceContext } from '../../context'
import {GrAdd} from 'react-icons/gr'
import {AiOutlineCheck} from 'react-icons/ai'

const Card = props => {

  const { title, category, img, price, id } = props
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

  const showProduct = () => {
    setDetailInfo(props)
    openProductDetail()
  }

  const addingProduct = (e) => {
    e.stopPropagation()
    setCount(count + 1)
    setCart([...cart, { title, category, img, price, id }])
    openCheckOutMenu()
    closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = cart.filter((product) => product.id === id).length > 0
    if (isInCart) {
      return (
        <div
            className='absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2'
          ><AiOutlineCheck /></div>
      )
    } else {
      return (
        <div
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
            onClick={(e) => addingProduct(e)}
          ><GrAdd /></div>
      )
    }
  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60'
      onClick={() => showProduct()}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs font-medium m-2 px-3 py-0.5'>{category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={img} alt={title} />
        {renderIcon(id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </div>
  )
}

export default Card