import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Welcome from '../../components/welcome/Welcome'

const Home = () => {
  return (
   <>
   <div>
    <Navbar />
    <Hero />
    <Welcome />
   </div>
   </>
  )
}

export default Home