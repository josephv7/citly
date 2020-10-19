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
  },[])

  return (
    <div>
      <Card title={"Shorten URL"}>
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

          <button type="submit" className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </form>
      </Card>

      <UrlList userUrlList={userUrls} />
    </div>
  );
};

export default UrlShortner;
