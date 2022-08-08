import React from 'react'
import { Link } from 'react-router-dom'
import './varification.css'
const VarificationComp = () => {
  return (
    <>
       <section className="App__varify App__sec">
       <div className="App__varify-hero">
            <h1 className='xdd-heading' >Verify your
 <br/>account
             </h1>
        </div>
             <div className="App__varify-form app-flex">
              <form action="" className='varify-formm'>
                <div className="varify__form-heading">
                  <h1 className='xdd-heading'>Log in</h1>
                </div>
                <div className="varif__form-item">
                   <p className='text'>We have sent you an OTP on</p>

                   <div className="varify-otp-wrap">
                   <div className="varify-otp-input">
                   <label htmlFor="">OTP</label>
                    <input type="text" className='text' placeholder='Please Enter the 6 Degit OTP'/>
                   </div>
                    <p className='text'>Still not received OTP?  Get via callResend OTP</p>
                    <button type='submit'><Link style={{color : '#fff'}} to="varificationComplete">Login</Link></button>
                   </div>
                </div>
              </form>
             </div>
       </section>
    </>
  )
}

export default VarificationComp