import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css'
const Navigation = () => {
  return (
    // <div className="navBack fixed-top ">
    //   <Navbar collapseOnSelect expand="lg" className="container ">

    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav >
    //         <Nav.Link className='nav-link'  href="/">Home</Nav.Link>
    //         <Nav.Link className='nav-link'  href="#project">Projects</Nav.Link>
    //         <Nav.Link  className='nav-link' href="#blogs">Blogs</Nav.Link>
    //         <Nav.Link className='nav-link' href="#contact">Contact</Nav.Link>
    //         <Nav.Link className='nav-link'  href="/resume">Resume</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </div>
    <nav  className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img
          style={{width:"80px"}}
          src="https://i.ibb.co/dQXYCvg/Habib-designstyle-boots-m.png"
          alt="received-928227521113452"
          border="0"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Nav.Link className='nav-link'  href="/">Home</Nav.Link>
          </li>
          <li className="nav-item">
          <Nav.Link className='nav-link'  href="#project">Projects</Nav.Link>
          </li>
          <li className="nav-item">
          <Nav.Link  className='nav-link' href="#blogs">Blogs</Nav.Link>
          </li>
          <li className="nav-item">
          <Nav.Link className='nav-link' href="#contact">Contact</Nav.Link>
          </li>
          <li className="nav-item">
          <Nav.Link className='nav-link'  href="/resume">Resume</Nav.Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navigation;