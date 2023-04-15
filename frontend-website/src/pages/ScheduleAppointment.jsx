import React, { useEffect, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './Appointments.css'
import axios from 'axios';
function ScheduleAppointment() {
  const [startDate, setStartDate] = useState(new Date());
  const [timeValue, setTimeValue] = useState("")
  const [healthP,setHealthP] = useState([])
  const [selectedHP,setSelectedHP] = useState("")

  useEffect(()=>{
    axios.get('https://docwebsite.adityasurve1.repl.co/user/get-all-approved-doctors',{headers:{"token":localStorage.getItem('token')}})
    .then(response=>{setHealthP(response.data.data);})
    .catch(error=>{console.log(error)})
  },[])



  function checkAvailabilty(){
    const date = `${startDate.getDate()}/${startDate.getMonth()}/${startDate.getFullYear()}`
    console.log(selectedHP,date,timeValue)
    axios.post('https://docwebsite.adityasurve1.repl.co/user/check-booking-avilability',{
      date:date,
      time:timeValue,
      doctorId:selectedHP
    },{headers:{"token":localStorage.getItem('token')}})
  .then(response=>{
    if(response.data.success){
      alert('Slot Available')
    }
  })
  .catch(error=>{console.log(error)})
  }

  function handleBook(){
    const date = `${startDate.getDate()}/${startDate.getMonth()}/${startDate.getFullYear()}`
    axios.post('https://docwebsite.adityasurve1.repl.co/user/book-appointment',{
      userId:localStorage.getItem('token'),
      date:date,
      time:timeValue,
      doctorId:selectedHP
    },{headers:{"token":localStorage.getItem('token')}})
  .then(response=>{
    console.log(response.data)
    if(response.data.success){
      alert('Booked, Waiting for confirmation from health partner.')
    }
  })
  .catch(error=>{console.log(error)})
  }

    return (
        <div className='AppGlass2'>
        <Sidebar />
        <div className='ContentWrapper'>
          <ProfileHeader title={'Schedule Appointment'}/>
          <div className='AppGlass3'>
            <div className='bookAppointmentWrapper'>
              <div className='inputWrapper'>
                <h4>Select Health Partner</h4>
                <select value={selectedHP} onChange={(event) => {setSelectedHP(event.target.value);}}>
                  {
                    healthP?.map((partner,key)=>{
                      return(
                        <option key={key} value={partner._id}>{`${partner.firstname} ${partner.lastname}`}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div className='inputWrapper'>
                <h4>Select Date</h4>
                <DatePicker
                dateFormat="dd/MM/yyyy"
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className='inputWrapper'>
                <h4>Select Time</h4>
                <select value={timeValue} onChange={(event) => {setTimeValue(event.target.value);}}>

                  <option value="11:00">11:00</option>

                  <option value="13:00">13:00</option>

                  <option value="15:00">15:00</option>

                </select>
              </div>
              <div className="appointmentButtons card-button">

                <button onClick={checkAvailabilty}>Check availaibilty</button>
                <button onClick={handleBook}>Book appointment</button>
              </div>
          </div>
          </div>
        </div>
            
    </div>
      )
}

export default ScheduleAppointment