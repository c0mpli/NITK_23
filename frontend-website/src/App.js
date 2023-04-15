import React,{useEffect, useState} from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import MyPrograms from './pages/MyPrograms';
import HMPPrograms from './pages/HMPPrograms';
import MyAccount from './pages/MyAccount';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ThemeContext } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import { useAuthContext } from './hooks/useAuthContext';
import ManageCourses from './pages/ManageCourses';
import ManageAdmin from './pages/ManageAdmin';
import ManageMessages from './pages/ManageMessages'
import ScheduleAppointment from './pages/ScheduleAppointment';
import Course from './pages/Course';
import ManageDoctor from './pages/ManageDoctor';
import AddCourses from './pages/AddCourses';
import EditCourses from './pages/EditCourses';


function App() {
  const [theme,setTheme] = useState(JSON.parse(localStorage.getItem('theme')));
  const {user} = useAuthContext()
  const role = localStorage.getItem('role')
  const toggleTheme=()=>{
    const temp = theme==='light'?'dark':'light'
    setTheme(theme==='light'?'dark':'light');
    localStorage.setItem('theme',JSON.stringify(temp))
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="App" id={theme}>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/login' element={user?<Dashboard/>:<Login />}></Route>
        <Route path='/signup' element={user?<Dashboard/>:<Signup />}></Route>

        {/** verify login here first */}
        
        <Route path='/dashboard' element={user?<Dashboard />:<Login />}></Route>
        <Route path='/myprograms' element={user?<MyPrograms/>:<Login />}></Route>
        <Route path='/hmpprograms' element={user?<HMPPrograms />:<Login />}></Route>
        <Route path='/myaccount' element={user?<MyAccount />:<Login />}></Route>
        <Route path='/scheduleappointment' element={user?<ScheduleAppointment />:<Login />}></Route>
        <Route path='/viewcourse' element={user?<Course />:<Login />}></Route>


        <Route path='/manageadmins' element={role==='superadmin'?<ManageAdmin/>:user?<HMPPrograms/>:<Login/>}></Route>
        <Route path='/managecourses' element={role==='admin' || role==='superadmin'?<ManageCourses/>:user?<Dashboard/>:<Login/>}></Route>
        <Route path='/managemessages' element={role==='admin' || role==='superadmin'?<ManageMessages/>:user?<Dashboard/>:<Login/>}></Route>
        <Route path='/managedoctors' element={role==='admin' || role==='superadmin'?<ManageDoctor/>:user?<Dashboard/>:<Login/>}></Route>
        <Route path='/addcourse' element={role==='admin' || role==='superadmin'?<AddCourses/>:user?<Dashboard/>:<Login/>}></Route>
        <Route path='/editcourse' element={role==='admin' || role==='superadmin'?<EditCourses/>:user?<Dashboard/>:<Login/>}></Route>


        <Route path='/' element={<Landing />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
