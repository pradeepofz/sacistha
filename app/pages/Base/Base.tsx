import React from 'react'
import Marquee from '../../organisms/Marquee'
import Navbar from '../../organisms/Navbar'
import Home from '../Home/home'
import './Base.css'

const Base: React.FC = () => {
  return (
    <div className='base-container'>
       {true && <Marquee speed={16}>
        <span> Biggest offer season!!! 🥳 </span>
        <span> Get 20% off on all products🎁 </span>
        <span> Order Now 🛒 </span> 
      </Marquee>}
      <Navbar />
      <Home />
    </div>
  )
}

export default Base