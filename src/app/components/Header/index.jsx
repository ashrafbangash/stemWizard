'use client'

import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaSortDown } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = ({bgColor}) => {
    const [menu, setMenu] = useState(false)
   
    const  pathname  = usePathname()
    console.log(pathname)
    const handleMenu = () => {
        setMenu(!menu)
    }
  
    return (
        <>
            <div className={`' w-full flex flex-col justify-center items-center ${bgColor}`}>
                {/* header */}
                <div >
                    <img src='./assets/navbg.svg' alt='navbg' className='relative w-screen object-cover min-w-full h-auto' />
                    <div className='absolute w-full flex justify-center  top-4 left-1/2 -translate-x-1/2 '>
                        <div className='px-5 md:px-16 lg:px-20 flex justify-between w-full max-w-screen-max-screen'>
                            <div className='flex gap-4 text-white'>
                                <p className='flex items-center gap-2 text-base font-medium'><FaLocationDot />Location will be here</p>
                                <p className='flex items-center gap-2 text-base font-medium'><IoMail />info@stemwizardsacademia.com</p>
                            </div>
                            <div className='flex gap-4 items-center text-white'>
                                <p className='text-base font-medium'>Find Us On</p>
                                <p><FaFacebookF /></p>
                                <p><FaLinkedinIn /></p>
                                <p><AiFillInstagram /></p>
                                <p><FaYoutube /></p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* navbar */}

                <div className='flex justify-between items-center mt-6  px-5 md:px-16 lg:px-20 rounded-md w-full max-w-screen-max-screen'>
                    <img src='./assets/stemlogo.svg' alt='logo' className='h-16 w-[196px]' />
                    <div className='flex items-center gap-10 text-base font-medium'>
                        <p
                            className={`header-link ${pathname === '/bookonline'? 'text-pink':'text-black'}`}>
                            Book Online
                        </p>
                        <Link href={'/'}>
                            <p className={`header-link ${pathname === '/'? 'text-pink':'text-black'}`}>Home</p>
{pathname === '/' && (<><img src="./assets/underline.svg" alt="underline" className='w-11' /></>)}
                            </Link>
                      <Link href={'/about'}>  <p className={`header-link ${pathname === '/about'? 'text-pink':'text-black'}`}>About</p>
                      {pathname === '/about' && (<><img src="./assets/underline.svg" alt="underline" className='w-11' /></>)}
                      </Link>
                        <p className={`header-link ${pathname === '/collegiate'? 'text-pink':'text-black'}`}>Collegiate Programs</p>
                        <p className={`header-link ${pathname === '/ourprogram'? 'text-pink':'text-black'}`}>Our Programs</p>
                        <div className='relative'>
                            <button onClick={handleMenu} className='bg-orange flex items-center py-3 text-base font-medium text-white  px-20 rounded-xl'>More <FaSortDown className='-mt-1' /></button>
                            {menu && (
                                <div className='transform z-20 transition-all duration-300 rounded-md ease-in-out absolute top-15 shadow-md left-0.5 bg-white p-6 flex flex-col gap-2'>
                                    <p className='border-b border-black py-2 text-center'>Our STEM Courses</p>
                                    <p className='border-b border-black py-2 text-center'>STEM Startup School</p>
                                    <p className='border-b border-black py-2 text-center'>Earn With Us</p>
                                    <p className='border-b border-black py-2 text-center'>Events</p>
                                    <p className='border-b border-black py-2 text-center'>Support Us</p>
                                    <p className='border-b border-black py-2 text-center'>Press</p>
                                    <p className='border-b border-black py-2 text-center'>FAQS</p>
                                    <p className='border-b border-black py-2 text-center'>Blog</p>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
