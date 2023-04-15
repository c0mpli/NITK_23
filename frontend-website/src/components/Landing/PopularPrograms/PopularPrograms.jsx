import React from 'react'
import './PopularPrograms.css'

function PopularPrograms(props) {
  return (
    <div className='PopularProgramsCard'>
    <div className='PopularProgramCardWrapper'>
        <div className='yellowBackgroundCard'>
          <img src={props.image}/>
        </div>
        <h5>{props.title}</h5>
    </div>
    </div>
  )
}

export default PopularPrograms