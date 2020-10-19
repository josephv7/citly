import React, { useState, useRef } from "react";
import authenticationAPI from "../apis/authentication";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const Form = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { addToast } = useToasts();

  const loginUser = async () => {
    try {
      const response = await authenticationAPI.login({ email, password });
      console.log(`success ${response}`);
      localStorage.setItem("authToken", response.data.user.authentication_token);
      history.push('/dashboard')
    } catch (error) {
      if (error.response.status === 401)
        addToast("Invalid Username or Password", { appearance: "error" });
    }
  };

  const signupUser = async () => {
    const response = await authenticationAPI.signup({
      email,
      password,
      password_confirmation: password,
    });
    console.log(response.data.user);
    localStorage.setItem("authToken", response.data.user.authentication_token);
    console.log(response.data.user.authentication_token);
    history.push("/");
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (type == "login") loginUser();
    else if (type == "signup") signupUser();
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          // ref={emailInput}
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          // onChange={(e) => setEmail(e.target.value)}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={submitForm}>
        Submit
      </button>
    </form>
  );
};

export default Form;
