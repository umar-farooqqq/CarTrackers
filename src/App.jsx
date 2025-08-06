import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import SellyourCar from './pages/SellyourCar'
import Apply from './pages/Apply'
import Beatoffer from './pages/Beatoffer'
import Aboutus from './pages/Aboutus'
import Faqs from './pages/Faqs' 
import Kelley from './pages/Kelley'
import Media from './pages/Media'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sellyourcar" element={<SellyourCar />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/beatoffer" element={<Beatoffer />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/kelley" element={<Kelley />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </div>
  )
}