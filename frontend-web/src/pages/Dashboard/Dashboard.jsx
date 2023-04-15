import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileHeader from "../../../../../../External Projects/project-hmp/client/src/components/ProfileHeader";
import MainDash from "../../../../../../External Projects/project-hmp/client/src/components/Dashboard/MainDash/MainDash";

function Dashboard() {
  return (
    <div className="AppGlass2">
      <Sidebar />
      <div className="ContentWrapper">
        <ProfileHeader title={"Dashboard"} />
        <div className="AppGlass3">
          <MainDash />
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
