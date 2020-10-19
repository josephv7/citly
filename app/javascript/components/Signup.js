import React from "react";
import Card from "./Card";
import Form from "./Form";
import { ToastProvider } from "react-toast-notifications";

const Signup = ({ history }) => {
  const changeLocation = () => {
    history.push("/");
  };
  return (
    <ToastProvider>
      <Card title={"Signup"}>
        <Form type={"signup"} />
        <div className="d-flex flex-row justify-content-end">
          <button onClick={changeLocation} className="btn btn-link">
            Go To Login Page
          </button>
        </div>
      </Card>
    </ToastProvider>
  );
};

export default Signup;
