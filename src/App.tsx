import React from "react";
import Layout from "./components/Layout";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

import "./App.css";

function App(): JSX.Element {
  return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;
