import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import { EcommerceContext } from '../../context'
import OrderCard from '../../components/OrderCard'

const MyOrder = () => {
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

  console.log(order?.slice(-1))

  return (
    <Layout>
      My Order
      <div className='flex flex-col w-80'>
        {
          order?.slice(-1)[0].products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageURL={product.img}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder