import EventsHero from '@/app/components/EventsComponent/EventHero'
import IntlComp from '@/app/components/EventsComponent/IntlComp'
import Header from '@/app/components/Header'
import React from 'react'

const Events = () => {
  return (
    <div>
      <Header bgColor={'bg-gray'}/>
      <EventsHero/>
      <IntlComp/>
    </div>
  )
}

export default Events
