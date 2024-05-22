import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import OurGallery from '@/app/components/PressComponents/OurGallery'
import PressHero from '@/app/components/PressComponents/PressHero'
import React from 'react'

const Press = () => {
  return (
    <div>
      <Header bgColor={'bg-redish'}/>
      <PressHero/>
      <OurGallery/>
      <Footer/>
    </div>
  )
}

export default Press
