import React, { useEffect, useState } from "react";
import "./Cards.css";

import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import CompactCard from "../Card/Card";
import { useAuthContext } from "../../../hooks/useAuthContext";
import ServiceCard from "../../ServiceCard";
import Card from "../Card/Card";

const Cards = () => {
  const series = {
    name: "Revenue",
    data: [10, 100, 50, 70, 80, 30, 40],
  };
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
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    getData();
  }, [user]);

  return (
    <div className="Cards">
      {cardsData?.map((card, id) => {
        console.log(card);
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.name}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={series.data}
              message={card.email}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
