import React, { useState, useEffect} from "react";
import styles from './styles/NavBar.module.css';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import Link from 'next/link';


function NavBar() {
    const[show, handleShow] = useState(false);
    useEffect(() => {

        window.addEventListener("scroll", () =>{
            if (window.scrollY > 25) {
                console.log("handleShow=true")
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        }

    }, []);

//     <div class="md:hidden flex items-center">
// 	<button class="outline-none mobile-menu-button">
// 		<svg
// 			class="w-6 h-6 text-gray-500"
// 			x-show="!showMenu"
// 			fill="none"
// 			stroke-linecap="round"
// 			stroke-linejoin="round"
// 			stroke-width="2"
// 			viewBox="0 0 24 24"
// 			stroke="currentColor"
// 		>
// 		<path d="M4 6h16M4 12h16M4 18h16"></path>
// 		</svg>
// 	</button>
// </div>



    return (
        <div className={`${show && styles.nav__black} ${styles.navbarWrapper} ${styles.nav}`}> 
        <nav className={styles.navbar}>
      <div className={styles['navbar-logo']}>
            <img
                className={styles.nav__logo}
                src="http://watermann.wpengine.com/wp-content/uploads/2020/06/Watermann-Logo.png" 
                alt="Watermann Logo"
                />
                </div>

      <ul className={styles['navbar-list']}>
        <li>
          <a  activeclass="font-bold"
             
           href="#section1" > Home</a>
        </li>
        <li>
          <a  activeclass="font-bold"
              
           href="#section2" scroll = {false}>About</a>
        </li>
        <li>
          <a  activeclass="font-bold"
              
          href="#section3" >Features</a>
        </li>
        <li>
          <a  activeclass="font-bold"
             
          href="#section4" className={styles.button} > Contact </a>
        </li>
       
      </ul>
    </nav>
      
    {/* <nav className={styles.navbar}>
      <div className={styles['navbar-logo']}>
                <img 
                className={styles.nav__avatar}
                src="http://watermann.wpengine.com/wp-content/uploads/2020/06/Watermann-Logo.png"
                alt="Watermann Logo"
                />

    </div>
    </nav> AVATAR CODE */}
        </div>
    
    )
    
}

function Button() {
    return <button>Login</button>;
  }

export default NavBar;