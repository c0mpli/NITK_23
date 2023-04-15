import React, { useState } from 'react'
import { useEffect } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import UserCard from '../components/Users/UserCard'
import userImage from '../imgs/img2.png'



function ManageUsers() {
    const [users,setUsers] = useState()
    useEffect(()=>{
      axios.get('https://docwebsite.adityasurve1.repl.co/sadmin/getusers',{headers:{"token":localStorage.getItem('token')}})
      .then(response=>{
        setUsers(response.data.data)
        console.log(users)
        //console.log("Users "+Object.entries(users))
      })
    })
  return (
    <div className='AppGlass2'>
        <Sidebar />
        <div className='ContentWrapper'>
          <div>
            <ProfileHeader title={'Manage users'}/>
          </div>
          <div>
          {
            users && users.map((user,key)=>{
              return(
                <div>
                  <UserCard 
                  name={`${user.firstname} ${user.lastname}`} 
                  image={userImage}
                  description={`Email: ${user.email}, Mobile Number: ${user.mobilenum}`}
                  />
                </div>
              )
            })
          }
          
            
          </div>
        </div>
            
    </div>
  )
}

export default ManageUsers