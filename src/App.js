import React from "react";
import "./App.css";

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Project from "./components/Project/Project";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/progress" component={Project} exact /> */}
        <Route
          path="/progress"
          component={() => {
            window.location.href =
              "https://my.visme.co/view/n03mw0nz-westella-project-status-report-2021-jan-28";
            return null;
          }}
          exact
        />
        <Route
          path="/listing"
          component={() => {
            window.location.href =
              "https://www.zillow.com/homes/12735-Westella-Dr-Houston,-TX,-77077_rb/28124087_zpid/";
            return null;
          }}
          exact
        />
        <Route
          path="/video"
          component={() => {
            window.location.href =
              "https://youtu.be/olyVRWl6_EM";
            return null;
          }}
          exact
        />

        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
