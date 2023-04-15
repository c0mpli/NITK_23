import React, { useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'

const courseObj = {
    programname: "",
    duration: 0,
    description: "",
    image:"",
    videos:[]
  };

const videoObj = {
    day1:"",
    day2:"",
    day3:"",
    day4:"",
    day5:"",
    day6:"",
    day7:""
}

function AddCourses() {
    const [formStep, setFormStep] = useState(0)
    const [formData, setFormData] = useState(courseObj)
    const [videoData,setVideoData] = useState(videoObj)

    const completeFormStep = () =>{
        if(formStep>0){
            var values =[]
            for(var k in videoData){
                values.push(videoData[k]);
            }
            
            formData.videos.push(values)
            setVideoData(videoObj)
            setFormStep(formStep+1)
        }
        else{
            if(formData.programname && formData.duration && formData.description && formData.image){
                setFormStep(formStep+1)
            }
        }
    }

    
    const submitForm = ()=>{
        axios.post('https://docwebsite.adityasurve1.repl.co/admin/addnewcourse',formData,{headers:{"token":localStorage.getItem('token')}})
        .then(response=>{
            console.log((response.data));
            alert("Course added")
          })
          .catch(error=>{console.log(error)})
    }
    const handleInput = (ev) =>{
        setFormData({
            ...formData,
            [ev.target.name]:ev.target.name==='duration'?parseInt(ev.target.value,10):ev.target.value
          })
    }
    const handleInput2 = (ev) =>{
        setVideoData({
            ...videoData,
            [ev.target.name]:ev.target.value
          })
    }


  return (
    <div className='AppGlass2'>
    <Sidebar />
    <div className='ContentWrapper'>
      <div>
        <ProfileHeader title={'Add Course'}/>
      </div>
      <div >
        <div className=''>

        <form className='login-form addAdmin' >
            {
                formStep === 0 && (
                    <section>
                        <h1>Course Details</h1>
                        <input 
                            placeholder='Enter course name' 
                            type='text' 
                            name='programname' 
                            onChange={handleInput} 
                            value={formData.programname} 
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
            {/*
            {
                formStep>0 && formStep<=formData.duration && (
                    <section>
                    
                    <h1>Week {formStep}</h1>
                    <input 
                    type='text'
                    placeholder='Day 1'
                    name="day1"
                    onChange={handleInput2} 
                    value={videoData.day1}
                    />
                    <input 
                    type='text'
                    placeholder='Day 2'
                    name="day2"
                    onChange={handleInput2} 
                    value={videoData.day2}
                    />
                    <input 
                    type='text'
                    placeholder='Day 3'
                    name="day3"
                    onChange={handleInput2} 
                    value={videoData.day3}
                    />
                    <input 
                    type='text'
                    placeholder='Day 4'
                    name="day4"
                    onChange={handleInput2} 
                    value={videoData.day4}
                    />
                    <input 
                    type='text'
                    placeholder='Day 5'
                    name="day5"
                    onChange={handleInput2} 
                            value={videoData.day5}
                        />
                        <input 
                        type='text'
                        placeholder='Day 6'
                        name="day6"
                        onChange={handleInput2} 
                        value={videoData.day6}
                        />
                        <input 
                        type='text'
                        placeholder='Day 7'
                        name="day7"
                        onChange={handleInput2} 
                        value={videoData.day7}
                        />
                        </section>
                        )
                    }
                    
                    {
                        (formStep!=formData.duration+1 || formStep===0) && (
                            
                            <button onClick={completeFormStep} type='button'>Next</button>
                            )
                        }
                        {
                            formStep === formData.duration+1 && formStep > 0 && (
                                <button onClick={submitForm} type='button'>Submit</button>
                                )
                            }
                        */}
            <button onClick={submitForm} type='button'>Submit</button>
        </form>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default AddCourses