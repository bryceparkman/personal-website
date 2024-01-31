import { useRouter } from 'next/router'
import layoutStyles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navigation() {
    const router = useRouter();
    return (
        <Navbar>
            <Navbar className={`d-none d-md-block bg-light ${layoutStyles.sidebar}`}>
                <div className="sidebar-sticky"></div>
                <Nav>
                    <Link to="top" spy={true} smooth={true} offset={-200} duration={500} activeClass={utilStyles.active} className={layoutStyles.sidebarElement}>Home</Link>
                </Nav>
                <Nav>
                    <Link to="about" spy={true} smooth={true} offset={-120} duration={500} activeClass={utilStyles.active} className={layoutStyles.sidebarElement}>About Me</Link>
                </Nav>
                <Nav>
                    <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} activeClass={utilStyles.active} className={layoutStyles.sidebarElement}>Portfolio</Link>
                </Nav>
            </Navbar>
        </Navbar>
    );
}