import React from 'react'
import './SignUpHospital.css'
import '../index.css'
import SignUpHeaders from '../SignUpHeaders'
const SignUpHospital = () => {
  return (
    <>
      <section className="App__SignUpHospital App__sec">
        <SignUpHeaders />
        <div className="App___form">
          <h1 className='xdd-heading'>Join 5000+ health facilities already With Us</h1>
          <h4>Sign Up for hospital</h4>
          <form className="form-wrapper">
            <div className="q-form-item q-form-top">
              <div className="q-input-top">
                <label className="text" htmlFor="">Name of hospital</label>
                <input className="text" type="text" />
              </div>
              <div className="q-input-top">
                <label className="text" htmlFor="">Location of hospital</label>
                <input className="text" type="text" />
              </div>
            </div>


            <div className="beds-cont-input">
              <label htmlFor="">No of bed space available (indicate if they are private wards or semi private or general wards )</label>
              <div className="count-input-wrap">
                <div className="input-cont-box">
                  <input type="text" />
                  <label htmlFor="">PRIVATE WARD</label>
                </div>
                <div className="input-cont-box">
                  <input type="text" />
                  <label htmlFor="">SEMI PRIVATE</label>
                </div>
                <div className="input-cont-box">
                  <input type="text" />
                  <label htmlFor="">GENERAL WARD</label>
                </div>
              </div>
            </div>
            <div className="icu-wrap">
              <div className="icu-count">
                <div className="working-hours">
                  <label htmlFor="">Yes</label>
                  <input type="checkbox" />
                </div>
                <div className="working-hours">
                  <label htmlFor="">No</label>
                  <input type="checkbox" />
                </div>
                <div className="input-cont-box">
                  <input type="text" />
                  <label htmlFor="">SEMI PRIVATE</label>
                </div>
                <div className="input-cont-box">
                  <input type="text" />
                  <label htmlFor="">GENERAL WARD</label>
                </div>
              </div>
            </div>

            <div className="" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <label htmlFor="" className='text'>Is there a full time Anesthetic for the ICU ?
              </label>
              <div className="align-checkbox">

                <div className="working-hours">
                  <label htmlFor="">Yes</label>
                  <input type="checkbox" />
                </div>
                <div className="working-hours">
                  <label htmlFor="">No</label>
                  <input type="checkbox" />
                </div>
              </div>
            </div>


            <div className="">
              <label htmlFor="" className='text'>No of services rendered full time </label>
              <div className="checkBox-btn">

                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Pediatrics</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Internal Medicine</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Gynaecology</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Physiotherapy</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">GastroEnterology</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">GastroEnterology</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Cardiology</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Nephrology</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Orthopedic</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Psychology/Psychiatry</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">General Medicine</label>
                </div>
              </div>
            </div>
            <div className="worning-hours-wrap wrapper radiology-align working-hours-align">
              <label htmlFor="" className='text'>Radiology available</label>
              <div className="working-hours">
                <label htmlFor="">MRI </label>
                <input type="checkbox" />
              </div>
              <div className="working-hours">
                <label htmlFor=""> Xray</label>
                <input type="checkbox" />
              </div>
              <div className="working-hours">
                <label htmlFor="">Mammogram </label>
                <input type="checkbox" />
              </div>
              <div className="working-hours">
                <label htmlFor="">Mammogram</label>
                <input type="checkbox" />
              </div>
            </div>
            <div className="worning-hours-wrap working-hours-align">
              <label htmlFor="" className='text'>Surgeries?   </label>
              <div className="working-hours">
                <label htmlFor="">Yes</label>
                <input type="checkbox" />
              </div>
              <div className="working-hours">
                <label htmlFor="">No</label>
                <input type="checkbox" />
              </div>
            </div>
            <div className="inputGroups">
              <label htmlFor="" className='text'>Inhouse surgeries available</label>
              <div className="input-group-wrap">
                <div className="input-box">
                  <input type="text" />
                </div>
                <div className="input-box">
                  <input type="text" />
                </div><div className="input-box">
                  <input type="text" />
                </div><div className="input-box">
                  <input type="text" />
                </div><div className="input-box">
                  <input type="text" />
                </div><div className="input-box">
                  <input type="text" />
                </div><div className="input-box">
                  <input type="text" />
                </div><div className="input-box">
                  <input type="text" />
                </div><div className="input-box">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="">
              <label className="text" htmlFor="">Official email address and customer care contact</label>

              <div className="q-form-item q-form-top">
                <div className="q-input-top">

                  <input className="text" type="text" />
                </div>
                <div className="q-input-top align-hospital-input" >

                  <input className="text" type="text" />
                </div>
              </div>
            </div>
            <div className="q-form-page " >
              <label className="text" htmlFor="">Official Website;</label>
              <input className="text" type="number" />
            </div>
            <div className="q-form-page " >
              <label className="text" htmlFor="">Name of Medical Director</label>
              <input className="text" type="number" />
            </div>
            <div className="q-form-page email-lobor">
              <label className="text" htmlFor="">Date </label>
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

export default SignUpHospital