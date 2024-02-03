import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <div>
        <div className='font-black text-4xl px-20 pt-20 pb-10'>Python Programming Fundamentals Beginner</div>
        <div className='px-20 font-bold w-1/2 pb-10'>Python Fundamentals: A beginner-friendly module introducing core Python concepts such as syntax, data types, and control flow. Learn through interactive exercises and projects.</div>
       <div class="space-y-5 h-screen">
        <Link href={'/modules'}>
  <div class="mx-auto w-1/2 bg-black rounded-md text-white text-center py-2 font-bold">
    Lambda Functions and list Comprehension
  </div>
  </Link>
  <Link href={'/modules'}>
  <div class="mx-auto w-1/2 bg-black rounded-md text-white text-center py-2 font-bold">
    Exception Handling
  </div>
  </Link>
  <Link href={'/modules'}>
  <div class="mx-auto w-1/2 bg-black rounded-md text-white text-center py-2 font-bold ">
    Map Filters Reduce
  </div>
  </Link>
</div>

    </div>
  )
}
