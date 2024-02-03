// Import the necessary modules

"use client"
import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Correct the import path

export default function Landing() {
  const router = useRouter();

  // Retrieve session data and status
  const { data: sessionData, status } = useSession();

  // Handle sign-in
  const handleSignIn = async () => {
    await signIn('google');
    // No need to manually redirect after sign-in, NextAuth.js handles this automatically
  };

  // Check authentication status and redirect accordingly
  if (status === 'authenticated') {
    router.push('/home');
    return null; // Return null to prevent rendering the landing page content
  }

  if (status === 'unauthenticated'){
    router.push('/')
  }
  // Render the landing page content
  return (
    <>
    {status === 'unauthenticated' ? (
    <div className='flex flex-col justify-center items-center p-3 h-screen'>
      <div className='text-6xl font-extrabold text-center p-10'>Welcome To LearnIT</div>
      <div className='text-xl text-center'>Find the Personalized Courses with LearnIT</div>
      <div className='text-lg text-center py-3'>Sign In With LearnIt to Explore Courses</div>
      <div className="flex justify-center items-center p-3">
        <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignIn}>Sign In With Google</button>
      </div>
    </div>
    ):(
        <button className='border border-white rounded-md px-4 py-1.5' onClick={() => router.push('/home')}>Login</button>
    )}
    </>
  );
}
