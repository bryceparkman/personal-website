import { useRouter } from 'next/router'
import styles from './layout.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-scroll";

export default function Navigation() {
    const router = useRouter();
    return (
        <Navbar expand="sm"  className={styles.navbar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto mr-auto'>
                    <Link to="top" spy={true} smooth={true} offset={-200} duration={500} activeClass={styles.navbarActive} className={styles.navbarElement}>
                        <div>
                            &nbsp;&nbsp;Home&nbsp;&nbsp;
                        </div>
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={-130} duration={500} activeClass={styles.navbarActive} className={styles.navbarElement}>
                        <div>
                            &nbsp;&nbsp;Projects&nbsp;&nbsp;
                         </div>
                    </Link>
                    <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} activeClass={styles.navbarActive} className={styles.navbarElement}>
                        <div>
                            &nbsp;&nbsp;Résumé&nbsp;&nbsp;
                        </div>
                    </Link>
                    <Link to="fun" spy={true} smooth={true} offset={-70} duration={500} activeClass={styles.navbarActive} className={styles.navbarElement}>
                        <div>
                            &nbsp;&nbsp;Interactives&nbsp;&nbsp;
                        </div>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}