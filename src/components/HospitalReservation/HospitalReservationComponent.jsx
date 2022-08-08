import React from 'react'
import './HospitalReservation.css'
const HospitalReservationComponent = () => {
  return (
    <section className='App__reservation'>
        <form action="" className="reservation__form">
            <div className="reservation-form-item">
                <input type="text"  placeholder='First name'/>
            </div>
            <div className="reservation-form-item">
                <input type="text"  placeholder='Last name'/>
            </div>
            <div className="reservation-form-item">
                <input type="email"  placeholder='Email Address '/>
            </div>
            <div className="reservation-form-item">
                <input type="text"  placeholder='Complaint'/>
            </div>
            <div className="reservation-form-item">
                <input type="time" name="" id="" placeholder='Time' />
            </div>
            <div className="reservation-form-item">
               <button className='reservation-btn'>
                Schedule
               </button>
            </div>
        </form>
    </section>
  )
}

export default HospitalReservationComponent