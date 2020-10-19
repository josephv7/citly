import React, { useEffect } from "react";
import UrlShortner from "./UrlShortner";
import Navbar from "./Navbar";
import { ToastProvider } from "react-toast-notifications";
const Dashboard = ({ children }) => {
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
