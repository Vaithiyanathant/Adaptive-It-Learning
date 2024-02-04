import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <div>
      <Link href={'/courses'}>
      <div className='p-3 ml-5 mt-50 bg-black w-1/12 text-white rounded-full text-center'>Back</div>
      </Link>
        <div className='font-black text-4xl px-20 pt-20 pb-10'>Javascript Advanced</div>
        
        <div className='px-20 font-bold w-1/2 pb-10'>Javascript Advanced: An in-depth module delving into advanced Js topics including object-oriented programming, functional programming, decorators, generators, and advanced data structures. Gain mastery through challenging projects and real-world applications.
                
        </div>
       <div class="gap-y-5 h-screen">
        <Link href={'/crash'}>
  <div className="mx-auto w-1/2 bg-black rounded-md text-white text-center py-2 font-bold mb-5">
    Crash Course
  </div>
  </Link>
  <Link href={'/maps'}>
  <div className="mx-auto w-1/2 bg-black rounded-md text-white text-center py-2 font-bold mb-5">
    Maps,Filters,Reduce
  </div>
  </Link>
  <Link href={'/async'}>
  <div className="mx-auto w-1/2 bg-black rounded-md text-white text-center py-2 font-bold ">
    Async - Awiat
  </div>
  </Link>
</div>

    </div>
  )
}
