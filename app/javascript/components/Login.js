import React from "react";
import Card from "./Card";
import Form from "./Form";
import { ToastProvider } from "react-toast-notifications";
const Login = ({ history }) => {
  const changeLocation = () => {
    history.push("/signup");
  };
  return (
    <ToastProvider>
      <Card title={"Login"}>
        <Form type={"login"} />
        <div className="d-flex flex-row justify-content-end">
          <button onClick={changeLocation} className="btn btn-link">
            Not a User ? Register
          </button>
        </div>
      </Card>
    </ToastProvider>
  );
};

export default Login;
