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
import { semesterTotalGrade, yearlyGPA, fullGPA } from "../../shared/utils";

const Sheet = ({ data, gpa, setGpa }) => {
  const [results, setResults] = useState({});
  const [electives, setElectives] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    let resultsSet = results;

    for (
      let i = 1;
      i <= data.years[0].semesters[0].electiveSubjectsIndex[1];
      i++
    ) {
      if (electives[i]) {
        resultsSet = {
          ...resultsSet,
          [electives[i].id]: {
            result: electives[i].result,
            credits: electives[i].credits,
          },
        };
      }
    }

    const yearlyTotalGrades = [
      semesterTotalGrade(data.years[0].semesters[0], resultsSet) +
        semesterTotalGrade(data.years[0].semesters[1], resultsSet),
      semesterTotalGrade(data.years[1].semesters[0], resultsSet) +
        semesterTotalGrade(data.years[1].semesters[1], resultsSet),
      semesterTotalGrade(data.years[2].semesters[0], resultsSet) +
        semesterTotalGrade(data.years[2].semesters[1], resultsSet),
      semesterTotalGrade(data.years[3].semesters[0], resultsSet) +
        semesterTotalGrade(data.years[3].semesters[1], resultsSet),
    ];

    const year1GPA = yearlyGPA(yearlyTotalGrades[0], data.years[0]);
    const year2GPA = yearlyGPA(yearlyTotalGrades[1], data.years[1]);
    const year3GPA = yearlyGPA(yearlyTotalGrades[2], data.years[2]);
    const year4GPA = yearlyGPA(yearlyTotalGrades[3], data.years[3]);

    const yearlyTotalGPAs = [year1GPA, year2GPA, year3GPA, year4GPA];

    const totalGPA = fullGPA(yearlyTotalGrades, yearlyTotalGPAs).toFixed(4);

    setGpa({
      totalGPA,
      yearlyTotalGPAs,
    });
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
