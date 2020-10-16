import React from "react";
import Card from "./Card";
import Form from "./Form";

const Login = ({ history }) => {
  const changeLocation = () => {
    history.push("/signup");
  };
  return (
    <Card title={"Login"}>
      <Form type={"login"}/>
      <button onClick={changeLocation}>Sign Up</button>
    </Card>
  );
};

export default Login;
