import React from 'react'
import { Search, Slider } from '../../container'
import './Home.css'
import HomeArticle from './HomeArticle'
import HomeDeal from './HomeDeal'
import HomeDoctorBooking from './HomeDoctorBooking'
import HomeFeatures from './HomeFeatures'
import HomeHeader from './HomeHeader'
import HomeHero from './HomeHero'
import ModernSlider from "./ModrenSlider"
const HomeComponents = () => {
  return (
    <section className='App__home App__sec'>
        <HomeHero/>
        {/* <HomeHeader/> */}
         <HomeDeal/>
         <ModernSlider/>
        {/* <Search/> */}
        {/* <HomeFeatures/> */}
        <HomeDoctorBooking/>
        <Slider/>
        <HomeArticle/>
    </section>
  )
}

export default HomeComponents