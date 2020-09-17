import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../../data";
import Sheet from "./sheet";

const CISResultSheet = ({ faculty, department, gpa, setGpa }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(getData(faculty, department));
  }, [department, faculty]);

  return (
    <Container fluid={true}>
      <h1>Results Sheet</h1>
      {data ? <Sheet data={data} gpa={gpa} setGpa={setGpa} /> : "Loading..."}
    </Container>
  );
};

export default CISResultSheet;
