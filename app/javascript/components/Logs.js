import React, { useEffect, useState } from "react";
import Card from "./Card";
import fetchLogs from "../apis/logs";
import Navbar from "./Navbar";
import { useParams, useHistory } from "react-router-dom";
import { ToastProvider, useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";

const Logs = () => {
  let { id } = useParams();
  const history = useHistory();
  const [logList, setState] = useState([]);

  useEffect(() => {
    async function logger() {
      try {
        const response = await fetchLogs(id);
        setState(response.data.logList);
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem("authToken");
          history.push("/");
        }
      }
    }
    logger();
  }, []);

  if (logList.length > 0) {
    return (
      <ToastProvider>
        <Navbar />
        <Card>
          <ul className="list-group">
            {logList?.map((item, index) => {
              return (
                <li
                  className="list-group-item d-flex justify-content-between"
                  key={index}
                >
                  <p className="text-muted mb-0">{item.timeStamp}</p>
                  <p className="text-muted mb-0">{item.ipAddress}</p>
                  <p className="text-muted mb-0">{item.platformName!=null?item.platformName:'-'}</p>
                </li>
              );
            })}
          </ul>
        </Card>
      </ToastProvider>
    );
  } else {
    return (
      <div className="no-logs--container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
          <h2>No Logs</h2>
          <Link to="/dashboard">Take me back 🔙</Link>
        </div>
      </div>
    );
  }
};

export default Logs;
