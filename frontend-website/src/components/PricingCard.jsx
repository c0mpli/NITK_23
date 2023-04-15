import React from 'react'
import './PricingCard.css'
function PricingCard(props) {
  return (
    <div className='PricingCardWrapper'>
        <div>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        </div>
        
        <h2>INR {props.price}</h2>
        <button>Get Started</button>
    </div>
  )
}

export default PricingCard