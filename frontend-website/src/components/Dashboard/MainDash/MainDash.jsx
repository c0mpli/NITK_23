import React from "react";
import Cards from "../Cards/Cards";
import Programs from "../Programs/Programs";

import "./MainDash.css";
import { useAuthContext } from "../../../hooks/useAuthContext";

const MainDash = () => {
  const { user } = useAuthContext();
  return (
    <div className="MainDash">
      <div className="searchSectionMainDash">
        <h2>Home</h2>
        <div className="search"></div>
      </div>
      <h1>
        {user?.role == "company" ? "Employee's" : "Patients's"} analytics.
      </h1>
      <Cards />
    </div>
  );
};

export default MainDash;
