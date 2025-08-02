import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/Howitworks'
import Videocall from '../components/Videocall'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <HowItWorks />
        <Videocall />
    </div>
  )
}

export default Home