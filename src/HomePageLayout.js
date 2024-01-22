import React from 'react'
import LandingPage from './LandingPage'
import AboutUs from './AboutUs'

function HomePageLayout() {
  return (
    <div className='mx-5 md:mx-20'>
      <LandingPage/>
      <AboutUs/>
    </div>
  )
}

export default HomePageLayout
