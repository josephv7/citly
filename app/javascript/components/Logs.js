import React, { useEffect, useState } from "react";
import Card from "./Card";
import fetchLogs from "../apis/logs";
import { useParams } from "react-router-dom";
import { ToastProvider, useToasts } from "react-toast-notifications";

const Logs = () => {
  let { id } = useParams();
  const [logList, setState] = useState([]);
  // const { addToast } = useToasts();
  useEffect(async () => {
    try {
      const response = await fetchLogs(id);
      setState(response.data.logList);
    } catch (error) {
      if (error.response.status === 401) console.log(error);
    }
  }, []);

  return (
    <ToastProvider>
      <Card>
        {logList?.map((item, index) => {
          return (
            <div
              className="d-flex flex-row justify-content-between align-items-center w-100 flex-wrap"
              key={index}
            >
              <button
                type="button"
                className="btn btn-light w-50 my-1"
                disabled
              >
                {item.timeStamp}
              </button>
            </div>
          );
        })}
      </Card>
    </ToastProvider>
  );
};

export default Logs;
