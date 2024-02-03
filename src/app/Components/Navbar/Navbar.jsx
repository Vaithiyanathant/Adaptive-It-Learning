// Navbar.js
"use client"
import React from 'react';
import './Navbar.css';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

const Navbar = () => {
  
  const {data,status} = useSession()
  console.log(data)
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
      <div className="navbar-login">
        <button onClick={() => signIn('google')}> Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
