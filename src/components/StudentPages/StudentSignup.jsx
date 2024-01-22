import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentSignUp() {

    let [studentData, setstudentData] = useState({})
    let navigate = useNavigate()



    const onChangeHandler = (e) => {
        let value = e.target.value
        let name = e.target.name
        setstudentData({ ...studentData, [name]: value })
        // console.log(value, name);
        // console.log(studentData);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        let { fName, lName, age, mobile, password, gender, email, sID } = studentData;
        if (!fName || !lName || !age || !mobile || !password || !gender || !email || !sID) {
            alert("Provide all the details")
        } else {
            let res = await fetch("http://127.0.0.1:5000/student/signup", {
                method: 'POST',
                body: JSON.stringify(studentData),
                headers: { "Content-Type": "application/json" }
            })
            let result = await res.json()
            console.log(result);
            if (result.msg) {
                alert(result.msg)
            }
            else {
                localStorage.setItem("token", result.token)
                navigate("/studentHome")

            }
        }
    }

    return (
        <div>
            <section className="bg-slate-500 dark:bg-slate-500 min-h-screen">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">

                    <div className="w-full h-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:bg-gray-800 dark:border-gray-700 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-red-500 md:text-2xl dark:text-white text-center">
                                Create Student Account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={onSubmitHandler}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="mb-4">
                                        <label
                                            for="fname"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fname"
                                            name="fName"
                                            className="mt-1 p-2 w-full border rounded"
                                            onChange={(event) => onChangeHandler(event)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            for="lname"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lname"
                                            name="lName"
                                            className="mt-1 p-2 w-full border rounded"
                                            onChange={(event) => onChangeHandler(event)}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="mb-4">
                                        <label
                                            for="sID"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            sID
                                        </label>
                                        <input
                                            type="number"
                                            id="sID"
                                            name="sID"
                                            className="mt-1 p-2 w-full border rounded"
                                            onChange={onChangeHandler}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            for="age"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Age
                                        </label>
                                        <input
                                            type="number"
                                            id="age"
                                            name="age"
                                            className="mt-1 p-2 w-full border rounded"
                                            onChange={onChangeHandler}

                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        for="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required=""
                                        onChange={onChangeHandler}

                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        onChange={onChangeHandler}

                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        for="mobile"
                                        className="block text-sm font-medium text-gray-600"
                                    >
                                        Mobile
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        className="mt-1 p-2 w-full border rounded"
                                        onChange={onChangeHandler}

                                    />
                                </div>

                                <div>
                                    <label
                                        for="gender"
                                        className="block text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Gender
                                    </label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        className="mt-1 p-2 w-full border rounded"
                                        onChange={onChangeHandler}

                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Sign Up
                                </button>

                                <Link to='/studentLogin'> <p className="text-sm font-light text-orange-500 dark:text-gray-400">
                                    Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default StudentSignUp;