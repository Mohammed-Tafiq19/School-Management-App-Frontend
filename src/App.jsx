import React from 'react'
import Home from './components/HomePages/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import StudentLogin from './components/StudentPages/StudentLogin'
import StudentSignup from './components/StudentPages/StudentSignup'
import StudentHomePage from './components/StudentPages/StudentHomePage'
import AuthContextAPI from './context/AuthContext'
import StudentProfile from './components/StudentPages/StudentProfile'
import StudentProfileUpdate from './components/StudentPages/StudentProfileUpdate'

import TeacherLogin from './components/TeacherPages/TeacherLogin'


function App() {
  return (
   <>
 {/* <nav className='bg-gray-700 p-4'>
  <div className="container mx-auto flex justify-between items-center">

    <div className='text-white text-2xl hover:text-yellow-800'>LOGO</div>

    <div className='space-x-4'>
      <a href="#" className='hover:text-white'>Home</a>
      <a href="#" className='hover:text-white'>About us</a>
      <a href="#" className='hover:text-white'>Service</a>
      <a href="#" className='hover:text-white'>Contact us</a>
    </div>

    <button className='text-white text-2xl hover:text-red-800'>LOGIN</button>

  </div>
 </nav> */}


 {/* <Home /> */}
 <AuthContextAPI>
 <BrowserRouter>

 <Routes>

  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/studentLogin' element={<StudentLogin></StudentLogin>}></Route>
  <Route path='/studentSignup' element={<StudentSignup></StudentSignup>}></Route>
  <Route path='/studentLogin' element={<StudentLogin></StudentLogin>}></Route>
  <Route path='/studentHome' element={<StudentHomePage></StudentHomePage>}></Route>
  <Route path='/studentProfile' element={<StudentProfile></StudentProfile>}></Route>
  <Route path='/studentProfileUpdate' element={<StudentProfileUpdate></StudentProfileUpdate>}></Route>


  <Route path='/teacherLogin' element={<TeacherLogin></TeacherLogin>}></Route>


  
 </Routes>

 </BrowserRouter>
 </AuthContextAPI>

   </>
  )
}

export default App
