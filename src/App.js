import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { getResults, getUser } from "./services/db";
import { authCheck, authOut } from "./services/auth";
import uniData from "./data/uniData.json";
import Layout from "./components/layout";
import Auth from "./components/auth";
import Home from "./components/home";
import UserForm from "./components/user/form";
import ResultSheet from "./components/resultSheets/applied/cis";

function App() {
  const [loading, setLoading] = useState(true);
  const [authId, setAuthId] = useState(null);
  const [user, setUser] = useState(null);
  const [universityData, setUniversityData] = useState(null);
  const [values, setValues] = useState(null);
  const [gpa, setGpa] = useState(null);

  const logout = () => authOut(setAuthId);

  useEffect(() => {
    authCheck(setAuthId);
    if (authId) {
      getResults(authId, setValues, setGpa);
      getUser(authId, setUser);
    }

    setUniversityData(uniData);

    if (authId && user && universityData && values && gpa) {
      setLoading(false);
    }
  }, [authId, gpa, universityData, user, values]);

  return (
    <Router>
      <Layout className="m-4" logout={logout}>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <Switch>
            <Route exact path="/auth">
              <Auth authId={authId} />
            </Route>
            <Route exact path="/">
              <Home
                authId={authId}
                user={user}
                gpa={gpa}
                uniData={universityData}
              />
            </Route>
            <Route exact path="/me">
              <UserForm
                authId={authId}
                user={user}
                uniData={universityData}
                setUser={setUser}
              />
            </Route>
            <Route exact path="/sheet">
              <ResultSheet
                authId={authId}
                faculty={user.faculty}
                department={user.department}
                values={values}
              />
            </Route>
          </Switch>
        )}
      </Layout>
    </Router>
  );
}

export default App;
