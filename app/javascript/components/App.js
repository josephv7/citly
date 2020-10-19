import React, {useEffect} from "react";
import Login from "./Login";
import Signup from "./Signup";
import Logs from "./Logs";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import setAuthTokenHeader from "../apis/index"

const App = () => {
  const authenticated = () => {
    console.log(localStorage.getItem("authToken"));
    return !(localStorage.getItem("authToken") === null);
  };

  useEffect(() => {
    console.log('app use effect' + localStorage.getItem("authToken"))
    setAuthTokenHeader(localStorage.getItem("authToken"))
  },[])

  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/logs/:id" component={Logs} />
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
