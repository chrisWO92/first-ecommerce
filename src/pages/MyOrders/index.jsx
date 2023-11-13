import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import { EcommerceContext } from '../../context'
import OrdersCard from '../../components/OrdersCard'
import { Link } from 'react-router-dom'

const MyOrders = () => {
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

  return (
    <Layout>
      <p className='font-medium text-xl mb-6'>My Orders</p>      
      <div className='flex flex-col w-80 font-medium text-xl'>
        {
          order?.map((order, index) => (
            <Link to={`/my-orders/${index}`}>
              <OrdersCard
                key={index}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrders