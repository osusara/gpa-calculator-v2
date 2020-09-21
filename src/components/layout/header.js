import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ logout }) {
  return (
    <Navbar expand="lg" className="container navbar-light navbar-fix">
      <Navbar.Brand href="/" className="brand-link">
        SUSL GPA Calculator
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav navbar-fix">
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/sheet" className="nav-link">
            Results Sheet
          </Link>
          <Link to="/me" className="nav-link">
            Edit Profile
          </Link>
          <Button onClick={() => logout()}>Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
