import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function StudentLogin() {
  const [studentData,setstudentData] = useState({})
  let navigate = useNavigate()


  const handleChange = (e) =>{
    let value = e.target.value;
    let name = e.target.name
    setstudentData({...studentData,[name]: value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    let {email,password} = studentData
    if(!email || !password){
      alert('Provide the necessary fields')
    }
    else{
      let response = await fetch("http://127.0.0.1:5000/student/login",{
        method:"POST",
        body:JSON.stringify(studentData),
        headers: {"Content-Type":"application/json"}
      });
      let result = await response.json()
      if(result.msg){
        alert(result.msg)
      }
      else{
        localStorage.setItem("token",result.token)
        navigate("/studentHome")
      }
    }
  }
  


  return (
    <div>
      <section className="bg-slate-600 dark:bg-slate-500 min-h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-orange-500 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://assets.thehansindia.com/h-upload/2019/12/11/244392-excellent-student.jpg" alt="logo" />
            Student Login
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={handleChange}/>
                </div>
                <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange}/>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-red-600 hover:underline dark:text-red-500">Forgot password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>

                <Link to="/studentSignup">  <p className="text-sm font-light text-orange-500 dark:text-gray-900">
                  Don’t have an account yet? <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</a>
                </p> </Link>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudentLogin

