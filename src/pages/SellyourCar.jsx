import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Videocall from '../components/Videocall'
import Daala from '../components/Daala'
import Rating from '../components/Rating'
import Faqs from '../components/Faqs'
import SellCar from '../components/SellCar'

const SellyourCar = () => {
  return (
    <div>
        <Navbar />
        <Hero endpoint1={`We'll beat any written dealer offer`} imgpoint2={`/car.png`} />
        <Videocall />
        <Daala />
        <Rating />
        <Faqs />
        <SellCar />
        <Footer />
    </div>
  )
}

export default SellyourCar