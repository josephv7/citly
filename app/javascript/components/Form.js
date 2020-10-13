import React, { useState } from "react";

const Form = ({ type }) => {
  const [email, setEmail] = useState("");
  const sendParams = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  //   const sendData = ({history}) => {
  //    API CALL
  //  Response
  // if true
  //  history.push('/url-shortnere')
  // catch error
  //   }
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={sendParams}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
