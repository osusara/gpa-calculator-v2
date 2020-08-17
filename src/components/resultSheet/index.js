import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { getData } from "../../data";

import SubjectTable from "./table";

const ResultSheet = ({ faculty, department }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(getData(faculty, department));
  }, [department, faculty]);

  return (
    <Container fluid={true}>
      <h1>Results Sheet</h1>
      {data ? (
        <Form>
          <SubjectTable data={data} />
        </Form>
      ) : (
        <h1>Loading ....</h1>
      )}
    </Container>
  );
};

export default ResultSheet;
