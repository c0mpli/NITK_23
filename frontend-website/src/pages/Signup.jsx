import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import logo from '../imgs/HMP-logo.png'
import './Login.css'

function Signup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [confPassword, setconfPassword] = useState();
   const [name, setName] = useState();
   const [number, setNumber] = useState();

   const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        const names = name.split(' ')
        
        axios.post('https://docwebsite.adityasurve1.repl.co/user/userregister',{
            "firstname":names[0],
            "lastname":names[names.length-1],
            "email":email,
            "mobilenum":number,
            "password":password,
            "confPassword":confPassword
        })
        .then(response=>{
            //console.log(response.data)
            setErrorMessage("ok")
        })
        .catch((err) => {console.log(err.message);setErrorMessage("Incorrect details")});
        
    }
  return (
    <>
    <div className="login-wrapper">
        <nav className='navbar'>
            <img src={logo} onClick={()=>navigate('../')} alt="Logo"/>
            <div className='navbar-buttons'>
            </div>
        </nav>
        <div className="content-wrapper">
            <div className='login-form-container'>
            <form className='login-form'>
                <h1>Sign Up</h1>
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
                    type="password" 
                    placeholder="Confirm Password" 
                    onChange={e => setconfPassword(e.target.value)} 
                    required
                />
                <p style={{color:errorMessage==="ok"?"lightgreen":"lightred",display:!errorMessage?"ok":""}}>
                    {errorMessage==="ok"?"Signup Successfull, Please login":errorMessage}
                </p>
                
                <button value='submit' onClick={e=>handleSubmit(e)}>
                    Sign Up
                </button>
                <div className='login-subtitle'>
                    <p>Already have an account?</p>
                    <Link to={'../login'}>Login</Link>
                </div> 
            </form>
            </div>
            
        </div>  
    </div>
    </>
  )
}

export default Signup