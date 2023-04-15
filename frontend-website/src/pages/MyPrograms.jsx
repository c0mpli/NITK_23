import React, {useEffect,useState} from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import HMPProgram from '../components/HMPProgram'
import SpecificCourse from '../components/SpecificCourse'
import { useNavigate } from 'react-router'

function MyPrograms() {
  const navigate = useNavigate()
  const [programs,setPrograms] = useState();
  const [isCourse,setIsCourse] = useState(false)
  const [courseKey,setCourseKey] = useState()
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    axios.get('https://docwebsite.adityasurve1.repl.co/user/fetchinterestedcourse',{headers:{"token":localStorage.getItem('token')},auth:{"user":{"_id":localStorage.getItem('token')}}})  
    .then(response=>{
      setPrograms(response.data)
      setLoading(false)
      
    })
    .catch(error=>{console.log(error)})
  }, [])
  
  function handleClick(key){
    
    if(!loading) navigate({pathname:'/viewcourse',search:`?id=${[key]}`})
    

  }

  return (
    <div className='AppGlass2'>
            <Sidebar />
            <div className='ContentWrapper'>
                <ProfileHeader title={'My programs'}/>
                <div className='AppGlass3'>
                  {
                    isCourse?<SpecificCourse courseKey={courseKey} courses={programs}/>:
                    <div>
                {programs && programs.map((program,key)=>{
                  return(
            <div id={key}>
              <div className='HMPProgramWrapper' onClick={()=>handleClick(key)}>
                <img src={program.image}/>
                <div className='ProgramContent' >
                    <h3>{program.programname}</h3>
                    <div className='ProgramRectLine'></div>
                    <p>{program.description}</p>
                </div>
                <div className='ProgramDurationWrapper' >
                    <h3 style={{"color": "#4AA9FA"}}>DURATION</h3>
                    <h3 style={{"color": "#FFB800","fontSize":"3rem"}}>{program.duration}</h3>
                    <h3 style={{"color": "#013765"}}>weeks</h3>
                </div>  
              </div>
            </div>
        )})}
                  </div>
                  }
                  
                </div>
            </div>
            
            
            
        </div>
  )
}

export default MyPrograms