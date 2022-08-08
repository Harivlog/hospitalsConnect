import React from 'react'
import SignUpHeaders from '../SignUpHeaders'
import '../index.css'
import './SignUpLaboratory.css'
const SignUpLaboratory = () => {
  return (
    <>
    <section className="App__laboratory App__sec">
      <SignUpHeaders/>
      <div className="App___form">
      <h1 className='xdd-heading'>Join 5000+ health facilities already With Us</h1>
              <h4>Sign Up for laboratories</h4>
              <form action="" className="form-wrapper">

              <div className="q-form-item q-form-top">
                  <div className="q-input-top">
                  <label className="text" htmlFor="">Name of laboratory</label>
                  <input className="text" type="text" />
                  </div>
                  <div className="q-input-top">
                  <label className="text" htmlFor="">Company REG NO</label>
                  <input className="text" type="number" />
                  </div>
                </div>
                <div className="q-form-page">
                  <label className="text" htmlFor="">YEARS OF EXPERIENCE</label>
                  <input className="text" type="number" />
                </div>
                <div className="q-form-page">
              
              <label className="text" htmlFor="">Services offered in your Lab? </label>
              <div className="checkBox-btn">
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Pathology</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Serology</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Histology</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Virology</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Bacteriology</label>
                </div>
                <div className="checkboxx">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Virology</label>
                </div>
                
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
                <label htmlFor="" className='text'>HOME SAMPLE COLLECTION?</label>
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
                <div className="q-form-page">
                  <label className="text" htmlFor="">Official Website</label>
                  <input className="text" type="text" />
                </div>
                <div className="q-form-page " >
                  <label className="text" htmlFor="">CONTACT PERSON (PREFERABLE IT)</label>
                  <input className="text" type="number" />
                </div>
                <div className="q-form-page email-lobor">
                  <label className="text" htmlFor="">EMAIL</label>
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

export default SignUpLaboratory