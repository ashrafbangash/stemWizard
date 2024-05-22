import React from 'react'

const SupportHero = () => {
  return (
    <>
    <div className='main bg-gray'>
        <div className="sub items-center">
        <h1 className='text-[40px]  font-medium capitalize '>Support our organizaion</h1>
        <img src="./assets/underline.svg " className='max-w-[243px] mb-10 lg:ml-60 ' alt="underline" />
        <div className='max-w-4xl text-center'>
          <p className='text-2xl font-semibold mb-4  max-w-4xl ' >Your Generousity</p>
          <p className='text-base mb-8 max-w-4xl  mt-2'>Your Generosity Thank you for your interest in our organization's mission to support education for everyone, particularly girls, and to assist flood victims by providing them with essential necessities such as food, shelter, and clothing.</p>


          <p className='text-base mb-8 max-w-4xl  mt-2'>Education is a powerful tool that can transform lives and communities. Unfortunately, many individuals, particularly girls, are not able to access education due to financial constraints or cultural barriers. Our organization believes that everyone should have the opportunity to receive an education, and we are committed to breaking down these barriers.</p>
        

          <p className='text-base mb-8 max-w-4xl  mt-2' >In addition to supporting education, we also recognize the importance of providing assistance to those impacted by natural disasters such as floods. We understand that when disasters strike, individuals and families are often left without the basic necessities of life, including food, shelter, and clothing. That's why our organization is dedicated to providing these essential items to those affected by floods, helping to ease their burden during this challenging time.</p>

          <p className='text-base mb-8 max-w-4xl  mt-2'>Your support of our organization will help us to continue our vital work, providing education and support to those in need. By supporting our cause, you will be making a meaningful impact in the lives of girls and flood victims, empowering them to build a better future for themselves and their communities.</p>

          <p className='text-base mb-8 max-w-4xl  mt-2'>Thank you for considering supporting our organization, and for helping us to make a positive difference in the world.</p>
          <p className='text-2xl font-semibold mb-4  max-w-4xl '>
          "Your donation has the power to transform lives - each dollar you contribute can make a significant difference to those in need."
          </p>
        </div>

       
        </div>
      
    </div>

    <div className='main bg-white'>
        <div className="sub items-center">

        <div className='relative z-0'>
                    <img src="./assets/support/sbg.svg" alt="support" className='z-10 ml-10'/>
                    <img src="./assets/support/sborder.svg" alt="support" className='absolute z-0 top-0 -left-10'/>
                    <img src="./assets/support/simg.png" alt="support" className='absolute z-0 top-0' />
                    
                </div>
        </div>
      
      </div>
    </>
  )
}

export default SupportHero
