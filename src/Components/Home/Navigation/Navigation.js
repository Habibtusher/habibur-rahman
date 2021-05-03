import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
const Navigation = () => {
    return (
<div className="navBack fixed-top ">
<Navbar collapseOnSelect expand="lg" className="container ">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav >
      <Nav.Link style={{color:"black"}}  href="/">Home</Nav.Link>
      <Nav.Link style={{color:"black"}}  href="/allProject">Projects</Nav.Link>
      <Nav.Link style={{color:"black"}}  href="/blog">Blogs</Nav.Link>
      <Nav.Link style={{color:"black"}} href="/contact">Contact</Nav.Link>
      <Nav.Link style={{color:"black"}}  href="/resume">Resume</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    );
};

export default Navigation;