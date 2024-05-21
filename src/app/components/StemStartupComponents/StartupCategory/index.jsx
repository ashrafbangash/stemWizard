import React from 'react'

const StartupCategory  = () => {
  return (<>
    <div className='main bg-white'>
        <div className="sub items-center relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
                <div>
                <h1 className='text-[40px]  font-medium capitalize '>Categories for startups</h1>
            <img src="./assets/underline.svg " className='max-w-[193px] mb-10 ml-32' alt="underline" />

                    <h1 className='text-[28px] font-medium'>Hub A</h1>
                    <p className='text-base max-w-md mb-6'>This category is for young children who want to be an entrepreneur and run their businesses.</p>

                    <h1 className='text-[28px] font-medium'>Hub B</h1>
                    <p className='text-base max-w-md mb-6'>This category is for university and College Students who want to be an entrepreneur and run their businesses.</p>

                    <h1 className='text-[28px] font-medium'>Hub C</h1>
                    <p className='text-base max-w-md'>This category is for Home and small business owners who want to expand especially women .</p>

                </div>
                <div className='relative z-0'>
                    <img src="./assets/startup/stabg.svg" alt="startup" className='z-10 ml-10'/>
                    <img src="./assets/startup/staborder.svg" alt="startup" className='absolute z-0 top-0 -left-10'/>
                    <img src="./assets/startup/startup4.svg" alt="startup" className='absolute z-0 top-0' />
                    
                </div>
            </div>

            <img src="./assets/startup/ico4.svg" alt="icon" className='absolute top-1/4 left-[40%]' />
            <img src="./assets/startup/ico5.svg" alt="icon" className='absolute bottom-[15%] left-[30%]' />


        </div>
      
    </div>

    <div className="main relative">
    <img src="./assets/startup/joinbg.svg" alt="head" className='-mt-10 z-0 w-screen  object-cover min-w-full h-auto' />
    <div className="sub items-center absolute -top-10">
        <h1 className='text-[60px] font-semibold join-gradiant'>Join the hub</h1>
        <p className='font-medium text-white'>c:\Users\hero5\Downloads\joinbg.svg</p>
        <p className='max-w-4xl  text-white text-center font-medium'>To join our hub go to the link given below and fill out the form
https://docs.google.com/forms/d/1BFfa09o8o2hCDt7Dix4d7SMNIlhQMii8zMKcTT1qP9E/edit?chromeless=1</p>
        
    </div>
    <img src="./assets/startup/ico6.svg" alt="icon" className='absolute -top-[50%] right-[5%]' />

    </div>


    </>
  )
}

export default StartupCategory 
