import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Welcome from '../../components/welcome/Welcome'
import WhatSection from '../../components/whatsection/WhatSection'
import Community from '../../components/community/Community'

const Home = () => {
  return (
   <>
   <div>
    <Navbar />
    <Hero />
    <Welcome />
    <WhatSection />
    <Community />
   </div>
   </>
  )
}

export default Home