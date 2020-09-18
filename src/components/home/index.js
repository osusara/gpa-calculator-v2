import React from "react";
import { Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

const Home = ({ authId, gpa }) => {
  if (!authId) return <Redirect to="/auth" />;

  return (
    <Container fluid={true}>
      <h1>Home</h1>
      <p>GPA - {gpa.totalGPA.toFixed(4)}</p>
    </Container>
  );
};

export default Home;
