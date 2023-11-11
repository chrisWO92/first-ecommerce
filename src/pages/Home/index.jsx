import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { EcommerceContext } from '../../context'

const Home = () => {

  const { states, stateUpdaters } = useContext(EcommerceContext)
  const {
    count,
    detailOpen,
    detailInfo,
    cart,
    checkoutMenuOpen,
    order,
    products,
    searchValue,
    searchValueCategory,
    loading
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
    setOrder,
    setProducts,
    setSearchValue,
    filter,
    filterByCategory,
    setSearchValueCategory,
    setLoading
  } = stateUpdaters

  const currentPath = window.location.pathname
  const param = currentPath.slice(currentPath.lastIndexOf('/') + 1, currentPath.length)
  setSearchValueCategory(param)

  let searchedProductsByCategory = filterByCategory(searchValueCategory)
  let searchedProductsByTitle = filter(searchedProductsByCategory, searchValue)

  const renderFunc = () => {
    if (!loading) {
      if (searchedProductsByTitle?.length > 0) {
        return (
          <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
              searchedProductsByTitle?.map((product) => (
                <Card key={product.id} id={product.id} title={product.title} category={product.category} img={product.image} price={product.price} />
              ))
            }
          </div>
        )
      } else {
        return (
          <div className='font-medium text-lg'>Sorry, we don't have any products for this keyword</div>
        )
      }
    } else {
      return (
        <div className='font-medium text-lg'>Loading ...</div>
      )
    }
    
  }

  return (
    <Layout>
      <h1 className='font-medium text-xl mb-6'>Exclusive Products</h1>
      <input
        type="text"
        className='mb-6 p-4 rounded-lg border border-black focus:outline-none w-80'
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {renderFunc()}
      {/* <div className='font-medium text-lg'>Sorry, we don't have any products for this keyword</div>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>        
        {
          searchedProducts?.map((product) => (
            <Card key={product.id} id={product.id} title={product.title} category={product.category} img={product.image} price={product.price} />
          ))
        }
      </div> */}
      <ProductDetail />
    </Layout>
  )
}

export default Home