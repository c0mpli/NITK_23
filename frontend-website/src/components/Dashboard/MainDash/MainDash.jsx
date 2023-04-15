import React from "react";
import Cards from "../Cards/Cards";
import Programs from "../Programs/Programs";

import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <div className="searchSectionMainDash">
        <h2>Home</h2>
        <div className="search"></div>
      </div>
      <h1>Patients's analytics.</h1>
      <Cards />
    </div>
  );
};

export default MainDash;
