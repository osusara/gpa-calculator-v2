import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getSubjectData } from "../../../../data";
import Sheet from "./sheet";

const ResultSheet = ({ faculty, department, values, authId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(getSubjectData(faculty, department));
  }, [department, faculty]);

  if (!authId) return <Redirect to="/auth" />;

  return (
    <Container fluid={true}>
      <h1 className="text-center">Results Sheet</h1>
      {data ? (
        <Sheet
          data={data}
          authId={authId}
          values={values}
        />
      ) : (
        "Loading..."
      )}
    </Container>
  );
};

export default ResultSheet;
