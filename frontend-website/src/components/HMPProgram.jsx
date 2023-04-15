import React from 'react'
import { useNavigate } from 'react-router'
import './HMPProgram.css'

function HMPProgram(props) {
  
  return (
    <div className='HMPProgramWrapper'>
        <img src={props.image}/>
        <div className='ProgramContent'>
            <h3>{props.title}</h3>
            <div className='ProgramRectLine'></div>
            <p>{props.description}</p>
        </div>
        <div className='ProgramDurationWrapper'>
            <h3 style={{"color": "#4AA9FA"}}>DURATION</h3>
            <h3 style={{"color": "#FFB800","fontSize":"3rem"}}>{props.duration}</h3>
            <h3 style={{"color": "#013765"}}>weeks</h3>
        </div>
        {
          props.myprogram==="true"?<></>:<button>+</button>
        }
            
    </div>
  )
}

export default HMPProgram