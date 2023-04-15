import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import tpBG from "../assets/tp.png";
import bg1 from "../assets/ourtips1.png";
import Navbar from "../components/Navbar/Navbar";
import SearchComponent from "../components/SearchComponent";
import "./Itenary.css";
function Itenary() {
  const l = useLocation();
  const location = l.state?.location;
  console.log(location);
  const [data, setData] = useState();
  function getData() {
    axios
      .post("https://E4.adityasurve1.repl.co/itenary", {
        location: "mumbai",
        limit: 5,
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        localStorage.setItem("data", JSON.stringify(response.data));
        //setData(response.data);
        //setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    //getData();
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div>
      <img src={tpBG} alt="Tp BG" style={{ width: "100%", height: "25vh" }} />
      <Navbar color="white" />
      <SearchComponent mt="-8vh" />
      <div className="itenary-wrapper">
        <h1>{location}</h1>
        <div className="images-wrapper">
          <div className="main-images">
            <img
              src={data?.Attraction[0].img}
              style={{ width: "100%", height: "400px" }}
            />
            <div className="main-images-rhs">
              <img
                src={data?.Attraction[1].img}
                style={{ width: "60%", height: "195px" }}
              />
              <img
                src={data?.Attraction[2].img}
                style={{ width: "60%", height: "195px" }}
              />
            </div>
          </div>
          <div className="main-viewmore"></div>
        </div>
        <p>
          Take advantage of recreational opportunities offered, including an
          outdoor pool, a spa tub, and a 24-hour fitness center.Enjoy a meal at
          the restaurant, or stay in and take advantage of the hotel's room
          service. Quench your thirst with your favorite drink at the
          bar/lounge. Cooked-to-order breakfasts are available daily from 6:30
          AM to 10:00 AM .Featured amenities include dry cleaning/laundry
          services, a 24-hour front desk, and multilingual staff. This hotel has
          2 meeting rooms available for events. Free self parking is available
          onsite.Stay in one of 129 guestrooms featuring LCD televisions. Your
          pillowtop bed comes with premium bedding. Complimentary wireless
          Internet access keeps you connected, and cable programming is
          available for your entertainment.
        </p>
        <div className="itenary-main">
          <h3>Itenary</h3>
          <div className="i-card-wrapper">
            {data?.lodge?.map((item, i) => (
              <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <p>Day {item.Day}</p>
                  <img
                    src={item.img}
                    style={{
                      height: "80px",
                      width: "500px",
                      borderRadius: "10px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <h2>{item.name}</h2>
                    <div
                      className={selected === i ? "content show" : "content"}
                    >
                      {item.answern}
                    </div>
                    <span>
                      {selected === i ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-up"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                  {selected === i ? (
                    <>
                      <p style={{ padding: "0 400px" }}></p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itenary;
