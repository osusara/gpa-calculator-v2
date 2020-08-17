import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <Container fluid={true} className="bg-white fixed-top mb-2 navbar-fix">
      <Navbar expand="lg" className="container navbar-light navbar-fix">
        <Navbar.Brand href="#" className="brand-link">
          SUSL GPA Calculator
        </Navbar.Brand>

        <Navbar.Toggle
          className="text-primary toggle-button-fix"
          aria-controls="basic-navbar-nav"
          onClick={(e) => setToggle(!toggle)}
        >
          <button
            className={`btn toggle-inner-button-fix hamburger hamburger--slider ${
              toggle ? "is-active" : ""
            } `}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav navbar-fix">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/results" className="nav-link">Result Sheet</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
