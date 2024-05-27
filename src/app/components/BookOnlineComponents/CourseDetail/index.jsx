import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi'

const CourseDetail = () => {
  return (
    <div className='main'>
        <div className="sub items-center relative">
        <h1 className='text-2xl md:text-[40px] font-medium '>Book Online</h1>
                <img src="/assets/underline.svg" alt="underline" className='mx-auto mt-2 max-w-xs mb-8' />

                <div className='relative max-w-sm xl:max-w-full mb-10'>
                    <img src="/assets/ourprogram/onlinebg1.svg" alt="onlinebg" className=' hidden xl:block     ' />
                    <img src="/assets/ourprogram/onlinembg1.svg" alt="onlinebg" className='mx-auto block xl:hidden' />
                    <div className='absolute sm:ml-6 top-0 xl:top-1/2 xl:-translate-y-1/2 grid grid-cols-1 xl:grid-cols-2 items-center'>
                        <div className='pb-2 pt-16       xl:pl-32'>
                            <h1 className='text-xl ml-10 xl:ml-0 xl:text-[40px]  font-semibold mb-4'>One-To-One Session</h1>
                            <h1 className='text-base ml-10 xl:ml-0 xl:text-2xl pr-20 xl:pr-0 leading-tight capitalize font-semibold'>ended |  remote / In-house</h1>
                            <h1 className='text-base ml-10 xl:ml-0 xl:text-2xl pr-20 xl:pr-0 leading-tight capitalize font-semibold mt-5'>Service Description</h1>
                            

                            <p className='text-xs xl:text-base px-10   xl:pr-10 xl:pl-0 capitalize '>
                            This is a summary of your online course. Include an overall description of the class, significant concepts that are taught and any other relevant information that would be helpful for a potential student. It’s also a good idea to mention any specific requirements for materials or time commitment outside of class.
                            </p>
                           <img src="/assets/ourprogram/onlineimg.svg" alt="" className='xl:hidden block mx-auto mt-4 mr-2 lg:mx-0' />
                            <h1 className='text-base ml-12 xl:ml-0 xl:text-2xl pr-20 xl:pr-0 leading-tight capitalize font-semibold hidden xl:block mt-5'>Contact Details</h1>
                            <p className='text-xs xl:text-base capitalize hidden xl:block'>6477812408  </p>
                            <p className='text-xs xl:text-base capitalize hidden xl:block'>sania.khan@stemwizardsacademia.com</p>
                            <p className='text-xs xl:text-base capitalize hidden xl:block'>955 Queen St W, Toronto, ON M6J 1G9, Canada</p>
                            <div className='xl:flex  gap-4 hidden mt-5'>
                            <button className='bg-green flex   py-3 px-6   z-30 items-center gap-2 w-fit rounded-xl text-white'>Book Now <FiArrowRight /></button>
                            <button className='bg-green flex   py-3 px-6   z-30 items-center gap-2 w-fit rounded-xl text-white'>Call <AiFillPhone /></button>


                            </div>
                        </div>
                        <img src="/assets/ourprogram/onlineimg.svg" alt="" className='hidden xl:block' />


                    </div>
                    <div className=' xl:hidden flex flex-col justify-center items-center gap-4 mt-10'>
                    <h1 className='text-base   xl:text-2xl  leading-tight capitalize font-semibold block xl:hidden'>Contact Details</h1>
                            <p className='text-xs xl:text-base capitalize  '>6477812408  </p>
                            <p className='text-xs xl:text-base capitalize  '>sania.khan@stemwizardsacademia.com</p>
                            <p className='text-xs xl:text-base capitalize  '>955 Queen St W, Toronto, ON M6J 1G9, Canada</p>
                            <div className='  gap-4 flex flex-col  '>
                            <button className='bg-green flex min-w-[150px] justify-center  py-3 px-6   z-30 items-center gap-2 w-fit rounded-xl text-white mt-4'>Book Now <FiArrowRight /></button>
                            <button className='bg-green flex min-w-[150px] justify-center  py-3 px-6   z-30 items-center gap-2 w-fit rounded-xl text-white'>Call <AiFillPhone /></button>


                            </div>


                    </div>
                  
                </div>
                <img src="/assets/stemcourse/ico4.svg" alt="stemcourseicons" className='absolute hidden lg:block  -top-[0%] right-[15%]' />
                <img src="/assets/stemcourse/ico7.svg" alt="stemcourseicons" className='absolute  hidden lg:block top-[45%] right-[5%]' />
                <img src="/assets/stemcourse/ico8.svg" alt="stemcourseicons" className='absolute  hidden lg:block bottom-[0%] left-[20%]' />
                <img src="/assets/contact/contacticon.svg" alt="stemcourseicons" className='absolute  hidden lg:block bottom-[15%] right-[5%]' />
                <img src="/assets/stemcourse/ico9.svg" alt="stemcourseicons" className='absolute  hidden lg:block top-[6%] left-[25%]' />
                <img src="/assets/stemcourse/ico2.svg" alt="stemcourseicons" className='absolute  hidden lg:block top-[0%] left-[10%]' />
        </div>
      
    </div>
  )
}

export default CourseDetail
