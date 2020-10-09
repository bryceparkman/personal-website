import Link from 'next/link'
import { useRouter } from 'next/router'
import utilStyles from '../styles/utils.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Navigation() {
    const router = useRouter();
    return (
        <Navbar bg="white" variant="light" expand="md">
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
                    <NavDropdown title={<span className={router.pathname !== '/' && router.pathname !== '/resume' ? utilStyles.active : ''}>Projects</span>}>
                        <NavDropdown.Item href="/overview">Overview</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/nadine">Nadine El Nesr</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/bridges">Student Bridges</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/mask">MASKerAID</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/visualizations">Visualizations</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='/Bryce-Parkman-Resume.pdf'>
                        <div style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                            Résumé
                        </div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}