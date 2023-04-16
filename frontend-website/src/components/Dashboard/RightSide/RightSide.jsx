import React, { useState } from "react";
import "./RightSide.css";
import { UpdatesData } from "../../../Data/Data";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import profileIcon from "../../../imgs/img2.png";
import calendarIcon from "../../../imgs/calendar.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { useAuthContext } from "../../../hooks/useAuthContext";

const RightSide = () => {
  const [messages, setMessages] = useState();
  //const [appoinments, setAppointments] = useState();
  const appoinments = [
    { name: "Jash Doshi", email: "jash@gmail.com", date: "15-04-23" },
    { name: "Sachin Jangir", email: "sachin@gmail.com", date: "15-04-23" },
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const progressBarData = [
    { percent: "55%", size: 70, icon: "😍" },
    { percent: "25%", size: 45, icon: "😊" },
    { percent: "10%", size: 25, icon: "😐" },
    { percent: "6%", size: 20, icon: "☹️" },
    { percent: "4%", size: 15, icon: "😭" },
  ];
  const [name, setName] = useState();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  // axios
  //   .get("https://docwebsite.adityasurve1.repl.co/user/getmessages", {
  //     headers: { token: localStorage.getItem("token") },
  //   })
  //   .then((response) => {
  //     setMessages(response.data.data.reverse());
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // axios
  //   .get(
  //     "https://docwebsite.adityasurve1.repl.co/user/get-appointments-by-user-id",
  //     { headers: { token: localStorage.getItem("token") } }
  //   )
  //   .then((response) => {
  //     setAppointments(response.data.data);
  //     //console.log(response.data.data)
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return (
    <div className="RightSide">
      <div>
        <h3>{user?.role == "company" ? "Employee's" : "Patients's"} Mood</h3>
        <div className="progressbars">
          {progressBarData?.map((data, index) => {
            return (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2rem 15rem",
                  alignItems: "center",
                  marginBottom: "-2.5rem",
                  gap: "1rem",
                }}
              >
                <p style={{ fontSize: "24px" }}>{data.icon}</p>
                <ProgressBar
                  completed={data.size}
                  baseBgColor="#fff"
                  labelSize="12px"
                  bgColor="#9fdba3"
                  labelColor="#000"
                  height="1.5rem"
                  customLabel={data.percent}
                />
              </div>
            );
          })}
        </div>
      </div>
      {user?.role === "therapist" && (
        <div>
          <h3>Patients requests</h3>
          <div>
            {appoinments?.map((appoinment, key) => {
              const today = new Date();

              const split = appoinment.date.split("-");
              //const tsplit = appoinment.time.split("-");
              const date = split[split.length - 1].slice(0, 2);
              const month = Number(split[1]);
              const year = split[0];
              // const time = tsplit[tsplit.length - 1].slice(3, 8);

              {
                return (
                  <div key={key} className="appointmentWrapper">
                    <img src={calendarIcon} />
                    <div className="appointmentContent">
                      <h3>{`${appoinment.name}`}</h3>
                      <p>{`${appoinment.date}`}</p>
                    </div>
                  </div>
                );
              }
              // else {
              //   return <></>;
              // }
            })}
            {/*<div className="active-programs">
        {cardsData.map((card) => {
          return (
            <div className="programs" onClick={()=>{navigate('../myprograms')}}>
              <img src={card.image} alt="profile" />
              <div className="noti">
                <div  style={{marginBottom: '0.5rem'}}>
                  <span>{card.title}</span>
                  <br/>
                  <Link to={'../myprograms'}className="card-continue-journey">Continue Journey -></Link>
                </div>
              </div>
          </div>
            
            );
          })}
      </div>*/}
            <div className="add-program">
              <button
                onClick={() => {
                  navigate("../requests");
                }}
              >
                View all
              </button>
            </div>
          </div>
        </div>
      )}
      {user?.role === "company" && (
        <div className="login-form addAdmin">
          <h3>Add employee</h3>
          <input
            type="text"
            placeholder="Email of employee"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button
            value="submit"
            //onClick={(e) => handleSubmit(e)}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default RightSide;
