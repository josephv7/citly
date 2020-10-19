import React from "react";
import UrlShortner from "./UrlShortner";
import { ToastProvider } from "react-toast-notifications";
const Dashboard = () => {
  return (
    <div>
      <ToastProvider>
        <UrlShortner />
      </ToastProvider>
    </div>
  );
};

export default Dashboard;
