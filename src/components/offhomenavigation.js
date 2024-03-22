import styles from '../styles/navbar.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

export default function OffHomeNavigation({link, title}) {
    return (
        <Navbar expand="sm" className={styles.navbar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mr-auto'>
                    <Link href={link} className={styles.offNavbarElement}>
                        <div>
                            &nbsp;&nbsp;{title}&nbsp;&nbsp;
                        </div>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}