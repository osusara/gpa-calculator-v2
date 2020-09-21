import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const User = ({ user, uniData, authId, gpa }) => {
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    if (uniData.faculties) {
      const fac = uniData.faculties.filter(
        (faculty) => faculty.id === user.faculty
      )[0];

      if (fac) {
        setFaculty(fac.name);

        const dep = fac.departments.filter(
          (department) => department.id === user.department
        )[0];

        if (dep) {
          setDepartment(dep.name);
        }
      }
    }
  }, [uniData, user]);

  if (!authId) return <Redirect to="/auth" />;

  return (
    <Container>
      <Row>
        <Col md={12} xs={12} className="text-center">
          <h1>
            <small>Hi, There!</small>
            <br />
            {user.name}
          </h1>
          <h5>Faculty of {faculty}</h5>
          <h5>Department of {department}</h5>
        </Col>
      </Row>
      <Row>
        <Col md={8} xs={12} className="my-3 mx-auto">
          <Card>
            <Card.Body className="text-center">
              <h2>Current GPA</h2>
              <h1>{gpa.totalGPA.toFixed(4)}</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={3} xs={12} className="text-center">
          <Card>
            <Card.Body>
              <h5>
                <small>1st Year GPA</small> <br />
                {gpa.yearlyTotalGPAs[0].toFixed(4)}
              </h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={12} className="text-center">
          <Card>
            <Card.Body>
              <h5>
                <small>2nd Year GPA</small> <br />
                {gpa.yearlyTotalGPAs[1].toFixed(4)}
              </h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={12} className="text-center">
          <Card>
            <Card.Body>
              <h5>
                <small>3rd Year GPA</small> <br />
                {gpa.yearlyTotalGPAs[2].toFixed(4)}
              </h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={12} className="text-center">
          <Card>
            <Card.Body>
              <h5>
                <small>4th Year GPA</small> <br />
                {gpa.yearlyTotalGPAs[3].toFixed(4)}
              </h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
