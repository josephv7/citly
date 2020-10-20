import React from "react";
import UrlShortner from "./UrlShortner";
import Navbar from "./Navbar";
import { ToastProvider } from "react-toast-notifications";
const Dashboard = ({ children }) => {
  return (
    <ToastProvider>
      <Navbar />
      <UrlShortner />
    </ToastProvider>
  );
};

export default Dashboard;
