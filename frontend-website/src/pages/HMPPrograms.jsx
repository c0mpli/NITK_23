import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import './HMPPrograms.css'
import { useTheme } from "../context/ThemeContext";
import ProfileHeader from '../components/ProfileHeader';
import HMPProgram from '../components/HMPProgram';
import { dataDigitalBestSeller } from '../Data/Data';
import axios from 'axios'
import { useNavigate } from 'react-router';

function HMPPrograms() {
  const {theme,toggleTheme} = useTheme();
  const [programs,setPrograms] = useState();
  const navigate = useNavigate()
  function handleClick(key){
    axios.post('https://docwebsite.adityasurve1.repl.co/user/addtointerestedcourse',{
      userId:localStorage.getItem('token'),
      courseId: programs[key]._id
    },{headers:{"token":localStorage.getItem('token')}})
    .then(response=>{
    })
    .catch(error=>{console.log(error)})
    
    navigate({pathname:'/myprograms'})
  }

  useEffect(()=>{
    let role = localStorage.getItem('role')
    if(role==='superadmin') role="sadmin"
    axios.get(`https://docwebsite.adityasurve1.repl.co/${role}/fetchallcourses`,{headers:{"token":localStorage.getItem('token')}})
    .then(response=>{
      //console.log(response.data)
      setPrograms(response.data)
    })
    .catch(error=>{console.log(error)})
  })
  return (
    <div className='AppGlass2'>
        <Sidebar />
        <div className='ContentWrapper'>
          
            <ProfileHeader title={'HMP Templates'}/>
          
          <div className='AppGlass3'>
            <div>

          {programs && programs.map((program,key)=>{
            return(
              <div id={key} onClick={()=>handleClick(key)}>
            <HMPProgram 
              image={program.image}
              title={program.programname}
              description={program.description}
              duration={program.duration}
              />
            </div>
        )})}
        </div>
            
          </div>
        </div>
            
    </div>
  )
}

export default HMPPrograms