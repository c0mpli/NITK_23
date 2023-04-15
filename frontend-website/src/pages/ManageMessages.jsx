import React,{useState} from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import './ManageMessages.css'
import axios from 'axios'
import UserCard from '../components/Users/UserCard'
import deleteIcon from '../imgs/delete.png'

function ManageMessages() {
  const [messages,setMessages] = useState()
  const [inputMessage,setInputMessage] = useState()
  
  axios.get('https://docwebsite.adityasurve1.repl.co/sadmin/getmessages',{headers:{"token":localStorage.getItem('token')}})
  .then(response=>{setMessages((response.data.data).reverse())})
  .catch(error=>{console.log(error)})

  function handleDelete(key){
    axios.post('https://docwebsite.adityasurve1.repl.co/sadmin/deletemessage',{
      _id:messages[key]._id
    },{headers:{"token":localStorage.getItem('token')}})
    .then(response=>{
      alert(response.data.message)
    })
    .catch((error)=>{console.log(error)})
  }

  function handleSend(){
    axios.post('https://docwebsite.adityasurve1.repl.co/sadmin/broadcastmsg',{
      message:inputMessage
    },{headers:{"token":localStorage.getItem('token')}})
    .then(response=>{
      alert(response.data.message)
    })
    .catch((error)=>{console.log(error)})
  }
  return (
    <div className='AppGlass2'>
    <Sidebar />
    <div className='ContentWrapper'>
      
        <ProfileHeader title={'Manage Messages'}/>
      
      <div className='AppGlass3'>
        <div>
          <div className='sendMessageWrapper'>
            <input placeholder='Send a message' onChange={e => setInputMessage(e.target.value)} />
            <button onClick={handleSend}>Send</button>
          </div>
          <div className='messagesWrapper'>
            <h1>Messages</h1>
            <div>
              {
                messages && messages.map((message,key)=>{
                  return(
                    <div key={key}>
                    <div className='HMPProgramWrapper'>
                    <div className='ProgramContent'>
                        <h3>{message.message}</h3>
                        <div className='ProgramRectLine'></div>
                        
                    </div>
                    <button className='deleteButton' onClick={()=>handleDelete(key)}><img src={deleteIcon} style={{height:"1.5rem",width:"1.5rem",paddingBottom:"0.3rem"}}/></button>    
    </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      
        
      </div>
    </div>
        
</div>
  )
}

export default ManageMessages