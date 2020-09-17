import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Card,
  Form,
  Button,
} from "react-bootstrap";

import {
  TableHead,
  TableTopic,
  CompulsoryRows,
  ElectiveRow,
} from "../../shared/resultsTable";

const Sheet = ({ data }) => {
  const [results, setResults] = useState({});
  const [electives, setElectives] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Compulsory", results);
    console.log("Elective", electives);
  };

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <Container fluid={true} className="form-group">
        <Row className="padding">
          <Col md={6} xs={12} className="mx-auto margin my-3">
            <Card>
              <Card.Body>
                <TableTopic year={1} semester={1} />

                <Table className="Table">
                  <TableHead />
                  <tbody>
                    <CompulsoryRows
                      results={results}
                      setResults={setResults}
                      items={data.years[0].semesters[0]}
                    />
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xs={12} className="mx-auto margin my-3">
            <Card>
              <Card.Body>
                <TableTopic year={1} semester={2} />

                <Table className="Table">
                  <TableHead />
                  <tbody>
                    <CompulsoryRows
                      results={results}
                      setResults={setResults}
                      items={data.years[0].semesters[1]}
                    />
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="padding">
          <Col md={6} xs={12} className="mx-auto margin my-3">
            <Card>
              <Card.Body>
                <TableTopic year={2} semester={1} />

                <Table className="Table">
                  <TableHead />
                  <tbody>
                    <CompulsoryRows
                      results={results}
                      setResults={setResults}
                      items={data.years[1].semesters[0]}
                    />
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xs={12} className="mx-auto margin my-3">
            <Card>
              <Card.Body>
                <TableTopic year={2} semester={2} />

                <Table className="Table">
                  <TableHead />
                  <tbody>
                    <CompulsoryRows
                      results={results}
                      setResults={setResults}
                      items={data.years[1].semesters[1]}
                    />
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="padding">
          <Col md={6} xs={12} className="mx-auto margin my-3">
            <Card>
              <Card.Body>
                <TableTopic year={3} semester={1} />

                <Table className="Table">
                  <TableHead />
                  <tbody>
                    <CompulsoryRows
                      results={results}
                      setResults={setResults}
                      items={data.years[2].semesters[0]}
                    />

                    <ElectiveRow
                      electives={electives}
                      setElectives={setElectives}
                      items={data.years[2].semesters[0]}
                      number={1}
                    />
                    <ElectiveRow
                      electives={electives}
                      setElectives={setElectives}
                      items={data.years[2].semesters[0]}
                      number={2}
                    />
                    <ElectiveRow
                      electives={electives}
                      setElectives={setElectives}
                      items={data.years[2].semesters[0]}
                      number={3}
                    />
                    <ElectiveRow
                      electives={electives}
                      setElectives={setElectives}
                      items={data.years[2].semesters[0]}
                      number={4}
                    />
                    <ElectiveRow
                      electives={electives}
                      setElectives={setElectives}
                      items={data.years[2].semesters[0]}
                      number={5}
                    />
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xs={12} className="mx-auto margin my-3">
            <div className="card">
              <div className="card-body">
                <TableTopic year={3} semester={2} />

                <Table className="Table">
                  <TableHead />
                  <tbody>
                    <CompulsoryRows
                      results={results}
                      setResults={setResults}
                      items={data.years[2].semesters[1]}
                    />
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="padding">
          <Col md={6} xs={12} className="mx-auto margin my-3">
            <Card>
              <Card.Body>
                <TableTopic year={4} semester={1} />

                <Table className="Table">
                  <TableHead />
                  <tbody>
                    <CompulsoryRows
                      results={results}
                      setResults={setResults}
                      items={data.years[3].semesters[0]}
                    />
                    <ElectiveRow
                      electives={electives}
                      setElectives={setElectives}
                      items={data.years[3].semesters[0]}
                      number={6}
                    />
                    <ElectiveRow
                      electives={electives}
                      setElectives={setElectives}
                      items={data.years[3].semesters[0]}
                      number={7}
                    />
                    <ElectiveRow
                      electives={electives}
                      setElectives={setElectives}
                      items={data.years[3].semesters[0]}
                      number={8}
                    />
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xs={12} className="mx-auto margin my-3">
            <Card>
              <Card.Body>
                <TableTopic year={4} semester={2} />

                <Table className="Table">
                  <TableHead />
                  <tbody>
                    <CompulsoryRows
                      results={results}
                      setResults={setResults}
                      items={data.years[3].semesters[1]}
                    />
                    <ElectiveRow
                      electives={electives}
                      setElectives={setElectives}
                      items={data.years[3].semesters[1]}
                      number={9}
                    />
                    <ElectiveRow
                      electives={electives}
                      setElectives={setElectives}
                      items={data.years[3].semesters[1]}
                      number={10}
                    />
                    <ElectiveRow
                      electives={electives}
                      setElectives={setElectives}
                      items={data.years[3].semesters[1]}
                      number={11}
                    />
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="padding text-center">
        <Button className="btn-lg" type="submit">
          Save
        </Button>
        <Button className="btn-back btn-lg">Back</Button>
      </Container>
    </Form>
  );
};

export default Sheet;
