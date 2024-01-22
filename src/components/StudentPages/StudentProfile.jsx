import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function StudentProfile() {
    const navigate = useNavigate()
    const [studentDetails,setStudentDetails] = useState({
        fName:'',
        lName:'',
        email:'',
        password:'',
        sID:'',
        age:'',
        gender:'',
        mobile:'',
    })

  

    useEffect(()=>{
        let token= localStorage.getItem("token")
        async function getData(){
            let response = await axios.get(`http://127.0.0.1:5000/student/${token}`)
            let data = await response.data
            console.log(data);
            setStudentDetails(data)
        }
        getData()
    },[])
    const handleData = async () => {
        let response = await axios.post("http://127.0.0.1:5000/student/delete",{email: studentDetails.email})
        if(response.status==200){
            
            localStorage.removeItem("token")
            navigate("/")
        }
    }

   


   
  return (
    <div className='bg-slate-200 min-h-screen pt-16'>
         <div className='text-3xl text-orange-400  text-center font-bold mt-5'>
                 STUDENT PROFILE PAGE
        </div>  
        <form className='bg-slate-700 pt-10 text-white w-[50%] m-auto mt-10
        flex flex-col gap-5 justify-center items-center'>
            <div className='flex gap-10'>
                
                <label htmlFor='' className='text-2xl px-5'>F-NAME:</label>
                <input type='text' value={studentDetails.fName} 
                className='w-[200px] h-10  text-black text-lg 
                focus:outline-none' readOnly/>
            </div>
            <div className='flex gap-10'>
                 <label htmlFor='' className='text-2xl px-5'>L-NAME:</label>
                <input type='text' value={studentDetails.lName} 
                className='w-[200px] h-10 text-black text-lg 
                focus:outline-none' readOnly/>
            </div>
            <div className='flex gap-10'>
                 <label htmlFor='' className='text-2xl '>STUDENT-ID:</label>
                <input type='text' value={studentDetails.sID} 
                className='w-[200px] h-10 text-black text-lg 
                focus:outline-none' readOnly/>
            </div>
            <div className='flex gap-10'>
                 <label htmlFor='' className='text-2xl px-11'>AGE:</label>
                <input type='text' value={studentDetails.age} 
                className='w-[200px] h-10 text-black text-lg 
                focus:outline-none' readOnly/>
            </div>
            <div className='flex gap-10'>
                 <label htmlFor='' className='text-2xl px-5'>MOBILE:</label>
                <input type='text' value={studentDetails.mobile} 
                className='w-[200px] h-10 text-black text-lg 
                focus:outline-none' readOnly/>
            </div>
            <div className='flex gap-10'>
                 <label htmlFor='' className='text-2xl px-7'>EMAIL:</label>
                <input type='text' value={studentDetails.email} 
                className='w-[200px] h-10 text-black text-lg 
                focus:outline-none' readOnly/>
            </div>
            <div className='flex gap-10'>
                 <label htmlFor='' className='text-2xl px-5'>GENDER:</label>
                 <input type='radio' name='gender' className='w-5' 
                 checked={studentDetails.gender==='male'} readOnly/>MALE
                 <input type='radio' name='gender' className='w-5' 
                 checked={studentDetails.gender==='female'} readOnly/>FEMALE
                {/* <input type='text' value={studentDetails.gender} 
                className='w-[200px] h-10 text-black text-lg 
                focus:outline-none' readOnly/> */}
            </div>    
            <div className='flex justify-around mb-4'>
              <Link to={'/studentProfileUpdate'}>
              <button type='button'  className='bg-green-500 shadow-yellow-200
                 text-white text-2xl px-4 py-2 
                hover:bg-slate-200 hover:text-green-500'>UPDATE</button>
              </Link>
                <button type='button' className='bg-red-500  shadow-yellow-200
                 text-white text-2xl px-4 py-2 
                hover:bg-slate-200 hover:text-red-500' onClick={handleData}
                >DELETE ACCOUNT</button>


            </div>      
        </form>
    </div>
    
  )
}

export default StudentProfile