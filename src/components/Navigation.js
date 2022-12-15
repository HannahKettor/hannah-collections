import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Navigation () {
    return (
        <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/productdetail" className="nav-link">Hannah collection</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><Link to="/" className="nav-link">Collections</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="#" className="nav-link">Women</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="#" className="nav-link">Men</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="#" className="nav-link">About</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="#" className="nav-link">Contact</Link></Nav.Link>
          <Nav.Link><Link to="/cart" className="justify-end nav-link">
              <FontAwesomeIcon icon={faShoppingCart} /></Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}


