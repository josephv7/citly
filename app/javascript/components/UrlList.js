import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";
const UrlList = ({ userUrlList }) => {
  const history = useHistory();
  const showLogs = (id) => {
    history.push({
      pathname: `/logs/${id}`,
    });
  };
  return (
    <Card>
      {/* <p>{JSON.stringify(userUrlList)}</p> */}
      {userUrlList.map((item, index) => {
        return (
          <div
            className="d-flex flex-row justify-content-between align-items-center w-100 flex-wrap"
            key={index}
          >
            <button type="button" className="btn btn-light w-50 my-1" disabled>
              {item.url}
            </button>
            <button type="button" className="btn btn-light w-50">
              <a target="_blank" href={`https://${item.redirectionUrl}`}>
                {item.redirectionUrl}
              </a>
            </button>
            <button type="button" onClick={() => showLogs(item.id)}>
              Logs
            </button>
          </div>
        );
      })}
    </Card>
  );
};

export default UrlList;
