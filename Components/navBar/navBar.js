import React, { useState, useEffect} from "react";
import styles from './styles/NavBar.module.css';


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
        
            <img
                className={styles.nav__logo}
                src="http://watermann.wpengine.com/wp-content/uploads/2020/06/Watermann-Logo.png" 
                alt="Watermann Logo"
                />
                
                <img 
                className={styles.nav__avatar}
                src="http://watermann.wpengine.com/wp-content/uploads/2020/06/Watermann-Logo.png"
                alt="Watermann Logo"
                />

                
        </div>
    )
}

export default NavBar;