import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Programs.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Programs() {
  const navigate = useNavigate()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [programs,setPrograms] = useState();
  
  useEffect(()=>{
    axios.get('https://docwebsite.adityasurve1.repl.co/user/fetchallcourses',{headers:{"token":localStorage.getItem('token')}})
    .then(response=>{
      //console.log(response.data)
      setPrograms(response.data)
    })
  })
  
  return (
    <div className="Programs">
      <Slider {...settings}>
        {programs?.map((item,key) => {
          return(
            <div className="card" key={key}>
              <div className="card-top">
                <img
                  src={item.image}
                  alt={item.programname}
                  />
                <h1>{item.programname}</h1>
                
                <div className='programsRectLine'></div>
              </div>
              <div className="card-bottom">
                <p>{item.description}</p>
                <button onClick={()=>navigate('/hmpprograms')}>View More</button>
              </div>
            </div>
          )
          })}
      </Slider>
    </div>
  );
}

export default Programs;