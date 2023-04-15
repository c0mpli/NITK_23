import React, { useEffect, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import UserCard from '../components/Users/UserCard';
import { useNavigate } from 'react-router-dom';


const formObj = {
  coursetitle:"",
  week:0,
  day:0,
  link:""
}
function ManageCourses() {
  const [courses, setCourses] = useState();

  const [formData,setFormData] = useState(formObj);

  const navigate = useNavigate()
  useEffect(()=>{
    axios.get('https://docwebsite.adityasurve1.repl.co/admin/fetchallcourses',{headers:{"token":localStorage.getItem('token')}})
    .then(response=>{
      //console.log((response.data));
      setCourses(response.data);
    })
    .catch(error=>{console.log(error)})
  })

  const handleSubmit = ()=>{
    axios.post('https://docwebsite.adityasurve1.repl.co/admin/addtoexistingcourse',formData,{headers:{"token":localStorage.getItem('token')}})
    .then(response=>{
      alert((response.data.message));
    })
    .catch(error=>{console.log(error)})
  }  

  return (
    <div className='AppGlass2'>
    <Sidebar />
    <div className='ContentWrapper'>
      <div>
        <ProfileHeader title={'Manage Courses'}/>
      </div>
      <div className='AppGlass3'>
        <div>
          <div className="card-button">

        <button onClick={()=>{navigate('../addcourse')}}>Add course</button>
          </div>
        {
          courses?.map((value,key)=>{
            return(
              
              <UserCard 
              isImage="yes"
              image={value.image}
              name={value.programname}
              description={value.description}
              del="2"
              id={value._id}
              key={key}
              edit="yes"
              />
              )
            })
          }
          </div>
          <div>
          <form className='login-form addAdmin'>
                <h1>Add videos</h1>
                <input 
                    type="text" 
                    placeholder="Course Name" 
                    onChange={e => setFormData({...formData,"coursetitle":e.target.value})} 
                    required
                />
                <input 
                    type="number" 
                    placeholder="Week" 
                    onChange={e => setFormData({...formData,"week":e.target.value})} 
                    required
                />
                <input 
                    type="number" 
                    placeholder="Day" 
                    onChange={e => setFormData({...formData,"day":e.target.value})} 
                    required
                />
                <input 
                    type="text" 
                    placeholder="Link" 
                    onChange={e => setFormData({...formData,"link":e.target.value})} 
                    required
                  />
                
                
                <button type='button' onClick={e=>handleSubmit(e)}>
                    Add
                </button>
            </form>
        </div>


        
      </div>
    </div>
        
</div>
  )
}

export default ManageCourses