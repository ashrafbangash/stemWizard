import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import AfterSchoolHero from '@/app/components/OurProgramComponents/AfterSchoolHero'
import AfterSchoolOnline from '@/app/components/OurProgramComponents/AfterSchoolOnline'
import React from 'react'

const AfterSchoolProgram = () => {
  return (
    <div>
      <Header bgColor={'bg-gray'}/>
      <AfterSchoolHero/>
      <AfterSchoolOnline/>
      <Footer/>
    </div>
  )
}

export default AfterSchoolProgram
