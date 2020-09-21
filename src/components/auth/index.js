import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { auth } from "../../firebase";
import Login from "./Login";
import Registr from "./Register";
import ErrorPage from "./ErrorPage";

const Auth = ({ authId }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);

  const signup = (formData) => {
    auth
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .catch(function (error) {
        setError(error);
        console.log(error.code, error.message);
      });
  };

  const login = (formData) => {
    auth
      .signInWithEmailAndPassword(formData.email, formData.password)
      .catch(function (error) {
        setError(error);
        console.log(error.code, error.message);
      });
  };

  if (authId) return <Redirect to="/" />;

  return (
    <Container className="m-5 mx-auto">
      <Row>
        <Col md={6} xs={12} className="mx-auto">
          {!error ? (
            isLogin ? (
              <Login login={login} setIsLogin={setIsLogin} />
            ) : (
              <Registr signup={signup} setIsLogin={setIsLogin} />
            )
          ) : (
            <ErrorPage error={error} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
