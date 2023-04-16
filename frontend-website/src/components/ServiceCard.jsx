import React, { useState } from "react";
import "./ServiceCard.css";
import { useAuthContext } from "../hooks/useAuthContext";

const moods = ["😍", "😭", "☹️", "😐", "😊"];
function ServiceCard(props) {
  const { user } = useAuthContext();
  var random = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
  const [isExpanded, setIsExpanded] = useState(false);
  const downloadReport = () => {
    console.log("print");
  };
  return (
    <div
      className={
        isExpanded
          ? "ServiceCardWrapper alignRight cardExpanded"
          : "ServiceCardWrapper alignRight"
      }
      onClick={() => {
        setIsExpanded(isExpanded ? false : true);
        console.log(isExpanded);
        window.print = "src/assets/jash_report.pdf";
      }}
    >
      <img src={props.image} />

      <div>
        <h4>{props.title}</h4>
        <p>{props.message}</p>
      </div>
      <div className="moodToday">
        <h4>Mood today: {moods[random]}</h4>
      </div>
      <div className="analysis">
        <h4>Sentimental Analysis:</h4>
      </div>
      {user.role != "company" && (
        <div className="report">
          <button>View report</button>
        </div>
      )}
    </div>
  );
}

export default ServiceCard;
