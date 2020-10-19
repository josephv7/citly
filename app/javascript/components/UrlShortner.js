import React, { useState, useEffect } from "react";
import urlShortnerAPI from "../apis/urlShortner";
import UrlList from "./UrlList";
import Card from "./Card";


const UrlShortner = ({ type }) => {
  const [url, setUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [userUrls, setUserUrls] = useState([]);
 
  const sendParams = (e) => {
    setUrl(e.target.value);
    console.log(url);
  };

  async function submit(e) {
    e.preventDefault();
    setSuccess(false);
    console.log("here 1");
    const response = await urlShortnerAPI.shorten({ url, user_id: 1 });
    console.log(response);

    if (response.status == 200) setSuccess(true);
  }

  const fetchUserUrlList = async () => {
    // if (success) {
    const response = await urlShortnerAPI.listUserUrls(1);
    console.log(response);
    setUserUrls(response.data.urlList);
    // }
  };

  useEffect(() => {
    console.log("use effect success");
    fetchUserUrlList();
  }, [success]);

  useEffect(() => {
    console.log("initial fetch");
    fetchUserUrlList();
  }, []);

  return (
      <div>
        <Card title={"Citly - A URL Shortener"}>
          <label htmlFor="exampleInputEmail1">Enter URL Here</label>
          <form className="form-inline">
            <div className="form-group w-75">
              <input
                type="text"
                className="form-control w-100"
                aria-describedby="LongUrl"
                placeholder="Enter Complete URL Here"
                onChange={sendParams}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary ml-1"
              onClick={submit}
            >
              Submit
            </button>
          </form>
        </Card>

        <UrlList userUrlList={userUrls} />
      </div>
  );
};

export default UrlShortner;
