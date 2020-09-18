import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import "./App.css";

import { getResults } from "./services/db";
import Layout from "./components/layout";
import Home from "./components/home";
import Auth from "./components/auth";
import CISResultSheet from "./components/resultSheets/applied/cis";

function App() {
  const [authId, setAuthId] = useState(null);
  const [values, setValues] = useState({});
  const [gpa, setGpa] = useState({
    totalGPA: 0,
    yearlyTotalGPAs: [],
  });

  const authCheck = () => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        const authId = user.uid;
        setAuthId(authId);
      } else {
        setAuthId(null);
      }
    });
  };

  const logout = () => {
    auth
      .signOut()
      .then(function () {
        setAuthId(null);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    authCheck();
    if(authId) {
      getResults(authId, setValues, setGpa);
    }
  }, [authId]);

  return (
    <Router>
      <Layout className="m-4" logout={logout}>
        <Switch>
          <Route exact path="/">
            <Home authId={authId} gpa={gpa} />
          </Route>
          <Route exact path="/auth">
            <Auth auth={auth} authId={authId} />
          </Route>
          <Route exact path="/results">
            <CISResultSheet
              authId={authId}
              faculty="applied"
              department="cis"
              setGpa={setGpa}
              values={values}
            />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
