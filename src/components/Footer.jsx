import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-20 my-16 mt-35 text-sm
        ' >
            {/* -------left scetion------ */}
            <div>
              <img className='mb-5 w-40' src={assets.logo} alt="" />
              <p className='w-full text-gray-600 leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nisi qui eveniet quasi cum maxime incidunt labore ex dolorum, unde natus laboriosam consequatur nam tenetur velit deleniti deserunt eaque.</p>
            </div>

            {/* center section */}
            <div>
          <p className='text-lg font-medium mb-5 '>company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
            </div>

            {/* right section */}

            <div>
            <p className='text-lg font-medium mb-5'>Get In Touch</p>
            <ul  className='flex flex-col gap-2 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>prescriptoconsultancy@gmail.com</li>
            </ul>
            </div>
        </div>
        {/* copy right */}
        <div>
         <hr />
         <p>Copyright © 2024 Athul V Nair - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer