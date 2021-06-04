import { useRouter } from 'next/router'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

export default function OffHomeNavigation() {
    const router = useRouter();
    return (
        <Navbar bg="white" variant="light" expand="sm" style={{padding: '20px 2vw 20px 7vw'}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link href="/#topAnchor">
                        <div style={{ cursor: 'pointer' }}>
                            Home
                        </div>
                    </Link>
                </Nav>
                <Nav className="ml-auto">
                    <Link href="/#aboutAnchor">
                        <div style={{ cursor: 'pointer' }}>
                            About Me
                         </div>
                    </Link>
                    <div style={{width: 20}}></div>
                    <Link href="/#portfolioAnchor">
                        <div style={{ cursor: 'pointer' }}>
                            Portfolio
                        </div>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}