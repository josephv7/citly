import React, { useEffect, useState } from "react";
import fetchLogs from "../apis/logs";
import { useParams } from "react-router-dom";
import { ToastProvider, useToasts } from "react-toast-notifications";

const Logs = () => {
  const { addToast } = useToasts();
  let { id } = useParams();
  const [logList, setState] = useState(initialState);

  useEffect(async () => {
    try {
      const response = await fetchLogs(id);
      setState(response.logList);
    } catch (error) {
      if (error.response.status === 401)
        addToast("No Authorization", { appearance: "error" });
    }
  }, []);

  return (
    <ToastProvider>
      <Card>
        {logList.map((item, index) => {
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
                {item.timestamp}
              </button>
            </div>
          );
        })}
      </Card>
    </ToastProvider>
  );
};

export default Logs;
