import React from "react";
import Card from "./Card";
import UrlShortner from "./UrlShortner";

const Dashboard = () => {
  return (
    <div>
      <Card title={"Shorten URL"}>
        <UrlShortner />
      </Card>
    </div>
  );
};

export default Dashboard;
