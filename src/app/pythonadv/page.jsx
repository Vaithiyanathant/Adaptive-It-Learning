import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <div>
        <div className='font-black text-4xl px-20 pt-20 pb-10'>Python Programming  Advanced</div>
        <div className='px-20 font-bold w-1/2 pb-10'>Python Advanced: An in-depth module delving into advanced Python topics including object-oriented programming, functional programming, decorators, generators, and advanced data structures. Gain mastery through challenging projects and real-world applications.</div>
       <div class="gap-y-5 h-screen">
        <Link href={'/lambdaf'}>
  <div class="mx-auto w-1/2 bg-black rounded-md text-white text-center py-2 font-bold mb-5">
    Lambda Functions and list Comprehension
  </div>
  </Link>
  <Link href={'/exception'}>
  <div class="mx-auto w-1/2 bg-black rounded-md text-white text-center py-2 font-bold mb-5">
    Exception Handling
  </div>
  </Link>
  <Link href={'/map'}>
  <div class="mx-auto w-1/2 bg-black rounded-md text-white text-center py-2 font-bold ">
    Map Filters Reduce
  </div>
  </Link>
</div>

    </div>
  )
}
