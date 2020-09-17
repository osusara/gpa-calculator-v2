import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Layout from "./components/layout";
import Home from "./components/home";
import CISResultSheet from "./components/resultSheets/applied/cis";

function App() {
  const [gpa, setGpa] = useState({
    totalGPA: 0,
    yearlyTotalGPAs: [],
  });

  return (
    <Router>
      <Layout className="m-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results">
            <CISResultSheet
              faculty="applied"
              department="cis"
              gpa={gpa}
              setGpa={setGpa}
            />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
