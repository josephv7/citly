import React, { useState, useRef } from "react";
import authenticationAPI from "../apis/authentication";

const Form = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  // const sendParams = (e) => {
  //   setEmail(e.target.value);
  //   console.log(emailInput.current.value);
  // };
  const //   const sendData = ({history}) => {
    //    API CALL
    //  Response
    // if true
    //  history.push('/url-shortnere')
    // catch error
    //   }

    loginUser = async (e) => {
      e.preventDefault();
      const response = await authenticationAPI.login({ email, password });
      localStorage.setItem('authToken', response.data.user.authentication_token);
      console.log(response.data.user.authentication_token)
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
      <button type="submit" className="btn btn-primary" onClick={loginUser}>
        Submit
      </button>
    </form>
  );
};

export default Form;
