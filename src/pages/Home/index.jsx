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
        console.log(response)
      })
  }, [])
  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          products?.map((product) => (
            <Card key={product.id} title={product.title} category={product.category} img={product.image} price={product.price}/>
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home