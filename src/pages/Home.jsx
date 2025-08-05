import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Videocall from '../components/Videocall'
import Understand from '../components/Understand'
import Rating from '../components/Rating'
import Section5 from '../components/Section5'
import Partners from '../components/Partners'
import Daala from '../components/Daala'
import Faqs from '../components/Faqs'
import Shopping from '../components/Shopping'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
        <Navbar />
        <Hero />
        <Videocall />
        <Understand />
        <Rating />
        <Section5 />
        <Partners />
        <Daala />
        <Faqs />
        <Shopping  />
        <Blog />
        <Footer />
    </div>
  )
}

export default Home