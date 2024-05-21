import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import StartupCategory from '@/app/components/StemStartupComponents/StartupCategory'
import StartupHero from '@/app/components/StemStartupComponents/StartupHero'
import StartupSchool from '@/app/components/StemStartupComponents/StartupSchool'
import WhyStartup from '@/app/components/StemStartupComponents/WhyStartup'
import React from 'react'

const StemStartup = () => {
  return (
    <div>
      
      <Header bgColor={'bg-white'} />
      <StartupHero/>
      <StartupSchool/>
      <WhyStartup/>
      <StartupCategory/>
      <Footer/>
    </div>
  )
}

export default StemStartup
