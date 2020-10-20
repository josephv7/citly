import React, {useEffect} from "react";
import Card from "./Card";
import Form from "./Form";
import { ToastProvider } from "react-toast-notifications";

const Signup = ({ history }) => {
  const authenticated = () => {
    console.log(localStorage.getItem("authToken"));
    return !(localStorage.getItem("authToken") === null);
  };
  const changeLocation = () => {
    history.push("/");
  };
  useEffect(() => {
    if (authenticated()) history.push("/dashboard");
  }, []);
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
