import React from 'react'
import './RefralForm.css'
import {MdOutlinePersonOutline} from 'react-icons/md' 
const RefralFormComponent = () => {
  return (
    <>
      <section className='App__refralForm'>
         <div className="Refral-form-heading">
          <h2 className='md-heading'>Referal Form</h2>
         </div>
         <form action="" className="Refral-form">
            <div className="Refral-form-item refral-form-top">
              <div className="big-refral-input">
                <label  htmlFor="">Name</label>
                <div className="form-input-wrap">
                <MdOutlinePersonOutline />
                  <input  placeholder='Your Name' />
                </div>

              </div>
              <div className="form-item-input">
                <label htmlFor="">Age</label>
                <input type="number" />
              </div>
              <div className="form-item-input">
                <label htmlFor="">Weight</label>
                <input type="number" />
              </div>
            </div>
            <div className="refral-form-second-box">
             <div className="second-form-item">
              <label htmlFor="">Pulse rate</label>
              <input type="number" />
             </div>
             <div className="second-form-item">
              <label htmlFor="">Blood Pressure</label>
              <input type="number" />
             </div>
             <div className="second-form-item">
              <label htmlFor="">Resp. No</label>
              <input type="number" />
             </div>
            </div>
            <div className="last-form-refral">
            <div className="last-form-item">
                <label htmlFor="">Referred From</label>
                <input type="text" />
              </div>
              <div className="last-form-item">
                <label htmlFor="">Referred To</label>
                <input type="text" />
              </div>
              <div className="last-form-item refral-form-textarea">
                <label htmlFor="">Message</label>
                <textarea name="" id="" ></textarea>
              </div>
            </div>
            <div className="refral-form-btn">
              <button className='text'>Send Message</button>
            </div>
         </form>
      </section>
    
    </>
  )
}

export default RefralFormComponent