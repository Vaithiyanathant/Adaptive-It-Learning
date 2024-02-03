// Navbar.js
"use client"
import React from 'react';
import './Navbar.css';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router=useRouter();
  
  const {data,status} = useSession()
 
  if (status== 'authenticated'){
    router.push('/')
  }

  if (status == 'unauthenticated'){
    router.push('/')
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="adpative\public\logo.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link href={'/courses'}>
            Courses
          </Link>
        </li>
      </ul>
      {status === "unauthenticated"?(
      <div className="navbar-login">
        <button onClick={() => signIn('google')}> Login</button>
      </div>
      ):(
        <div className='navbar-login'>
          <button onClick={signOut}>Logout</button>
          <img src="https://adviceco.com.au/wp-content/uploads/sites/683/2019/10/profile-icon-male-user-person-avatar-symbol-vector-20910833.png" alt="profile" className='profile'/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
