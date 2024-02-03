"use client"

import React from 'react'
import './hero.css'


import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'

export default function Hero() {

  return (
    <div>
      <div className="main_tittle">
        <h1 className='learn'>Learn IT</h1>
        <div className="subtag">
          <p className='sub'>&quot;Empowering Every Learner, Every Step of the Way&quot;</p>
          <p className='desc'>&quot;Discover personalized learning like never before with LearnIT. Our adaptive platform customizes education to your needs, providing tailored support and resources for every learner. Join us and revolutionize the way you learn!&quot;</p>
        </div>
        <div className="info_buttons">
          
          <button className='skill_test' >Skill Test</button>
          
          <Link href={'/courses'}>
          <button className='view_courses'>Courses</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
