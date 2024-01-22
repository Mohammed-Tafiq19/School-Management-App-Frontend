import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const [dropdown, setDropdown] = useState(false)


    return (
        //     <nav className='bg-gray-700 p-4'>
        //     <div className="container mx-auto flex justify-between items-center">

        //       <div className='text-white text-2xl hover:text-yellow-800'>LOGO</div>

        //       <div className='space-x-4'>
        //         <a href="#" className='hover:text-white'>Home</a>
        //         <a href="#" className='hover:text-white'>About us</a>
        //         <a href="#" className='hover:text-white'>Service</a>
        //         <a href="#" className='hover:text-white'>Contact us</a>
        //       </div>

        //       <button className='text-white text-2xl hover:text-red-800'>LOGIN</button>

        //     </div>
        //    </nav> 


        <div className='bg-gray-600 text-gray-50 h-20 flex items-center justify-between'>
            <div className='h-20 w-20  rounded-full flex items-center justify-center hover:bg-white hover:text-green-400 ml-3 text-2xl font-bold'>
                <img src="https://www.pngitem.com/pimgs/m/492-4923495_school-management-system-background-images-hd-hd-png.png" alt="mySchool" className='rounded-full' />
            </div>
            <div className='text-xl list-none  gap-5 hidden lg:flex'>
                <li className='hover:text-orange-400 cursor-pointer'>ABOUT US</li>
                <li className='hover:text-orange-400 cursor-pointer'>CONTACT US</li>
                <li className='hover:text-orange-400 cursor-pointer'>OUR SERVICES</li>
                <li className='hover:text-orange-400 cursor-pointer'>OUR PRODUCTS</li>
            </div>
            <div className='py-2 px-10 bg-blue-600 border-2 border-gray-50 text-2xl hover:bg-slate-50 hover:text-blue-400 hover:border-blue-500 cursor-pointer mr-2 hidden lg:block'>WEBSITE</div>
            <div className='text-3xl p-2 border border-gray-50 lg:hidden relative'
                onClick={() => setDropdown((prev) => !prev)}>
                {dropdown ? <i class="fa-solid fa-xmark bg-red-700"></i> : <i class="fa-solid fa-bars"></i>}

                {
                    dropdown && <div className='list-none text-lg absolute -left-20 bg-slate-400 top-10 w-60'>
                        <li className='hover:text-orange-400 cursor-pointer'>ABOUT US</li>
                        <li className='hover:text-orange-400 cursor-pointer'>CONTACT US</li>
                        <li className='hover:text-orange-400 cursor-pointer'>OUR SERVICES</li>
                        <li className='hover:text-orange-400 cursor-pointer'>OUR PRODUCTS</li>
                    </div>
                }

            </div>
        </div>
    )
}

export default Navbar
