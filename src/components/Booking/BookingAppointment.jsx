import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../constants/image'
import { Search } from '../../container'

import './BookingAppointment.css'
import { BookingData } from './BookingData'

const BookingAppointment = () => {
  return (
    <>
      <section className="App__booking App__sec">
        <div className="App__booking-hero">

          <h1 className='xdd-heading'>
            Search over 2,000<br /> Hospitals, Lab,Pharmacies<br /> and other Healthcare <br />Failities
          </h1>
        </div>
        <Search/>
        <div className="App__booking-facilities">
          <div className="App__booking-facilities-heading">
            <h1 className='xdd-heading'>200 Facilities available</h1>
            <div className="App__booking-facility-title">  <img loading="lazy" decoding="async" src={image.tick} alt="" />
              <p className=''>Book appointments with minimum wait-time & verified Facility details</p>
            </div>
          </div>
          <div className="App__booking-facilities-card-wrap">
             {
              BookingData.map((item)=>{
                return (
                   <div key={item.id} className="booking-facility-card">
                    <div className="booking-facility-card-img">
                        <img loading="lazy" decoding="async" src={item.img} alt={item.title} />

                    </div>
                    <div className="booking-facility-card-content">
                      <div className="booking-facility-card-content-heading">
                      <h3 className='heading'>{item.title}</h3>
                      <p className='text'>{item.content}</p>
                      </div>
                      <div className="booking-facility-btn">
                        <img src={item.reviews} alt="reviews" />
                        <button><Link to={"evercareHospital"} className='text'>{item.btn}</Link> </button>
                      </div>
                    </div>
                   </div>
                )
              })
             }
          </div>
        </div>
      </section>
    </>
  )
}

export default BookingAppointment