import React from "react";
import Card from "./Card";
import Form from "./Form";

const Signup = ({ history }) => {
    const changeLocation = () => {
      history.push("/");
    };
  return (
    <Card title={"Signup"}>
      <Form type={"signup"} />
      <button onClick={changeLocation}>Go To Login Page</button>
    </Card>
  );
};

export default Signup;
