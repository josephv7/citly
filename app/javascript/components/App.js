import React from "react";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
