import React from 'react'
import './QuestionPage.css'
import '../index.css'
import SignUpHeaders from '../SignUpHeaders'
const QuestionPage = () => {
  return (
    <>
      <section className="App__QuestionPage App__sec">
        <SignUpHeaders/>
        <div className="App___form">
           <div className="App__questionpage-form_wrappper">
              <h1 className='xdd-heading'>Join 5000+ health facilities already With Us</h1>
              <h4></h4>
            <div className="Select_staff app-flex">
            <select aria-label="Default select example" className=''>
                                        <option defaultValue>Questionnaire for doctor</option>
                                        <option value="1">Nurses</option>
                                        <option value="2">Radiologiest</option>
                                        <option value="3">Pharmicist</option>
                                        <option value="3">Loboratorist</option>

                                    </select>
            </div>
              <form action="" className="form-wrapper">

                <div className="q-form-item q-form-top">
                  <div className="q-input-top">
                  <label className="text" htmlFor="">Name of doctor</label>
                  <input className="text" type="text" />
                  </div>
                  <div className="q-input-top">
                  <label className="text" htmlFor="">LICENSE DATE</label>
                  <input className="text" type="date" />
                  </div>
                </div>
                <div className="q-form-page">
                  <label className="text" htmlFor="">YEARS OF EXPERIENCE</label>
                  <input className="text" type="number" />
                </div>
                <div className="q-form-page">
                  <label className="text" htmlFor="">SPECIALITY</label>
                  <input className="text" type="text" />
                </div>
                <div className="q-form-page">
                  <label className="text" htmlFor="">STUDENT ?</label>
                  <input className="text" type="text" />
                </div>
                <div className="q-form-page">
                  <label className="text" htmlFor="">CURRENT PLACE OF ASSIGNMENT </label>
                  <input className="text" type="text" />
                </div>
                <div className="q-form-page">
                  <label className="text" htmlFor="">PERSONAL DETAILS/ ABOUT YOU/ADDITIONAL DETAILS</label>
                  <input className="text" type="text" />
                </div>
                <div className="q-form-page">
                  <label className="text"  htmlFor="">RESEARCH/BLOGS/NEWS</label>
                  <input className="text" type="text" />
                </div>
                <div className="q-form-page q-btn">
                  <button type='submit' className='text'>Join Us</button>
                </div>
              </form>
           </div>
        </div>
      </section>
    </>
  )
}

export default QuestionPage