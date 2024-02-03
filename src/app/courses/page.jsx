import React from 'react'
import CourseCard from '../Components/Courses/Courses'

export default function Courses() {
  return (
    <div>
      <div className="header text-5xl font-black text-center p-20   bg-yellow-500 m-4">
        Find the Perfect Courses
        
      </div>

      <div className='mx-40 p-5 font-black text-2xl'>
        Find the Personalized Courses
     
      </div>

      <div className='mx-40 p-5'>Select the course and Attend the skill test for Personalized Content</div>

      <CourseCard/>
    </div>
  )
}
