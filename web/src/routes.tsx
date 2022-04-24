import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Wiki from "./pages/wiki"

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Navbar />
        <Route path="/" exact component={Wiki} />
      </Switch>
    </Router>
  )
}

export default Routes;