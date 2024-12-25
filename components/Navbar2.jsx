'use client'

import React, { useEffect } from 'react';
import M from "materialize-css";
import Image from 'next/image';
import Link from 'next/link';
const Navbar2 = () => {
  useEffect(() => {
    // Initialize sidenav after DOM loads
    const sidenavElems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenavElems, {}); // Add options if needed
  }, []);

  return (
    <div className='nav'>
      <nav id='navwrap'>
        <div className="nav-wrapper">
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">&#8801;</i></a>
          <a href="#!" id='blogo' className="brand-logo ayaschyalogo"><Image src='logo.svg' alt='logo' width={200} height={50} /></a>

          <ul className="right hide-on-med-and-down" id='isthisthebg'>
            <li><Link href="/">Home</Link></li>
            <li><a href="https://ayaschyaofficial.vercel.app/events">Events</a></li>
            <li><Link href="/about">About</Link></li>
            <li><a href="https://ayaschyaofficial.vercel.app/login">Login</a></li>
            <li><Link href="https://ayaschyaofficial.vercel.app/signup">Sign Up</Link></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav isthissidebg lighten-5" style={{ color: "white" }} id="mobile-demo">
        <li><Link href="/">Home</Link></li>
        <li><a href="https://ayaschyaofficial.vercel.app/events">Events</a></li>
        <li><Link href="/about">About</Link></li>
        <li><a href="https://ayaschyaofficial.vercel.app/login">Login</a></li>
        <li><a href="https://ayaschyaofficial.vercel.app/signup">Sign Up</a></li>
      </ul>
    </div>
  )
}

export default Navbar2;