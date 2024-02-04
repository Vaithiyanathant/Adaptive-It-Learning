import React from 'react'
import Hero from '../Components/HeroSection/hero'
import Testimonial from '../Components/Testimonials/Testimonial'
import Rec from '../Components/Rec/Rec'
import Top from '../Components/Top/Top'



export default function Home() {
  return (
    <div>
   
        <Hero/>
        
        <Rec/>
        <Top/>
        <Testimonial/>
    </div>
  )
}
