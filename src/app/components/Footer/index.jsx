import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaLocationDot, FaYoutube } from 'react-icons/fa6'
import { IoLogoWhatsapp, IoMailOutline } from 'react-icons/io5'

const Footer = ({bgColor}) => {
  return (
    <div className={` ${bgColor} items-center mt-44 md:mt-20 relative h-full `}>
                <img src="/assets/contact/footer1.svg" alt="bg" className='drop-shadow-md z-10 w-screen  object-center min-w-full h-auto' />
                <img src="/assets/contact/footer2.svg" alt="bg" className={`drop-shadow-md z-0  ${bgColor}  absolute bottom-0 right-0 object-cover min-w-full h-auto`} />
                <div className={`flex  ${bgColor}  justify-between items-center flex-wrap absolute -top-24  md:top-0 lg:top-[65%] h-fit  -translate-y-1/2 z-20   px-5 md:px-16 lg:px-20  w-full max-w-screen-max-screen`}>
                    <div className="gap-6 flex flex-col">
                        <p className='flex items-center gap-2 text-base font-medium'><FaLocationDot />Location will be here</p>
                        <p className='flex items-center gap-2 text-base font-medium'><span className="h-8 w-8 border p-1 flex justify-center items-center"><IoMailOutline /></span>info@stemwizardsacademia.com</p>
                    </div>
                    <p className="text-base font-medium hidden lg:block">©2023 by STEM Wizards Academia. </p>
                    <div className="gap-6 flex flex-col">
                        <p className="text-xl md:text-2xl font-semibold">Find Us On</p>
                        <div className='flex gap-4 items-center '>
                            <span className="h-8 w-8 border p-1 flex justify-center items-center text-fb border-fb"><p><FaFacebookF /></p></span>
                            <span className="h-8 w-8 border p-1 flex justify-center items-center text-link border-link"><p><FaLinkedinIn /></p></span>
                            <span className="h-8 w-8 border p-1 flex justify-center items-center text-wa border-wa"><p><IoLogoWhatsapp /></p></span>
                            <span className="relative">
                                <img src="/assets/contact/linkborder.svg" alt="border" className="w-8 h-8" />
                                <img src="/assets/contact/link.svg" alt="" className="absolute top-1/2 -translate-y-1/2 z-30 left-1/2 -translate-x-1/2 " />
                            </span>
                            <span className="h-8 w-8 border p-1 flex justify-center items-center text-yt border-yt"><p><FaYoutube /></p></span>
                        </div>

                    </div>


                </div>
                <p className="text-base font-medium text-nowrap lg:hidden block absolute bottom-3 left-1/2 -translate-x-1/2">©2023 by STEM Wizards Academia. </p>

            </div>
  )
}

export default Footer
