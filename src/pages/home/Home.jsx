import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home