import React, { useEffect } from "react";
import UrlShortner from "./UrlShortner";
import Navbar from "./Navbar";
import setAuthTokenHeader from "../apis/index"
import { ToastProvider } from "react-toast-notifications";
const Dashboard = ({ children }) => {

  useEffect(() => {
    console.log('dashboard use effect')
    setAuthTokenHeader(localStorage.getItem("authToken"));
  }, []);

  return (
    <div>
      <ToastProvider>
        <Navbar />
        <UrlShortner />
      </ToastProvider>
    </div>
  );
};

export default Dashboard;
