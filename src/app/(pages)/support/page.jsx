import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import SupportHero from '@/app/components/SupportComponents/SupportHero'
import React from 'react'

const Support = () => {
  return (
    <div>
      <Header bgColor={'bg-white lg:bg-gray'}/>
      <SupportHero/>
      <Footer/>
    </div>
  )
}

export default Support
