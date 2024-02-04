import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <div>
      <Link href={'/courses'}>
      <div className='p-3 ml-5 mt-50 bg-black w-1/12 text-white rounded-full text-center'>Back</div>
      </Link>
        <div className='font-black text-4xl px-20 pt-20 pb-10'>Javascript Fundamentals Beginner</div>
        <div className='px-20 font-bold w-1/2 pb-10'>Javascript Fundatementals Fundamentals: A beginner-friendly module introducing core Js concepts such as syntax, data types, and control flow. Learn through interactive exercises and projects.</div>
       <div class="space-y-5 h-screen">
        <Link href={'/jsvariables'}>
  <div class="mx-auto w-1/2 bg-black rounded-md text-white text-center py-2 font-bold mb-5">
    Js varaibles 
  </div>
  </Link>
  <Link href={'/conditional'}>
  <div class="mx-auto w-1/2 bg-black rounded-md text-white text-center py-2 font-bold mb-5">
   Js conditional and control statements 
  </div>
  </Link>
  <Link href={'/class'}>
  <div class="mx-auto w-1/2 bg-black rounded-md text-white text-center py-2 font-bold mb-5 ">
   Js class and objects concepts 1
  </div>
  </Link>
</div>

    </div>
  )
}
