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
import Blogs from '../components/Blogs'

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
        <Blogs />
    </div>
  )
}

export default Home