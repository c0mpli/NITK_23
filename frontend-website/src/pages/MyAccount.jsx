import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'

function MyAccount() {
  return (
    <div className='AppGlass2'>
        <Sidebar /> 
        <div className='ContentWrapper'>
          <div>
            <ProfileHeader title="My Account" />
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}

export default MyAccount