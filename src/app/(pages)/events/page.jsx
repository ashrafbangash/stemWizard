import EventsHero from '@/app/components/EventsComponent/EventHero'
import IntlComp from '@/app/components/EventsComponent/IntlComp'
import JoinEvents from '@/app/components/EventsComponent/JoinEvent'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'

const Events = () => {
  return (
    <div>
      <Header bgColor={'bg-gray'}/>
      <EventsHero/>
      <IntlComp/>
      <JoinEvents/>
      <Footer bgColor={'bg-redish'}/>
    </div>
  )
}

export default Events
