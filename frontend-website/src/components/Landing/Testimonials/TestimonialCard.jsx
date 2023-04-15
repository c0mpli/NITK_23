import React, {useState} from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { testimonials } from '../../../Data/Data';
import imgGirl from '../../../imgs/img1.png';
import './TestimonialCard.css'


function TestimonialCard() {
    const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };
  return (
    <div className="testimonialSliderWrapper">
            <Slider {...settings}>
              {testimonials.map((testimonial)=>{
                return(
                    <div className="testimonialWrapper">
                      <img src={testimonial.image}/>
                      <div className="testimonialContent">
                        <p>"{testimonial.message}"</p>
                        <div className='testimonialProfile'>
                          <h1>{testimonial.name}</h1>
                          <h4>{testimonial.status}</h4>
                        </div>
                        
                      </div>
                    </div>
                    )
              })}
            </Slider>
    </div>
  )
}

export default TestimonialCard