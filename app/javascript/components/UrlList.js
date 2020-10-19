import React, { useState, useEffect } from "react";
import Card from "./Card";
const UrlList = ({ userUrlList }) => {
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
          </div>
        );
      })}
    </Card>
  );
};

export default UrlList;
