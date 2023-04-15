import React from "react";
import MainDash from "../components/Dashboard/MainDash/MainDash";
import RightSide from "../components/Dashboard/RightSide/RightSide";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";

import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="AppGlass2">
      <Sidebar />

      <div className="AppGlass3">
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default Dashboard;
