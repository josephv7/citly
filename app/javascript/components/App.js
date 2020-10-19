import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const authenticated = () => {
    console.log(localStorage.getItem("authToken"));
    return !(localStorage.getItem("authToken") === null);
  };

  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <PrivateRoute
          path="/dashboard"
          redirectRoute="/"
          component={Dashboard}
          condition={authenticated()}
        />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
