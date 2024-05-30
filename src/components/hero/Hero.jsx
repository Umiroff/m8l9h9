import React from 'react'
import '../../scss/hero.scss'
import heroImg1 from '../../assets/hero1.webp';


function Hero() {
  return (
    <>
        <div className='hero'>
            <img src={heroImg1} alt="" />
        </div>
    </>
  )
}

export default Hero