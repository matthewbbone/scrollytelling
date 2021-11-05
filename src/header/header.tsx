import React from 'react';
import { Navbar, Container, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import "./header.css"

function WebHeader() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavItem>Item 1</NavItem>
                    <NavItem>Item 1</NavItem>
                    <NavItem>Item 1</NavItem>
                </Container>
            </Navbar>
        </header>
    )
}

export default WebHeader;