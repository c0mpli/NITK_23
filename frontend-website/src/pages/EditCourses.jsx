import React, { useEffect, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import {useLocation} from 'react-router-dom'


const courseObj = {
    coursetitle: "",
    duration: 0,
    description: "",
    image:"",
    id:"",
    videos:[]
  };

function EditCourses() {
    const {search} = useLocation()

    const [formStep, setFormStep] = useState(0)
    const [formData, setFormData] = useState(courseObj)
    useEffect(()=>{
        const courseKey = new URLSearchParams(search).get('id')
        setFormData({...formData,"id":courseKey}) 
    },[])
    const submitForm = ()=>{
        console.log(formData)
        axios.post('https://docwebsite.adityasurve1.repl.co/admin/changecoursedetails',formData,{headers:{"token":localStorage.getItem('token')}})
        .then(response=>{
            //console.log((response.data));
            alert("Course edited")
          })
          .catch(error=>{console.log(error)})
    }
    const handleInput = (ev) =>{
        setFormData({
            ...formData,
            [ev.target.name]:ev.target.name==='duration'?parseInt(ev.target.value,10):ev.target.value
          })
    }
    return (
        <div className='AppGlass2'>
        <Sidebar />
        <div className='ContentWrapper'>
          <div>
            <ProfileHeader title={'Edit Course'}/>
          </div>
          <div >
            <div>
    
            <form className='login-form addAdmin'>
                {
                    formStep === 0 && (
                        <section>
                            <h1>Edit Course Details</h1>
                            <input 
                                placeholder='Enter course name' 
                                type='text' 
                                name='coursetitle' 
                                onChange={handleInput} 
                                value={formData.coursetitle} 
                                required
                                />
                            <input 
                                placeholder='Enter course duration' 
                                type='number' 
                                name='duration' 
                                onChange={handleInput} 
                                value={formData.duration} 
                                required
                            />
                            <input 
                                placeholder='Enter course description' 
                                type='text' 
                                name='description' 
                                onChange={handleInput} 
                                value={formData.description} 
                                required
                                />
                            <input 
                                placeholder='Enter course image URL' 
                                type='text' 
                                name='image' 
                                onChange={handleInput} 
                                value={formData.image} 
                                required
                                />
                        </section>
                    )
                }
                <button onClick={submitForm} type='button'>Submit</button>
            </form>
            </div>
            
          </div>
        </div>
        </div>
      )
}

export default EditCourses