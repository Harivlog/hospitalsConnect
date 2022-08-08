import React from 'react'
import './FacilityJoined.css'
import '../index.css'
import SignUpHeaders from '../SignUpHeaders'
import { data, experience } from './FacilityJoineddata'

const FacilityJoined = () => {
  return (
    <>
      <section className="SignUpjoinedFacility App__sec">
        <SignUpHeaders />
        <div className="App__joined-count">
          {
            data.map((item, index) => {
              return (
                <div key={index} className="joined-count-wrap">
                  <h3 className='md-heading'>{item.title}</h3>
                  <p className='text'>{item.content}</p>
                </div>
              )
            })
          }
        </div>
        <div className="joined-experience">
          <h2 className='heading'>Here’s how  health facilities  are delivering an exceptional visit experience:</h2>
          <div className="joined-experience-data">
            {
              experience.map((item, index) => {
                return (
                  <div key={index} className="experience-box">
                    <div className="experience-img app-flex">
                        <img loading="lazy" decoding="async" src={item.img} alt="" />

                    </div>
                    <p className='sm-text'>{item.title}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="joined-content-container">
          <div className="wait-time-wrapper">
            <p className='text'>
              15 minute wait time
              Patient wait time is one of the most critical aspects of overall patient satisfaction. Data shows that a low wait time is very important to a quality patient experience. With Prime, boost the efficiency of your clinic / hospital by seamlessly managing your patients flow, and optimize patient satisfaction by giving them greater control over their time.

            </p>
            <div className="btn-wrap">
              <li className='joined-btn'><a href="" className='text'>Join Us</a></li>
            </div>

          </div>
          <div className="joined-booking-wrapper">
            <h2 className='xdd-heading'>
              24x7 Instant Booking
            </h2>
            <p className="text">
              Online booking is available 24 hours a day, seven days a week, even when your clinic / hospital is closed. Patients may not always schedule appointments during office hours and with the option of 24x7 Instant booking, they no longer have to! Multiple surveys show, patients prefer the convenience of self booking as the experience is consistent, and predictable every time!
              Additionally, by passing on this control to patients, your staff could spend less time over the phone and more time over other administrative tasks.
            </p>
            <div className="btn-wrap booking-btn">
              <li className='joined-btn'><a href="" className='text'>Join Us</a></li>
            </div>
          </div>

          <div className="joined-detail second-gradient-color">
             <h2 className='xdd-heading'>Your data has only one owner. You.</h2>
             <p className='text'>
             Only you have control over your data. Neither Practo employees nor any third-party can access your information for any purpose except as authorized by you. This includes all data safely stored in your private dashboard.
             </p>
          </div>
        </div>
        <div className="joined-form-wrapper">
           <h1 className='md-heading'>Join 5000+ health facilities already With Us</h1>
           <form action="" className="joined-form">
            <div className="form-item">
              <div className="form-item-box">
                <label htmlFor="">Choose Category*</label>
                <input  className='text' type="text" />
              </div>
              <div className="form-item-box">
                <label htmlFor="">Name*</label>
                <input className='text'  type="text" />
              </div>
            </div>
            <div className="form-item">
              <div className="form-item-box">
                <label htmlFor="">Mobile number*</label>
                <input className='text'  type="text" />
              </div>
              <div className="form-item-box">
                <label htmlFor="">City*</label>
                <input  className='text'  type="text" />
              </div>
            </div>
            <div className="form-item-btn">
              <button className='text' type='submit'>Joined-us</button>
            </div>
           </form>
        </div>
      </section>
    </>
  )
}

export default FacilityJoined