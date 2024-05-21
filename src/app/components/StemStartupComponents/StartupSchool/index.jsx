import React from 'react'

const StartupSchool   = () => {
  return (
    <div className='main bg-orangish'>
        <div className="sub items-center ">
        <h1 className='text-[40px] text-center font-medium uppercase '>STEM startup school</h1>
            
            <img src="./assets/underline.svg " className='max-w-[193px] mb-10 ml-32' alt="underline" />
            <div className="flex justify-center items-center gap-10">
                <img src="./assets/startup/startup4.svg" alt="startup" className='' />
                <div>
                    <h1 className='text-[32px] font-medium mb-6 '>What is a STEM Startup School?</h1>
                    <p className='text-base mb-6'>A STEM (Science, Technology, Engineering, and Mathematics) Startup School is an educational program designed to help aspiring entrepreneurs develop the skills and knowledge they need to launch and grow a startup company in a STEM-related field.</p>
                    <p className='text-base'> These programs are typically focused on providing participants with a practical education in entrepreneurship, including topics such as market research, business planning, marketing, sales, and fundraising.</p>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default StartupSchool  
