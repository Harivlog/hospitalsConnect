import React from 'react'
import './SignUpRadiology.css'
import SignUpHeaders from '../SignUpHeaders'
const SignUpRadiology = () => {
  return (
    <>
      <section className="App__radiology App__sec">
        <SignUpHeaders />

        <div className="App___form radiology-form">
          <h1 className='xdd-heading'>Join 5000+ health facilities already With Us</h1>
          <h4>Signup for radiology</h4>
          <form action="" className="radiology form-wrapper">

            <div className="q-form-item q-form-top">
              <div className="q-input-top">
                <label className="text" htmlFor="">Name of radiology</label>
                <input className="text" type="text" />
              </div>
              <div className="q-input-top">
                <label className="text" htmlFor="">Company REG NO</label>
                <input className="text" type="text" />
              </div>
            </div>
            <div className="q-form-page">
              <label className="text" htmlFor="">Location of radiology</label>
              <input className="text" type="number" />
            </div>
            <div className="q-form-page">
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
              <label className="text" htmlFor="">Services Offered</label>
              <div className="checkBox-btn">
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">MRI</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">CT Scan </label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">PET/CT</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Ultrasound</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">X-Ray</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Arthrogram</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Myelogram</label>
                </div>
              </div>

            </div>
            <div className="q-form-page">
              <label className="text" htmlFor="">Please write other services not listed above</label>
              <input className="text" type="number" />
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

export default SignUpRadiology