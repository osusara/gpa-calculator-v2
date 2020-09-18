import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import { addResults } from "../../../../services/db";
import { getData } from "../../../../data";
import Sheet from "./sheet";

const CISResultSheet = ({ faculty, department, setGpa, values, authId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(getData(faculty, department));
  }, [department, faculty]);

  if (!authId) return <Redirect to="/auth" />;

  return (
    <Container fluid={true}>
      <h1>Results Sheet</h1>
      {data ? (
        <Sheet
          data={data}
          setGpa={setGpa}
          authId={authId}
          values={values}
          addResults={addResults}
        />
      ) : (
        "Loading..."
      )}
    </Container>
  );
};

export default CISResultSheet;
