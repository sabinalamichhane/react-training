import React from 'react'
import {IoCallSharp} from "react-icons/io5"
import {AiFillMail} from "react-icons/ai"


function Header() {
    return (
        <div className='shadow-lg shadow-gray-400'>
            <div className=' flex justify-between px-2 py-2 '>
                <div className='flex gap-4 text-white ml-12 '>
                    <div className='phone flex items-center gap-2'>
                        <IoCallSharp />
                        071-532805 | 9827494116</div>
                    <div className='flex items-center gap-2'>
                        <AiFillMail/>
                        training@hubit.com.np</div>
                </div>
                <div className=' flex text-white gap-4 mr-8 '>
                    <div> check certificate</div>
                    <div> Career</div>
                    <div> Contact Us</div>
                    <div> Download Brochure</div>
                    <div> Hackathons</div>
                    <div> Hire Talents</div>
                    <div> Testimonials</div>
                    <div> Testimonials</div>
                    <div> Testimonials</div>
                </div>
            </div>
            <div className='flex justify-between gap-4 bg-white py-6 px-6'>
                <div>logo</div>
                    <button className='bg-maincolor text-white border-3 border-black rounded-md p-2 animate-pulse duration-700 delay-200'>Online Admission</button>
                    <div className='flex gap-3'>
                    <div>HOME |</div>
                    <div>About Us |</div>
                    <div>Courses |</div>
                    <div>Placements |</div>
                    <div>Library |</div>
                    <div>Co-operate Training |</div>
                    </div>
            
                </div>
        </div>

    )
}
export default Header;