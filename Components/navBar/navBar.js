import React, { useState, useEffect} from "react";
import styles from './styles/NavBar.module.css';
import Link from 'next/link';


function NavBar() {
    const[show, handleShow] = useState(false);
    

    useEffect(() => {

        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100) {
                console.log("handleShow=true")
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        }

    }, []);

    return (
        <div className={`${show && styles.nav__black} ${styles.nav}`}> 
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
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/login">
            <Button />
          </Link>
        </li>
      </ul>
    </nav>
        
    <nav className={styles.navbar}>
      <div className={styles['navbar-logo']}>
                <img 
                className={styles.nav__avatar}
                src="http://watermann.wpengine.com/wp-content/uploads/2020/06/Watermann-Logo.png"
                alt="Watermann Logo"
                />

    </div>
    </nav> 
        </div>
    )
}

function Button() {
    return <button>Login</button>;
  }

export default NavBar;