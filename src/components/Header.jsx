import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-4 md:px-10 lg:px-15'>
            {/*---- Left Side -----*/}
            <div className='md:w-1/2 flex flex-col items-start justify-center pag-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
                <p className='text-xl md:text-2xl lg:text-3xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight '>
                    Book Appointment<br />With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center text-white text-sm font-light mt-2 '>
                    <img className='w-24' src={assets.group_profiles} alt="" />
                    <p className='mb-2'>Simply browse through our extensive list of trusted doctors,schedule your appointment hassle-free.
                    </p>
                </div>
                <a href="#speciality" className='flex items-center  gap-2 bg-white px-4 py-2 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all-duration-300'>
                    Book Appointments <img className='w-2'  src={assets.arrow_icon} alt="" />
                </a>
            </div>
            {/* ------- right Side-------- */}
            <div className='md:w-1/2 relative '>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg ' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header