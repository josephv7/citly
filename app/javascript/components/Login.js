import React, { useEffect } from "react";
import Card from "./Card";
import Form from "./Form";
import authenticated from "./helpers/auth";
import { ToastProvider } from "react-toast-notifications";
const Login = ({ history }) => {
  useEffect(() => {
    if (authenticated()) history.push("/dashboard");
  }, []);

  const changeLocation = () => {
    history.push("/signup");
  };
  return (
    <ToastProvider>
      <Card title={"Login"}>
        <Form type={"login"} />
        <div className="d-flex flex-row justify-content-center">
          <button onClick={() => changeLocation} className="btn btn-link">
            Not a User ? Register
          </button>
        </div>
      </Card>
    </ToastProvider>
  );
};

export default Login;
