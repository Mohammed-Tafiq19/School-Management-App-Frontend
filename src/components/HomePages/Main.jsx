import React from 'react'
import {Link} from "react-router-dom"

function Main() {
  return (
    <div className='bg-slate-400 flex-grow'>

      <Link to="/studentLogin">
      <div className='bg-slate-50 h-36 w-56 text-3xl font-bold text-orange-400 flex flex-col items-center justify-center m-auto hover:bg-orange-400 hover:text-white shadow-lg shadow-slate-700 my-20'>
        <h1>STUDENTS</h1> 
        <i class="fa-solid fa-graduation-cap text-5xl"></i>
      </div>
      </Link>

      <Link to="/teacherLogin">
      <div className='bg-slate-50 h-36 w-56 text-3xl font-bold text-orange-400 flex flex-col items-center justify-center m-auto hover:bg-orange-400 hover:text-white shadow-lg shadow-slate-700 my-20'>
        <h1>TECAHERS</h1> 
        <i class="fa-solid fa-person-chalkboard text-5xl"></i>
      </div>
      </Link>

    </div>
  )
}

export default Main
