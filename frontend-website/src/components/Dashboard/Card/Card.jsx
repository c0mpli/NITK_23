import React, { useEffect, useState } from "react";
import "./Card.css";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
// parent Card
const moods = ["😍", "😭", "☹️", "😐", "😊"];

var random = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
const Card = (param) => {
  const [expanded, setExpanded] = useState(false);
  const [sentiment, setSentiment] = useState();
  const [pos, setPos] = useState();
  const [neg, setNeg] = useState();
  const [neu, setNeu] = useState();
  async function getSentiment(id) {
    console.log(id);
    await axios
      .post(`${process.env.REACT_APP_DB_URL}/user/getsentiment`, {
        userid: id,
      })
      .then((res) => {
        setSentiment(res.data[0]);
        setPos(res.data[1]);
        setNeg(res.data[2]);
        setNeu(res.data[3]);

        console.log(res.data);
        //return res.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    getSentiment(param.id);
  }, []);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard
          param={param}
          setExpanded={() => setExpanded(false)}
          pos={Math.round(pos * 100)}
          neu={Math.round(neu * 100)}
          neg={Math.round(neg * 100)}
        />
      ) : (
        <CompactCard
          param={param}
          setExpanded={() => setExpanded(true)}
          sentiment={sentiment}
        />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded, sentiment }) {
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
          <h4>Sentiment Analysis: {sentiment}</h4>
        </div>
      </span>
      <div className="report">
        <button>View report</button>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded, pos, neu, neg }) {
  const data = {
    series: [
      {
        data: [pos, neu, neg],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["Percent", "Positive"],
          ["Percent", "Negative"],
          ["Percent", "Neutral"],
        ],
        labels: {
          style: {
            colors: "#000",
            fontWeight: "600",
            fontSize: "12px",
          },
        },
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        backgroundColor: "#fff",
        //boxShadow: "0px 10px 20px 0px black",
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "black" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="bar"
          height={350}
        />
      </div>
      <span style={{ color: "black" }}>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
