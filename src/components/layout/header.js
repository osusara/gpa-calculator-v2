import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="container navbar-light navbar-fix">
      <Navbar.Brand href="#" className="brand-link">
        SUSL GPA Calculator
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav navbar-fix">
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/results" className="nav-link">
            Result Sheet
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
