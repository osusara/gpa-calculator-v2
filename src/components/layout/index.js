import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

import Header from "./header";
import Footer from "./footer";

function Layout({ children, logout }) {
  return (
    <>
      <Header logout={logout} />
      <Container fluid={true} className="main mt-5 mb-3">
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
