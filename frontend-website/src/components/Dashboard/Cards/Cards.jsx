import React, { useEffect, useState } from "react";
import "./Cards.css";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import axios from "axios";

const Cards = () => {
  const [cardsData,setCardsData] = useState()
   const navigate = useNavigate()
   useEffect(()=>{
    axios.get('https://docwebsite.adityasurve1.repl.co/user/getcourseprogress',{headers:{"token":localStorage.getItem('token')}})
    .then(response=>{
      setCardsData(response.data)
      console.log(response.data)
    })
    .catch(error=>{console.log(error)})

  },[])
  return (
    <>
    <div className="Cards">
      {cardsData?.map((card, id) => {
        if(card.percentage!=0){
          return (
            <div className="parentContainer" key={id}>
              
              <Card
                title={card.courseName}
                color={card.color}
                barValue={Math.round(card.percentage)}
                value={card.value}
              />
            </div>
          );
        }
      })}
    </div>
    <div className="card-button">

      <button onClick={()=>navigate('/myprograms')}>{'VIEW ALL ->'} </button>
    </div>
    </>
  );
};

export default Cards;
