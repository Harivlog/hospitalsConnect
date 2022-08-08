import React from 'react'
import './SignUpPharmacies.css'
import '../index.css'
import SignUpHeaders from '../SignUpHeaders'
const SignUpPharmacies = () => {
  return (
    <>
      <section className="App__pharmacy App__sec">
        <SignUpHeaders/>
        <div className="App___form">
        <h1 className='xdd-heading'>Join 5000+ health facilities already With Us</h1>
              <h4>Signup for pharmacies</h4>
              <form action="" className="form-wrapper">
              <div className="q-form-item q-form-top">
                  <div className="q-input-top">
                  <label className="text" htmlFor="">Name of pharmacy</label>
                  <input className="text" type="text" />
                  </div>
                  <div className="q-input-top">
                  <label className="text" htmlFor="">Name of pharmacy</label>
                  <input className="text" type="text" />
                  </div>
                </div>
                <div className="q-form-page">
                  <label className="text" htmlFor="">Location of pharmacy</label>
                  <input className="text" type="number" />
                </div>
                <div className="worning-hours-wrap working-hours-align">
                <label htmlFor="" className='text'>WORKING HOURS</label>
                <div className="working-hours">
                  <label htmlFor="">24hours</label>
                  <input type="checkbox" />
                </div>
                <div className="working-hours">
                  <label htmlFor="">12hours</label>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="worning-hours-wrap working-hours-align">
                <label htmlFor="" className='text'>Home Delivery</label>
                <div className="working-hours">
                  <label htmlFor="">Yes</label>
                  <input type="checkbox" />
                </div>
                <div className="working-hours">
                  <label htmlFor="">No</label>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="q-form-page location-pharma">
                  <label className="text" htmlFor="">Location of pharmacy</label>
                  <input className="text" type="text" />
                </div>
              <div className="q-form-page q-btn">
                  <button type='submit' className='text'>Join Us</button>
                </div>
              </form>
        </div>
      </section>
    </>
  )
}

export default SignUpPharmacies