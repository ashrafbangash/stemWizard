'use client'

import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaSortDown } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = ({ bgColor }) => {
    const [menu, setMenu] = useState(false)
    const [programMenu, setProgramMenu] = useState(false)

    const handleProgramMenu = () => {
        setProgramMenu(!programMenu)
    }

    const pathname = usePathname()
    console.log(pathname)
    const handleMenu = () => {
        setMenu(!menu)
    }
    const links = [
        { href: '/bookonline', label: 'Book Online', class: "w-11" },
        { href: '/', label: 'Home', class: "w-11" },
        { href: '/about', label: 'About', class: "w-11" },
        { href: '/collegiate', label: 'Collegiate Programs', class: "w-36 ml-1" },
    ];

    return (
        <>
            <div className={`' w-full flex flex-col justify-center items-center ${bgColor}`}>
                {/* header */}
                <div >
                    <img src='./assets/home/navbg.svg' alt='navbg' className='relative w-screen object-cover min-w-full h-auto' />
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
                    <img src='./assets/home/stemlogo.svg' alt='logo' className='h-16 w-[196px]' />
                    <div className='flex items-center gap-10 text-base font-medium'>
                        {links.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <p className={`header-link ${pathname === link.href ? 'text-pink' : 'text-black'}`}>
                                    {link.label}
                                </p>
                                {pathname === link.href && (
                                    <img src="./assets/underline.svg" alt="underline" className={`${link.class}`} />
                                )}
                            </Link>
                        ))}
                        {/* <Link key={index} href={'/ourprogram'}> */}
                        <div className="relative">
                            <p onClick={handleProgramMenu} className={`header-link ${pathname === '/ourprogram' || pathname === '/afterschoolprogram' ? 'text-pink' : 'text-black'}`}>
                                Our Program
                            </p>
                            {(pathname === '/ourprogram' || pathname === '/afterschoolprogram') && ( <img src="./assets/underline.svg" alt="underline" className={`w-24 ml1`} /> )}
                            {programMenu && (
                                <div onMouseLeave={()=> setProgramMenu(false)} className='transform z-20 transition-all min-w-[250px] duration-300 rounded-md ease-in-out absolute top-15 shadow-md -left-20 bg-white p-2 flex flex-col gap-2'>
                                    <Link href={'/ourprogram'}><p  className={` border-b w-full ${pathname === '/ourprogram' && "text-pink"}  border-black py-2 text-center hover:text-pink cursor-pointer`}>Young Engineers Girls Program</p></Link>
                                   <Link href={'/afterschoolprogram'}> <p className={` border-b w-full ${pathname === '/afterschoolprogram' && "text-pink"}  border-black py-2 text-center hover:text-pink cursor-pointer`}>After School Program</p></Link>
                                </div>
                            )}
                        </div>
                        {/* </Link> */}



                        <div className='relative'>
                            <button onClick={handleMenu} className='bg-orange flex items-center py-3 text-base font-medium text-white  px-20 rounded-xl'>More <FaSortDown className='-mt-1' /></button>
                            {menu && (
                                <div className='transform z-20 transition-all duration-300 rounded-md ease-in-out absolute top-15 shadow-md left-0.5 bg-white p-6 flex flex-col gap-2'>
                                    <Link href={'/stemcourses'}><p className={`border-b border-black ${pathname === '/stemcourses' && 'text-pink'} cursor-pointer hover:text-pink py-2 text-center`}>Our STEM Courses</p></Link>
                                    <Link href={'/stemstartup'}><p className={`border-b border-black ${pathname === '/stemstartup' && 'text-pink'} cursor-pointer hover:text-pink py-2 text-center`}>STEM Startup School</p></Link>
                                    <Link href={'./'}><p className={`border-b border-black ${pathname === './' && 'text-pink'} cursor-pointer hover:text-pink py-2 text-center`}>Earn With Us</p></Link>
                                    <Link href={'/events'}><p className={`border-b border-black ${pathname === '/events' && 'text-pink'} cursor-pointer hover:text-pink py-2 text-center`}>Events</p></Link>
                                    <Link href={'./'}><p className={`border-b border-black ${pathname === './' && 'text-pink'} cursor-pointer hover:text-pink py-2 text-center`}>Support Us</p></Link>
                                    <Link href={'./'}><p className={`border-b border-black ${pathname === './' && 'text-pink'} cursor-pointer hover:text-pink py-2 text-center`}>Press</p></Link>
                                    <Link href={'./'}><p className={`border-b border-black ${pathname === './' && 'text-pink'} cursor-pointer hover:text-pink py-2 text-center`}>FAQS</p></Link>
                                    <Link href={'./'}><p className={`border-b border-black ${pathname === './' && 'text-pink'} cursor-pointer hover:text-pink py-2 text-center`}>Blog</p></Link>
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
