import React from 'react'
import './DoctorProfile.css'
import { Link } from 'react-router-dom'
import { icons, image } from '../../constants'


const DoctorProfileComponent = () => {
  return (
    <>
      <section className="App__doctor">
        <div className="App__doctor-hero">
          <h1 className='xdd-heading'>Doctor Profile</h1>
          <div className="App__doctor-hero-content ">
            <div className="App__doctor-hero-content-img">
                <img loading="lazy" decoding="async" src={image.doctor} alt="doctor-profile" />
            </div>
            <div className="App__doctor-hero-content-detail ">
              <div className="App__doctor-hero-content-infoo">
                <h3 className='heading'>Dr. Deepak Devakar</h3>
                <p className='text'>Dermatologist, Cosmetologist,<br /> Pediatric Dermatologist, <br />Dermatosurgeon, Hair Transplant Surgeon,</p>
              </div>
              <div className="App__hero-content-heart">
                  <img loading="lazy" decoding="async" src={icons.heart} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="App__doctor-para">
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor amet eu, egestas mi. Pharetra, aenean ut facilisis fermentum cursus a volutpat. Elementum etiam felis semper eget. Curabitur tempus, quis id vestibulum sit ut pellentesque tincidunt est. Vel suspendisse integer non blandit. Lobortis proin quis tincidunt sed vitae. Amet arcu dolor sagittis vitae tellus malesuada. A scelerisque dolor nibh pharetra, egestas faucibus nunc faucibus.

          </p>
          <p className='text'>
            Urna, et egestas erat sit sed porta nisi. Sed volutpat, eget quis congue curabitur eget convallis. Cum penatibus pharetra, et ut vitae. Amet lectus elit rhoncus sed porta diam cras pellentesque. Ac natoque varius tellus blandit dignissim pellentesque. Facilisis ligula
          </p>

        </div>
        <div className="app__doctor-timing">
          <h3 className='heading'>Working Time</h3>
          <p>Mon-Fri 10:00 am - 09:00 pm</p>
        </div>
        <div className="app__doctor-btn">
          <button><Link className="text" to="research">Research works</Link></button>
          <button><Link className="text" to="hospitalReservation">Book Appointement</Link></button>

        </div>
      </section>
    </>
  )
}

export default DoctorProfileComponent