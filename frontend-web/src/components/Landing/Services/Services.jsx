import React from "react";
import service1 from "../../../assets/service1.png";
import service2 from "../../../assets/service2.png";
import service3 from "../../../assets/service3.png";
import service4 from "../../../assets/service4.png";

import explore1 from "../../../assets/explore2/1.png";
import explore2 from "../../../assets/explore2/2.png";
import explore3 from "../../../assets/explore2/3.png";
import explore4 from "../../../assets/explore2/4.png";
import explore5 from "../../../assets/explore2/5.png";
import explore6 from "../../../assets/explore2/6.png";
import explore7 from "../../../assets/explore2/7.png";
import explore8 from "../../../assets/explore2/8.png";

import "./Services.css";
import { useNavigate } from "react-router-dom";
const exploreData = [
  {
    title: "Lakes",
    image: explore1,
  },
  {
    title: "Beach",
    image: explore2,
  },
  {
    title: "Mountains",
    image: explore3,
  },
  {
    title: "Forest",
    image: explore4,
  },
  {
    title: "Snow",
    image: explore5,
  },
  {
    title: "Historic",
    image: explore6,
  },
  {
    title: "City",
    image: explore7,
  },
  {
    title: "Trek",
    image: explore8,
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="services-section-wrapper">
      <h1>What would you like to explore next?</h1>
      <section id="services" className="services-wrapper">
        {exploreData.map((service, index) => {
          return (
            <div
              className="service"
              key={index}
              onClick={(e) => {
                navigate({
                  pathname: "/listing",
                  search: `?category=${service.title}`,
                });
              }}
            >
              <div className="icon">
                <img src={service.image} alt="service-icon" />
                <p>{service.title}</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
