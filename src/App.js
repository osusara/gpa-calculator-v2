import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Layout from "./components/layout";
import Home from "./components/home";
import CISResultSheet from "./components/resultSheets/applied/cis";

function App() {
  return (
    <Router>
      <Layout className="m-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results">
            <CISResultSheet faculty="applied" department="cis" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
