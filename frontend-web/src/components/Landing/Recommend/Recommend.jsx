import React, { useState } from "react";
import Destination1 from "../../../assets/bangkok.png";
import Destination2 from "../../../assets/paris.png";
import Destination3 from "../../../assets/kashmir.png";
import Destination4 from "../../../assets/goa.png";
import info1 from "../../../assets/info1.png";
import info2 from "../../../assets/info2.png";
import info3 from "../../../assets/info3.png";

import vector1 from "../../../assets/hero/vector1.png";
import vector2 from "../../../assets/hero/vector2.png";

import vector3 from "../../../assets/hero/vector3.png";

import "./Recommend.css";
export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Bangkok",
      days: "5",
      nights: "4",
      flights: "2",
      hotels: "3",
      activities: "7",
      cost: "38,800",
    },
    {
      image: Destination2,
      title: "Paris",
      days: "5",
      nights: "4",
      flights: "2",
      hotels: "3",
      activities: "7",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Kashmir",
      days: "5",
      nights: "4",
      flights: "2",
      hotels: "3",
      activities: "7",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Goa",
      days: "5",
      nights: "4",
      flights: "2",
      hotels: "3",
      activities: "7",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
  ];

  return (
    <section id="recommend" className="recommend">
      <div className="title">
        <h2>Trending Tours.</h2>
        <p>
          Explore our select range of domestic and international,
          budget-friendly, customer-favourite tours.
        </p>
      </div>
      <div className="destinations">
        {data.map((destination, index) => {
          return (
            <div className="destination" key={index}>
              <img src={destination.image} alt="destination-image" />
              <div className="destination-title">
                <h1>{destination.title}</h1>
                <span>
                  {destination.days}D/{destination.nights}N
                </span>
              </div>
              <div className="destionation-details-landing">
                <div className="detail-single">
                  <img
                    src={vector1}
                    alt="first-icon"
                    style={{ width: "18px", height: "18px" }}
                  />
                  <p>{destination.flights} flights</p>
                </div>
                <div className="detail-single">
                  <img
                    src={vector2}
                    alt="first-icon"
                    style={{ width: "14px", height: "18px" }}
                  />
                  <p>{destination.hotels} hotels</p>
                </div>
                <div className="detail-single">
                  <img
                    src={vector3}
                    alt="first-icon"
                    style={{ width: "18px", height: "18px" }}
                  />
                  <p>{destination.activities} activities</p>
                </div>
              </div>
              <div className="info">
                <div className="services">
                  <button id="common-button">View more</button>
                </div>
                <span>
                  <h4>{destination.cost}</h4>
                  <span>per person</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
