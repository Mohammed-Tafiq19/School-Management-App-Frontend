import React, { useContext } from 'react'
import Navbar from '../HomePages/Navbar'
import Aside from '../HomePages/Aside'
import Footer from '../HomePages/Footer'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

function StudentHomePage() {

  const {setAuth} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout = () =>{
    localStorage.removeItem("token")
    setAuth(false);
    navigate("/")
  }
  
  return (
    <>
        <Navbar/>
        <div className='flex'>
        <Aside/>
        <section className='flex-1 bg-slate-400'>
          <button className='bg-red-500 px-5 py-3 rounded-lg float-right text-white font-bold hover:bg-yellow-50 hover:text-red-400' onClick={handleLogout}>
          LOGOUT
          <i class="fa-solid fa-arrow-right-to-bracket ml-2 text-lg"></i>
          </button>

          <Link to= {"/studentProfile"}>
          <div className='bg-yellow-100 mt-20 h-20 w-60 m-auto shadow-lg shadow-black text-orange-700 text-xl font-bold flex flex-col items-center justify-center gap-2 md:w-96 md:h-28 md:text-2xl hover:bg-orange-400 hover:text-yellow-50 cursor-pointer'>
          MY PROFILE
          <i class="fa-solid fa-user"></i>
       </div>
       </Link>
         
        </section>
        </div>
        <Footer/>
    </>
  )
}

export default StudentHomePage
