import React from "react";
import Card from "./Card";
import Form from "./Form";

const Dashboard = () => {
  return (
    <div>
      <Card title={"Shorten URL"}>
        <Form />
      </Card>
    </div>
  );
};

export default Dashboard;
