import React, { useState, useEffect } from "react";
import Card from "./Card";
const UrlList = ({ userUrlList }) => {
  return (
    <Card>
      {/* <p>{JSON.stringify(userUrlList)}</p> */}
      {userUrlList.map((item, index) => {
          return(
              <button key={index}>{item.url_hash}</button>
          )
      })}
    </Card>
  );
};

export default UrlList;
