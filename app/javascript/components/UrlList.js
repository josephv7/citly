import React from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";
const UrlList = ({ userUrlList }) => {
  const history = useHistory();
  const showLogs = (id) => {
    history.push({
      pathname: `/logs/${id}`,
    });
  };
  if (userUrlList.length > 0) {
    return (
      <Card>
        {userUrlList.map((item, index) => {
          return (
            <div
              className="d-flex flex-row justify-content-around align-items-center w-100 flex-wrap"
              key={index}
            >
              <button
                type="button"
                className="btn btn-light w-25 my-1"
                disabled
              >
                {item.url}
              </button>
              <button type="button" className="btn btn-light w-50">
                <a target="_blank" href={`http://${item.redirectionUrl}`}>
                  {item.redirectionUrl}
                </a>
              </button>
              <button type="button" className=" btn btn-light w-10" disabled>
                {item.count}
              </button>
              <button
                type="button"
                className=" btn btn-light w-10"
                onClick={() => showLogs(item.id)}
              >
                View Logs
              </button>
            </div>
          );
        })}
      </Card>
    );
  }else {
    return (
      <div className="no-logs--container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2>No Shortened URLs</h2>
        </div>
      </div>
    );
  }
};

export default UrlList;
