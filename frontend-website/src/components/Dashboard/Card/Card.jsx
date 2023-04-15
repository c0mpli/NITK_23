import React from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
//import { UilTimes } from "@iconscout/react-unicons";
import {useNavigate, Link} from 'react-router-dom'
// parent Card

const Card = (props) => {
  return (
    <AnimateSharedLayout>
        <CompactCard param={props}  />
    
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param }) {
  const navigate = useNavigate();
  return (
    <motion.div
      className="CompactCard"
      style={{
        background:"#f6f6f6",
        boxShadow: "1px 4px 4px 2px rgba(0, 0, 0, 0.25)",
      }}
      layoutId="expandableCard"
      onClick={()=>{navigate('../myprograms')}}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
      </div>
        <span className="card-title">{param.title}</span>
        <Link className="card-continue-journey">{'Continue Journey ->'}</Link>
    </motion.div>
  );
}

// Expanded Card
{/*function ExpandedCard({ param, setExpanded }) {
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
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
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

}*/
}

export default Card;
