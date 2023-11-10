import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'

const Home = () => {
  const [products, setProducts] = useState(null)
  //siempre que haya consumo de API, pensar en useEffect
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(response => {
        setProducts(response)
      })
  }, [])
  return (
    <Layout>
      <h1 className='font-medium text-xl mb-6'>Products</h1>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          products?.map((product) => (
            <Card key={product.id} id={product.id} title={product.title} category={product.category} img={product.image} price={product.price}/>
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home