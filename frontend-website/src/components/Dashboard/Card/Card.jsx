import React, { useState } from "react";
import "./Card.css";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

// parent Card
const moods = ["😍", "😭", "☹️", "😐", "😊"];

var random = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
const Card = (param) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={param} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={param} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  //const Png = param.png;
  return (
    <motion.div
      className="ServiceCardWrapper"
      style={{
        backgroundColor: "#ffffff",
        //boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.);",
      }}
      layoutId="expandableCard"
    >
      <span onClick={setExpanded} className="ServiceCardWrapper2">
        <img src={param.image} />

        <div>
          <h4>{param.title}</h4>
          <p>{param.message}</p>
        </div>
        <div className="moodToday">
          <h4>Mood today: {moods[random]}</h4>
        </div>
        <div className="analysis">
          <h4>Sentimental Analysis:</h4>
        </div>
      </span>
      <div className="report">
        <button>View report</button>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        backgroundColor: "#e7fdcb",
        //boxShadow: "0px 10px 20px 0px black",
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
