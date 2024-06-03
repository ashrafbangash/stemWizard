import FaqHero from '@/app/components/FaqsComponents/FaqHero'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'

const faqs = () => {
  return (
    <div>
      <Header bgColor={'bg-transparent'}/>
      <FaqHero/>
      <Footer/>
    </div>
  )
}

export default faqs
