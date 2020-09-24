import Link from 'next/link'
import { useRouter } from 'next/router'
import utilStyles from '../styles/utils.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Navigation() {
    const router = useRouter();
    return (
        <Navbar bg="white" variant="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link href="/" passHref>
                        <Nav.Link>
                            <div className={router.pathname === '/' ? utilStyles.active : ''}>
                                Home
                            </div>
                        </Nav.Link>
                    </Link>
                </Nav>
                <Nav className="ml-auto">
                    <Link href="/projects" passHref>
                        <Nav.Link>
                            <div className={router.pathname === '/projects' ? utilStyles.active : ''}>
                                Projects
                            </div>
                        </Nav.Link>
                    </Link>
                    <Nav.Link href='/Bryce-Parkman-Resume.pdf'>
                        <div style={{color: '#777'}}>
                            Résumé
                        </div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}