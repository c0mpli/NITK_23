import React from 'react'
import deleteIcon from '../../imgs/delete.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function UserCard(props) {

  const navigate = useNavigate()
    //console.log(props.name)
    function handleDelete(){
      console.log("Clicked by "+props.email)
      axios.post('https://docwebsite.adityasurve1.repl.co/sadmin/deleteadmin',{
        id:props._id
      },{headers:{"token":localStorage.getItem('token')}})
      .then(response=>{
        console.log(response.data.message)
        //window.location.reload(false);
      })
    }
    function handleDelete2(){
      axios.post('https://docwebsite.adityasurve1.repl.co/admin/deletecourse',{
        courseId:props.id
      },{headers:{"token":localStorage.getItem('token')}})
      .then(response=>{
        alert("Course Deleted")
        //window.location.reload(false);
      })
      
      //console.log("handleDelete2")
    }

    function handleOnClick(){
      navigate({pathname:'/editcourse',search:`?id=${props.id}`})

    }

  return (
    <div className='HMPProgramWrapper' id={props.key}>
      {
        props.isImage==="yes"?<img src={props.image}/>:<></>
      }
        <div className='ProgramContent' onClick={props.edit==="yes"?handleOnClick:null}>
            <h3>{props.name}</h3>
            <div className='ProgramRectLine'></div>
            <p>{props.description}</p>
        </div>
        <button className='deleteButton' onClick={props.del==="2"?handleDelete2:handleDelete}><img src={deleteIcon} style={{height:"1.5rem",width:"1.5rem",paddingBottom:"0.3rem"}}/></button>
    
    </div>
  )
}

export default UserCard
