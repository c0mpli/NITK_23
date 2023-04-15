import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Listing.css";
import ListingBG from "../../assets/ListingBG.png";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import SearchComponent from "../../components/SearchComponent";
import heart from "../../assets/heart2.png";
import { useNavigate, useSearchParams } from "react-router-dom";

const courseObj = {
  minPrice: "",
  maxPrice: "",
  category: [],
};

const filtersData = [
  {
    heading: "Category",
    type: "category",
    checkbox: ["Beach", "Snow", "Trek", "Mountains"],
    more: 4,
  },
  {
    heading: "Price less than",
    type: "minPrice",
    checkbox: ["30000", "50000", "70000", "90000"],
  },
];

function Listing() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [location, setLocation] = useState();
  const arr = [];
  const name = localStorage.getItem("name");
  const [formData, setFormData] = useState(courseObj);
  const [data, setData] = useState();

  function handleFilter2(ev) {
    const title = ev.target.innerText ? ev.target.innerText : ev.target.id;
    const t2 = { ...formData };
    t2.minPrice = title;
    setFormData(t2);
  }

  function handleFilter(ev) {
    let title = ev.target?.innerText ? ev.target?.innerText : ev.target?.id;

    console.log(title);

    if (formData.category && !formData.category.includes(title)) {
      const t2 = { ...formData };
      t2.category = [...t2.category, title];
      setFormData(t2);
    } else {
      const i = formData.category.indexOf(title);
      const t2 = { ...formData };
      t2.category.splice(i, 1);
      setFormData(t2);
    }
  }
  //   function matchUsers() {
  //     axios
  //       .get("https://coc-1.adityasurve1.repl.co/user/match", {
  //         headers: { token: localStorage.getItem("token") },
  //         auth: { user: { _id: localStorage.getItem("token") } },
  //       })
  //       .then((response) => {
  //         console.log("Matched");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  //   function locationUsers() {
  //     axios
  //       .get("https://coc-1.adityasurve1.repl.co/user/match2", {
  //         headers: { token: localStorage.getItem("token") },
  //         auth: { user: { _id: localStorage.getItem("token") } },
  //       })
  //       .then((response) => {
  //         setLocationData(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  function getData() {
    axios
      .get("https://E4.adityasurve1.repl.co/data")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    // matchUsers();
    // locationUsers();
    const url = searchParams.get("category");
    //handleFilter(url);
    getData();
  }, []);

  return (
    <div className="dashboard-wrapper">
      <img className="dashboard-bg" src={ListingBG} alt="bgImage" />
      <Navbar color="white" />
      <div
        className="dashboard-section1"
        style={{ fontSize: "2rem", maxWidth: "30%" }}
      >
        <h3>Ghar waali feeling at your convenience.</h3>
        <p style={{ fontSize: "1rem" }}>
          Filter out homestays according to your preferences and enjoy a cup of
          coffee at your favorite location at the comfort of your home.
        </p>
      </div>
      <SearchComponent
        mt="-4vh"
        setTo={setTo}
        setFrom={setFrom}
        setLocation={setLocation}
      />
      <div className="dashboard-rest">
        <div className="listing-sidebar">
          {filtersData.map((value, index) => {
            return (
              <div className="criteria" key={index}>
                <h3>{value.heading}</h3>
                {value.checkbox?.map((c, i) => {
                  return (
                    <div>
                      <input
                        type="checkbox"
                        id={c}
                        name={value.type}
                        onClick={(e) => {
                          value.type === "minPrice"
                            ? handleFilter2(e)
                            : handleFilter(e, "");
                        }}
                      />
                      <label>{c}</label>
                    </div>
                  );
                })}
                {value.more && (
                  <p
                    style={{
                      textAlign: "right",
                      margin: "0 2rem",
                      fontSize: "0.8rem",
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#1877F2",
                    }}
                  >
                    See {value.more} more
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div className="listing-content">
          {/* {JSON.stringify(formData)} */}
          {data?.map((value, index) => {
            if (
              formData.category.length === 0 ||
              formData.category?.includes(value.category)
            ) {
              return (
                <div className="listing-card" key={index}>
                  <img
                    src={value.img}
                    style={{
                      width: "300px",
                      height: "200px",
                      borderRadius: "18px",
                    }}
                  />
                  <div className="mhs">
                    <div className="rating">
                      <span>{value.rating}/5.0</span>
                    </div>
                    <div className="location">
                      <h1>{value.name}</h1>
                      <p>{value.address}</p>
                    </div>
                    <div className="date-night">
                      {value.nights}N/{value.days}D
                    </div>
                    <button
                      id="common-button"
                      onClick={() => {
                        navigate("/itenary", {
                          state: { location: location, to: to, from: from },
                        });
                      }}
                    >
                      View more
                    </button>
                  </div>
                  <div className="rhs">
                    <img
                      src={heart}
                      alt="Heart Icon"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    <div className="price-wrapper">
                      <p style={{ color: "black", fontSize: "0.8rem" }}>
                        Estimated Price
                      </p>
                      <h1>{value.price}</h1>
                      <p>+taxes</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Listing;
