import React from 'react'
import { Search, Slider } from '../../container'
import './Home.css'
import HomeArticle from './HomeArticle'
import HomeDoctorBooking from './HomeDoctorBooking'
import HomeFeatures from './HomeFeatures'
import HomeHeader from './HomeHeader'

const HomeComponents = () => {
  return (
    <section className='App__home App__sec'>
        <HomeHeader/>
        <Search/>
        <HomeFeatures/>
        <HomeDoctorBooking/>
        <Slider/>
        <HomeArticle/>
    </section>
  )
}

export default HomeComponents