import React from 'react'
import './AboutUs.css'
import { image, icons } from '../../constants'
import { facility, services,Doctors } from './AboutData'
import { Link } from 'react-router-dom'


const AboutUsComponnets = () => {
  return (
    <>
      <section className='App__about '>
        <div className="App__about-hero">
          <h1 className='xdd-heading'>Evercare Hospital</h1>
          <div className='App__about-hero-img'>
              <img loading="lazy" decoding="async"src={image.hospital} alt="hospital building" />
          </div>
          <div className="App__about-location">
              <img loading="lazy" decoding="async"src={icons.Vector} alt="" />
            <p className='text'>Plot 20, Lekki Phase 1 Gate, Lagos</p>
          </div>
          <div className="App__about-hero-btn">
            <a href="" className='text'>Message</a>
            <Link to="refralForm" className='text'>Refer to us</Link>
          </div>
        </div>
        <div className="App__about-content">
          <h2 className='heading'>About</h2>
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor amet eu, egestas mi. Pharetra, aenean ut facilisis fermentum cursus a volutpat. Elementum etiam felis semper eget. Curabitur tempus, quis id vestibulum sit ut pellentesque tincidunt est. Vel suspendisse integer non blandit. Lobortis proin quis tincidunt sed vitae. Amet arcu dolor sagittis vitae tellus malesuada. A scelerisque dolor nibh pharetra, egestas faucibus nunc faucibus.
          </p>
          <p className='text'>
            Urna, et egestas erat sit sed porta nisi. Sed volutpat, eget quis congue curabitur eget convallis. Cum penatibus pharetra, et ut vitae. Amet lectus elit rhoncus sed porta diam cras pellentesque. Ac natoque varius tellus blandit dignissim pellentesque. Facilisis ligula donec risus quis. Euismod vitae dolor ornare sed. Sed eget at porttitor orci ultrices nisl. Habitant purus pharetra aliquam morbi urna. Sed volutpat platea vel semper aenean volutpat consectetur cursus tincidunt. Pretium dolor sed ipsum suspendisse. Amet eget </p>

          <div className="About-content-facility-services">
            <h3 className='heading'>Facility</h3>
            <div className='app-flex about-facility'>
              {
                facility.map((item) => {
                  return (
                    <div key={item.id} className="app-flex about-facility-item">
                        <img loading="lazy" decoding="async"src={item.img} alt="" />
                      <p className='text'>{item.department}</p>
                      <span className='text'>{item.exist}</span>
                    </div>
                  )
                })
              }
            </div>
            <h3 className='heading'>Services</h3>
            <div className='app-flex about-services'>
              {
                services.map((item) => {
                  return (
                    <div key={item.id} className="app-flex about-services-item">

                      <p className='text'>{item.servicesName}</p>

                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="About-content-timeing">
            <h3 className='heading'>Working Time</h3>
            <p>Mon-Fri  24hours</p>
          </div>
          <div className="About-content-register">
              <div className="About__content-register-wrap app-flex">
                 <button> <Link to="hospitalReservation">Book Reservation with Evercare</Link></button>
              </div>
              <div className="About__content-doctors">
                <h3 className='heading'>Top Evercare Doctors</h3>

                <div className="app-flex doctors-item">
                  {
                    Doctors.map((item)=>{
                       return(
                         <Link key={item.id} to="doctorProfile">
                        <div className='doctors-item-card' >
                         <div className="">  <img loading="lazy" decoding="async"src={item.img} alt={`doctor${item.id}`} /></div>
                           <h3>{item.title}</h3>
                           <p className='text'>{item.content}</p>
                        </div>
                         </Link>
                       )
                    })
                  }
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsComponnets