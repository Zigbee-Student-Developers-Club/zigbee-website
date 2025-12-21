import { forbidden } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const isAdmin = false;

  if (!isAdmin) {
    forbidden();
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
