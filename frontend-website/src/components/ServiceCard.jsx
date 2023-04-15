import React from 'react'
import './ServiceCard.css'
function ServiceCard(props) {
  return (
    <div className={props.side==="right"?'ServiceCardWrapper alignRight':"ServiceCardWrapper alignLeft"}>
        {props.side==="right"?
        <>
            <img src={props.image}/>
            <h4>{props.title}</h4>
            <div></div>
            <p>{props.message}</p>
        </>:
        <> 
            <h4>{props.title}</h4>
            <img src={props.image}/>
            <p>{props.message}</p>
        </>}
    </div>
  )
}

export default ServiceCard