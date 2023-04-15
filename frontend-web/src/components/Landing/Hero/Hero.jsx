import React from "react";
import homeImage from "../../../assets/hero-bg.png";
import SearchComponent from "../../SearchComponent";
import "./Hero.css";
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <img className="hero-bg" src={homeImage} alt="bgImage" />
      <div className="content">
        <div className="title">
          <h1>Explore Tranquility like never before.</h1>
          <p>
            From Himalayas to Hawaii to Hong Kong, find your pick and leave the
            formalities to us.
          </p>
        </div>
        <SearchComponent />
        {/* <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input
              type="text"
              placeholder="Search Your location"
              aria-label="Location"
            />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" placeholder="" aria-label="CheckInDate" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" aria-label="CheckOutDate" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
