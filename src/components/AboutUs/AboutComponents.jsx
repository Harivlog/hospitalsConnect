import React from 'react'
import { Link, Outlet, Routes ,Route } from 'react-router-dom'

import { image } from '../../constants'
import Slider from '../../container/Slider/Slider'
import Resscue from '../Resscue/ResscueComponent'


import './About.css'
const AboutComponents = () => {
  return (
    <section className='App__About'>
       <div className="App__AboutPage-header App__sec">
                    <h1 className='xdd-heading'>Hospitals connect <br/>connects you to <br/>renowed world<br/> class Healthcare</h1>
                </div>
                <div className="About-mission app-flex">
                  <h1 className='xdd-heading'>Quality Healthcare Made Simple</h1>
                  <h2 className='md-heading'>Our Mission</h2>
                  <p className='text'>Hospitalsconnets intends on becoming the largest healthcare go to directory, for quick accessibility and flexibility with accurate information in Nigeria.</p>
                </div>
                <div className="About-opinion">
                  <div className="opinion-text">
                  <h2 className='md-heading'>Health is a habit</h2>
                  <p className="text"> It is the journey that takes you to new destinations every day with endless possibilities of life on the back of happiness, energy, and hope. Practo wants to make this journey easy for every Indian and help them live healthier and longer lives.</p>
                  </div>
                </div>

                <Slider/>
                <div className="About-doctor">
                  <h2 className='md-heading'>Each time a patient finds the right doctor, we build a healthier nation</h2>
                  <div className="About-doctor-card ">
                    <div className="doctor-card">
                      <div className="doc-card-img">
                        <img loading="lazy" decoding="async"
                        src={image.blog4} alt="" />
                      </div>
                      <div className="doc-card-content">
                        <p className='text'> Found the doctor who cured my wife’s brain tumor</p>
                        <a href=""></a>
                        <Link to="resscue">Read Full Story</Link>

                       
                      </div>
                      {/* <Outlet/> */}
                    </div>
                    <div className="doctor-card">
                      <div className="doc-card-img">
                        <img loading="lazy" decoding="async" src={image.blog5} alt="" />
                      </div>
                      <div className="doc-card-content">
                        <p className='text'>Found the doctor who cured my wife’s brain tumor</p>
                        <Link to="resscue">Read Full Story</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="About-approch">
                  <h1 className='md-heading'>Our approach to healthcare  </h1>
                  <p className="text">Providing high-quality, trusted, and accessible healthcare is our reason for being</p>
                  <div className="opproch-card">
                    <div className="app__card-box">
                      <img loading="lazy" decoding="async" src={image.men} alt="" />
                      <p className="text">Connect</p>
                    </div>
                    <div className="app__card-box">
                      <img loading="lazy" decoding="async" src={image.trust} alt="" />
                      <p className="text">trust</p>
                    </div>
                    <div className="app__card-box">
                      <img loading="lazy" decoding="async" src={image.transparency} alt="" />
                      <p className="text">Transparency</p>
                    </div>
                  </div>
                </div>
    </section>
  )
}

export default AboutComponents