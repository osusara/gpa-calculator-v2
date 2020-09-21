import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Container, Form, Card, Row, Col } from "react-bootstrap";
import { addUser } from "../../services/db";

const UserForm = ({ user, setUser, uniData, authId }) => {
  const [formData, setFormData] = useState({
    name: "",
    faculty: "",
    department: "",
  });

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const onSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    addUser(formData, authId);
    console.log(formData);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const departmentSelector = () => {
    switch (formData.faculty) {
      case "applied":
        return (
          <Form.Group>
            <Form.Label>Department</Form.Label>
            <Form.Control
              selected=""
              as="select"
              name="department"
              value={formData.department}
              onChange={(e) => onChange(e)}
            >
              <option value="" hidden>
                Department
              </option>
              {uniData.faculties
                .filter((faculty) => faculty.id === formData.faculty)[0]
                .departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
        );
      default:
        return (
          <Form.Group>
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <Form.Label>
              Faculty of{" "}
              {uniData.faculties.filter(
                (faculty) => faculty.id === formData.faculty
              )[0]
                ? uniData.faculties.filter(
                    (faculty) => faculty.id === formData.faculty
                  )[0].name
                : "your choise"}{" "}
              is not currently available 😥
            </Form.Label>
          </Form.Group>
        );
    }
  };

  if (!authId) return <Redirect to="/auth" />;

  return (
    <Container>
      <Row>
        <Col md={10} xs={12} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Edit user details</Card.Title>
              <Form onSubmit={(e) => onSubmit(e)}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
                <Row>
                  <Col md={6} xs={12}>
                    <Form.Group>
                      <Form.Label>Faculty</Form.Label>
                      <Form.Control
                        selected=""
                        as="select"
                        name="faculty"
                        value={formData.faculty}
                        onChange={(e) => onChange(e)}
                      >
                        <option value="" hidden>
                          Faculty
                        </option>
                        {uniData.faculties
                          ? uniData.faculties.map((faculty) => (
                              <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
                            ))
                          : "Loading..."}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6} xs={12}>
                    {formData.faculty !== "" ? departmentSelector() : null}
                  </Col>
                </Row>
                <Form.Group>
                  <Button type="submit">Save</Button>
                  <Link to="/" className="btn btn-light">
                    Discard
                  </Link>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserForm;
