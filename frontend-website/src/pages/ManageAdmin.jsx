import React,{useState,useEffect} from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import UserCard from '../components/Users/UserCard'
import userImage from '../imgs/img2.png'
import deleteIcon from '../imgs/delete.png'


function ManageAdmin() {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [name, setName] = useState();
   const [errorMessage, setErrorMessage] = useState("");
   const [number, setNumber] = useState();

  const [admins,setAdmins] = useState()
    useEffect(()=>{
      axios.get('https://docwebsite.adityasurve1.repl.co/sadmin/getadmins',{headers:{"token":localStorage.getItem('token')}})
      .then(response=>{
        setAdmins(response.data.data)
        //console.log(admins)
        //console.log("admins "+Object.entries(admins))
      })
    })

    function handleDelete(key){
      //console.log("Clicked by "+key)
      //console.log(admins[key]._id)
      axios.post('https://docwebsite.adityasurve1.repl.co/sadmin/deleteadmin',{
        _id:admins[key]._id
      },{headers:{"token":localStorage.getItem('token')}})
      .then(response=>{
        alert(JSON.stringify(response.data.message))
      })
      .catch((error)=>{console.log(error)})
    }

    function handleSubmit(e){
      const split = name.split(' ')
      e.preventDefault()
      axios.post('https://docwebsite.adityasurve1.repl.co/sadmin/addadmin',{
        email:email,
        password:password,
        firstname:split[0],
        lastname:split[split.length-1],
        mobilenum:number
      },{headers:{"token":localStorage.getItem('token')}})
      .then(response=>{
        setErrorMessage("ok")
        //window.location.reload(false);
      })
      .catch((error)=>{setErrorMessage(error)})
    }

  return (
    <div className='AppGlass2'>
        <Sidebar />
        <div className='ContentWrapper'>
          
          <ProfileHeader title={'Manage Admins'}/>
          
          <div className='AppGlass3'>
          <div>

          {
            
            admins && admins.map((user,key)=>{
              return(
                <div id={key}>
                  <div className='HMPProgramWrapper'>
                    <img src={userImage}/>
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
          <div>

          <form className='login-form addAdmin'>
                <h1>Add admin</h1>
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
                <p style={{color:errorMessage==="ok"?"lightgreen":"lightred",display:!errorMessage?"ok":""}}>
                  {errorMessage==="ok"?"Added":errorMessage}
                </p>
                
                <button value='submit' onClick={e=>handleSubmit(e)}>
                    Add
                </button>
            </form>
          
            </div>
            
          </div>
        </div>
            
    </div>
  )
}

export default ManageAdmin