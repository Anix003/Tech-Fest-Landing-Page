// import './Navbar.css';
'use client';

import React, {useRef} from 'react';
import Link from 'next/link';

function Navbar(){
  const navLinksRef = useRef(null);

  const toggleMenu = () => {
    const navLinks = navLinksRef.current;
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
  };
    return(
      <nav className='nav'>
        <div className='logo'>LG</div>
        <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className="nav-links" ref={navLinksRef}>
        <div className='nav-left'>
          <Link href='/Home'>Home</Link>
          <Link href='/Events'>Events</Link>
          <Link href='/About'>About</Link>
        </div>
        <div className='nav-right'>
          <Link href='/Events'>Login</Link>
          <Link href='/About'>Login</Link>
          {/* <button id='login' href='#'>&#8205; Login</button>
          <button id='signup' href='#'>Sign Up&#8205;</button> */}
        </div>
      </div>
      </nav>
    );
}

export default Navbar;












// import React from 'react';
// import styles from '../styles/Navbar.module.css';

// const Navbar = () => {
//   return (
//     <nav className={styles.navbar}>
//       <input type="checkbox" id="nav-toggle" />
//       <div className={styles.container}>
//         <a href="#" className={styles["nav-brand"]}>Brand Logo</a>

//         <label htmlFor="nav-toggle" className={styles["nav-toggle-label"]}>
//           <span></span>
//         </label>

//         <ul className="{styles.nav-menu}">
//           <li className={styles["nav-item"]}><a href="#">Home</a></li>
//           <li className={styles["nav-item"]}><a href="#">About</a></li>
//           <li className={styles["nav-item"]}><a href="#">Services</a></li>
//           <li className={styles["nav-item"]}><a href="#">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
