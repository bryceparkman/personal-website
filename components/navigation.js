import styles from '../styles/navbar.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link  } from "react-scroll";
import { useEffect, useRef, useState } from 'react';

export default function Navigation() {
    const navbarRef = useRef();
    const [navHeight, recordHeight] = useState(0) //Used to offset link scrolling to account for the navbar height obscuring the container

    useEffect(() => {
        if (navbarRef.current){
            recordHeight(navbarRef.current.offsetHeight)
        }
    }, []);

    return (
        <Navbar expand="sm" className={styles.navbar} ref={navbarRef}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto mr-auto'>
                    <Link to="topAnchor" spy={true} smooth={true} offset={-navHeight} duration={500} activeClass={styles.navbarActive} className={styles.navbarElement}>
                        <div>
                            &nbsp;&nbsp;Home&nbsp;&nbsp;
                        </div>
                    </Link>
                    <Link to="projectsAnchor" spy={true} smooth={true} offset={-navHeight} duration={500} activeClass={styles.navbarActive} className={styles.navbarElement}>
                        <div>
                            &nbsp;&nbsp;Projects&nbsp;&nbsp;
                         </div>
                    </Link>
                    <Link to="resumeAnchor" spy={true} smooth={true} offset={-20} duration={500} activeClass={styles.navbarActive} className={styles.navbarElement}>
                        <div>
                            &nbsp;&nbsp;Résumé&nbsp;&nbsp;
                        </div>
                    </Link>
                    <Link to="funAnchor" spy={true} smooth={true} offset={-20} duration={500} activeClass={styles.navbarActive} className={styles.navbarElement}>
                        <div>
                            &nbsp;&nbsp;Interactives&nbsp;&nbsp;
                        </div>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}