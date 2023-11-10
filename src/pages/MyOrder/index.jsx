import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import { EcommerceContext } from '../../context'
import OrderCard from '../../components/OrderCard'
import { GrPrevious } from 'react-icons/gr'
import { Link, useParams } from 'react-router-dom'



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

  const currentPath = window.location.pathname
  const param = currentPath.slice(currentPath.lastIndexOf('/') + 1, currentPath.length)
  const params = useParams()
  let index
  let orderToShow
  if (param === "last") {
    index = 0
    orderToShow = order?.slice(-1)[0]
  } else {
    index = Number(params.id)
    orderToShow = order[params.id]
  }

  console.log(currentPath)
  console.log(currentPath.lastIndexOf('/'))
  console.log(currentPath.slice(currentPath.lastIndexOf('/') + 1, currentPath.length))
  
  console.log(params.id)
  console.log(order)
  console.log(order[params.id])
  console.log(orderToShow.products)

  return (
    <Layout>
      <div className='flex items-center relative justify-center w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0 cursor-pointer'>
          <GrPrevious className='h-5 w-5'/>
        </Link>
        <h1 className='font-medium text-xl'>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          orderToShow.products.map((product) => (
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