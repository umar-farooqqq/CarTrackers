import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Understand from '../components/Understand'

const Apply = () => {
  return (
    <div>
        <Navbar />
        <Hero imgpoint2={`/happy.png`} />
        <Understand />
        <Footer />
    </div>
  )
}

export default Apply