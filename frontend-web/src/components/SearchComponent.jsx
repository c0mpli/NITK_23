import React, { useState } from "react";
import calendar from "../assets/calendar.png";
import world from "../assets/world.png";

function SearchComponent(props) {
  return (
    <div
      className="search"
      style={
        props.mt
          ? {
              marginTop: props.mt,

              left: "50%",
              transform: "translateX(-50%)",
            }
          : {}
      }
    >
      <div className="container">
        <label htmlFor="">
          <img src={calendar} alt="calender-icon" />
          <span>From</span>
        </label>
        <input
          type="date"
          aria-label="CheckInDate"
          onChange={(e) => {
            props.setFrom(e.target.value);
          }}
        />
      </div>
      <div className="container">
        <label htmlFor="">
          <img src={calendar} alt="calender-icon" />
          <span>To</span>
        </label>
        <input
          type="date"
          aria-label="CheckOutDate"
          onChange={(e) => {
            props.setTo(e.target.value);
          }}
        />
      </div>
      <div className="container">
        <label htmlFor="">
          <img src={world} alt="calender-icon" />
          <span>Where</span>
        </label>
        <input
          type="text"
          placeholder="Search Your location"
          aria-label="Location"
          onChange={(e) => {
            props.setLocation(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default SearchComponent;
