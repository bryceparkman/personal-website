// import Link from 'next/link'
import { useRouter } from 'next/router'
import utilStyles from '../styles/utils.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navigation() {
    const router = useRouter();
    return (
        <Navbar bg="white" variant="light" expand="sm" style={{padding: '20px 2vw 20px 7vw'}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link to="top" spy={true} smooth={true} offset={-200} duration={500} activeClass={utilStyles.active} style={{ cursor: 'pointer' }}>
                        <div>
                            Home
                        </div>
                    </Link>
                </Nav>
                <Nav className="ml-auto">
                    <Link to="about" spy={true} smooth={true} offset={-120} duration={500} activeClass={utilStyles.active} style={{ cursor: 'pointer' }}>
                        <div>
                            About Me
                         </div>
                    </Link>
                    <div style={{width: 20}}></div>
                    <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} activeClass={utilStyles.active} style={{ cursor: 'pointer' }}>
                        <div >
                            Portfolio
                        </div>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}