import React, { useEffect, useState } from "react";
import "./Cards.css";

import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import CompactCard from "../Card/Card";
import { useAuthContext } from "../../../hooks/useAuthContext";

const Cards = () => {
  const { user } = useAuthContext();
  const [cardsData, setCardsData] = useState();
  function getData() {
    console.log(user);
    axios
      .post(`${process.env.REACT_APP_DB_URL}/user/getuserfortherapist`, {
        email: user?.email,
      })
      .then((response) => {
        setCardsData(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="Cards">
      {cardsData?.map((card, id) => {
        console.log(card);
        return (
          <div className="parentContainer" key={id}>
            <CompactCard
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
