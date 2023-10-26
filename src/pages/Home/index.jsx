import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'

const Home = () => {
  const [products, setProducts] = useState(null)
  //siempre que haya consumo de API, pensar en useEffect
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
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
            <Card key={product.id} title={product.title} category={product.category.name} img={product.images[0]} price={product.price}/>
          ))
        }
      </div>
    </Layout>
  )
}

export default Home