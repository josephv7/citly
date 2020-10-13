import React, { useState } from "react";
import urlShortnerAPI from "../apis/urlShortner"

const UrlShortner = ({ type }) => {
  const [url, setUrl] = useState("");
  const sendParams = (e) => {
    setUrl(e.target.value);
    console.log(url);
  };
  
  async function submit(e) {
    e.preventDefault();
      console.log('here 1')
    const response = await urlShortnerAPI.shorten({url,user_id:1})
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">URL</label>
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter URL"
          onChange={sendParams}
        />
      </div>
      
      <button type="submit" className="btn btn-primary"  onClick={submit}>
        Submit
      </button>
    </form >
  );
};

export default UrlShortner;
