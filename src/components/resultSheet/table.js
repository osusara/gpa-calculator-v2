import React from "react";
import { Row, Col, Table, Card, Form } from "react-bootstrap";

const SubjectTable = ({ data }) => {
  return data.years.map((item) => (
    <div className="my-2">
      <h2>{`Year ${item.year}`}</h2>
      <Row key={item.year} className="my-2">
        {item.semesters.map((item) => (
          <Col md={6} xs={12} key={item.semester} className="mx-auto">
            <Card className="mx-auto">
              <Card.Body>
                <Card.Title className="text-center">{`Semester ${item.semester}`}</Card.Title>
                <Table className="mx-auto">
                  <tbody>
                    <tr>
                      <th>Code</th>
                      <th>Subject</th>
                      <th className="text-center">Credits</th>
                      <th className="text-center" style={{ width: "10%" }}>
                        Grade
                      </th>
                    </tr>
                    {item.subjects.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.subject}</td>
                        <td className="text-center">{item.credits}</td>
                        <td className="text-center">
                          <Form.Group>
                            <Form.Control name={item.id} />
                          </Form.Group>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  ));
};

export default SubjectTable;
