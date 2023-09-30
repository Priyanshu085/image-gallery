"use client";
import Link from 'next/link';
import { Navbar, Nav ,Container } from 'react-bootstrap'
import { usePathname } from "next/navigation";

export default function NavBar(){

    const path = usePathname();

    return(
        <Navbar bg='light'  data-bs-theme="light" sticky='top' expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href='/'>Image Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls='main-navbar' />               
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link as={Link} href="/hello" active={ path === "/hello" }>Hello</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}