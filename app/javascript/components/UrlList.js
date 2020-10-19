import React, { useState, useEffect } from "react";
import Card from "./Card";
const UrlList = ({ userUrlList }) => {
  return (
    <Card>
      {/* <p>{JSON.stringify(userUrlList)}</p> */}
      {userUrlList.map((item, index) => {
          return(<div  key={index}>
            <h3>{item.url}</h3>
              <button>{item.url_hash}</button>
              </div>
          )
      })}
    </Card>
  );
};

export default UrlList;
