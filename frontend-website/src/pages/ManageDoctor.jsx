import React, { useState } from 'react'
import { useEffect } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import UserCard from '../components/Users/UserCard'
import userImage from '../imgs/img2.png'
import deleteIcon from '../imgs/delete.png'


function ManageDoctor() {
    const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [address , setAddress] = useState("mumbai");
    const [specialization, setSpecialization] = useState("eye");
    const [experience, setExperience] = useState("5");
    const [fees, setFees] = useState(499);

    const [doctors,setDoctors] = useState()
    useEffect(()=>{
      axios.get('https://docwebsite.adityasurve1.repl.co/admin/gethealthpartners',{headers:{"token":localStorage.getItem('token')}})
      .then(response=>{
        setDoctors(response.data)
        //console.log(response.data)
        //console.log("doctors "+Object.entries(doctors))
      })
      .catch(error=>{console.log(error)})
    })

    function handleDelete(key){
        //console.log("Clicked by "+key)
        //console.log(admins[key]._id)
        axios.post('https://docwebsite.adityasurve1.repl.co/admin/deletehealthp',{
          _id:doctors[key]._id
        },{headers:{"token":localStorage.getItem('token')}})
        .then(response=>{
          alert(JSON.stringify(response.data.message))
        })
        .catch((error)=>{console.log(error)})
      }

      function handleSubmit(e){
        const split = name.split(' ')
        e.preventDefault()
        axios.post('https://docwebsite.adityasurve1.repl.co/admin/addhealthp',{
          email:email,
          password:password,
          firstname:split[0],
          lastname:split[split.length-1],
          mobilenum:number,
          address:address,
          specialization:specialization,
          experience:experience,
          feePerConsultation:fees,
        },{headers:{"token":localStorage.getItem('token')}})
        .then(response=>{
          alert("added")
          setAddress("")
          setEmail("")
          setExperience("")
          setName("")
          setFees("")
          setNumber()
          setPassword("")
          setSpecialization("")
        })
        .catch((error)=>{alert(error)})
      }

  return (
    <div className='AppGlass2'>
        <Sidebar />
        <div className='ContentWrapper'>
          <div>
            <ProfileHeader title={'Manage Doctors'}/>
          </div>
          <div className='AppGlass3'> 
          <div>

          {
              doctors && doctors.map((user,key)=>{
                  return(
                    
                    <div id={key}>
                    <div className='HMPProgramWrapper'>
                      <img src={user.image}/>
                      <div className='ProgramContent'>
                          <h3>{`${user.firstname} ${user.lastname}`}</h3>
                          <div className='ProgramRectLine'></div>
                          <p>{`${user.email}`}</p>
                      </div>
                      <button className='deleteButton' onClick={()=>handleDelete(key)}><img src={deleteIcon} style={{height:"1.5rem",width:"1.5rem",paddingBottom:"0.3rem"}}/></button>    
      </div>
                  </div>
              )
            })
        }
        </div>
        <form className='login-form addAdmin '>
                <h1>Add Health Partner</h1>
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    onChange={e => setName(e.target.value)} 
                    required
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    onChange={e => setEmail(e.target.value)} 
                    required
                />
                <input 
                    type="number" 
                    placeholder="Mobile number" 
                    onChange={e => setNumber(e.target.value)} 
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={e => setPassword(e.target.value)} 
                    required
                    />
                  
                  <input 
                    type="text" 
                    placeholder="Address" 
                    onChange={e => setAddress(e.target.value)} 
                    required
                />
                
                <input 
                    type="text" 
                    placeholder="Specialization" 
                    onChange={e => setSpecialization(e.target.value)} 
                    required
                />
                <input 
                    type="text" 
                    placeholder="Experience" 
                    onChange={e => setExperience(e.target.value)} 
                    required
                />
                <input 
                    type="text" 
                    placeholder="Fees" 
                    onChange={e => setFees(e.target.value)} 
                    required
                />
                <button  onClick={e=>handleSubmit(e)} >Add</button>
            </form>
          
            
          </div>
        </div>
            
    </div>
  )
}

export default ManageDoctor