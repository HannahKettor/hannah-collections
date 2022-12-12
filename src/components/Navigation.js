import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Navigation () {
    return (
        <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hannah collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Collection</Nav.Link>
            <Nav.Link href="#link">Men</Nav.Link>
            <Nav.Link href="#home">Women</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link"> Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}


