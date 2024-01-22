import React from 'react'
import image from "../../assets/school2.jpg"

function Aside() {
  return (
    // <div className='bg-red-400 min-h-[80vh] w-40 py-10 px-2'>
    //     <div className='bg-gray-400 rounded-full h-40 flex items-center justify-center cursor-pointer hover:bg-yellow-500'>
    //     PROFILE
    //     </div>

    //     <div className='text-gray-200 text-2xl list-none py-10'>
    //         <li className='hover:text-black cursor-pointer flex items-center justify-center py-4'>Careers</li>
    //         <li className='hover:text-black cursor-pointer flex items-center justify-center py-6'>Prices</li>
    //         <li className='hover:text-black cursor-pointer flex items-center justify-center p-4'>Admission</li>
    //         <li className='hover:text-black cursor-pointer flex items-center justify-center p-4'>Courses</li>
    //     </div>
      
    // </div>



    <div className='bg-orange-400 min-h-[80vh] max-w-[35vw] sm:max-w-[25vh] md:max-w-[15vw] flex flex-col justify-around'>
        <img src={image} alt='my school' className='rounded-full'/>
        <div className='text-white text-lg font-bold list-none flex flex-col gap-10 items-center'>
            <li className='cursor-pointer'>SCHOOL NAME</li>
            <li className='cursor-pointer'>PLACE</li>
            <li className='cursor-pointer'>COURSES</li>
        </div>
    </div>
  )
}

export default Aside
