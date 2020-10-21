import React, { useState, useEffect } from "react";
import urlShortnerAPI from "../apis/urlShortner";
import UrlList from "./UrlList";
import Card from "./Card";
import setAuthTokenHeader from "../apis/index";

import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const UrlShortner = () => {
  const [url, setUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [userUrls, setUserUrls] = useState([]);
  const { addToast } = useToasts();
  const hisory = useHistory();

  const sendParams = (e) => {
    setUrl(e.target.value);
    // console.log(url);
  };

  async function submit(e) {
    e.preventDefault();

    let pattern = /^((http|https):\/\/)/;
    if (!pattern.test(url)) {
      addToast("Invalid Protocol", { appearance: "error", autoDismiss: true });
    } else {
      setSuccess(false);
      try {
        const response = await urlShortnerAPI.shorten({ url });
        if (response.status == 200) setSuccess(true);
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem("authToken");
          history.push("/");
        }
      }
    }
  }

  const fetchUserUrlList = async () => {
    setAuthTokenHeader(localStorage.getItem("authToken"));
    try {
      const response = await urlShortnerAPI.listUserUrls();
      setUserUrls(response.data.urlList);
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("authToken");
        hisory.push("/");
      }
    }
  };

  useEffect(() => {
    fetchUserUrlList();
  }, [success]);

  useEffect(() => {
    fetchUserUrlList();
  }, []);

  return (
    <div>
      <Card title={"Citly - A URL Shortener"}>
        <form className="form-inline d-flex justify-content-center mt-2">
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
