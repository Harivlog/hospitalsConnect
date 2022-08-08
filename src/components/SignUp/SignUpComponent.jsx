import React from 'react'
import './SignUp.css'
import { CgFacebook } from 'react-icons/cg'
import { IoLogoInstagram, IoLogoGoogleplus, IoLogoTwitter , } from 'react-icons/io'
import {MdOutlinePersonOutline} from 'react-icons/md'
import {BiLock} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SignUpComponent = () => {
  return (
    <>
      <section className="App__signIn App__sec">
        <div className="App__signUp-hero">
          <h1 className='xdd-heading' >The Future of <br /> Healthcare is Here.<br /> Join Us
          </h1>
        </div>

        <div className="App__signUp-wrapper">
          <div className="App__signup-wrap">
            <div className="App__signUp-heading">
              <div className="heading-content">
                <h1 className='xdd-heading'>Creat New Account . </h1>
                <h3 className='mdd-heading'><span>Create your account with</span> <span>your social network</span></h3>
              </div>
              <ul className="heading-social-media">
                <li><a href="" className='text app-flex'><IoLogoTwitter /> Twitter</a></li>
                <li><a href="" className='text app-flex'><CgFacebook /> Facebook</a></li>
                <li><a href="" className='text app-flex'><IoLogoGoogleplus /> Google</a></li>

              </ul>
              <div className="App__signUp-form-lines">
                  <span className='first-line'></span>
                  <span className='span-or text'>Or</span>
                  <span className='last-line'></span>

              </div>
            </div>
            <div className="App__signup-form">
              <div className="signUp-form">
              <div className="varify-form--item">
                <label className='heading' htmlFor="">First Name</label>
                <div className="varify-form signup-align-input">
                  <MdOutlinePersonOutline/>
                <input className='text' type="text" placeholder={` First Name`}/>
                </div>
               </div>
               <div className="varify-form--item">
                <label className='heading' htmlFor="">Last Name</label>
                <div className="varify-form signup-align-input">
                <MdOutlinePersonOutline/>

                <input className='text' type="text" placeholder={` Last Name`}/>
                </div>
               </div>
                <div className="varify-form--item">
                <label className='heading' htmlFor="">User Name</label>
                <div className="varify-form signup-align-input">

                <MdOutlinePersonOutline/>

                <input className='text' type="text" placeholder='User Name'/>
                </div>

               </div>
                <div className="varify-form--item">
                <label className='heading' htmlFor=""> Email </label>
                
                <div className="varify-form signup-align-input">
                <AiOutlineMail/>

                <input className='text' type="email" placeholder={`Email`}/>
                </div>
                
               </div>
                <div className="varify-form--item">
                <label className='heading' htmlFor="">Password</label>
                <div className="varify-form signup-align-input">
                <BiLock/>

                <input className='text' type="text" placeholder='Password'/>
                </div>
               
               </div> 
               <div className="varify-form--item">
                <label className='heading' htmlFor="">Confirm Password</label>
                <div className="varify-form signup-align-input">
                 <BiLock/>
                <input className='text' type="text" placeholder='Confirm Password'/>
                </div>
               
               </div> 
               <div className="varify-form--item signup-checkbox checkbox">
                <input  type="checkbox" name="" id="" />
                <label htmlFor="" >I Agree To HC's <span>Privacy Policy</span></label>

               </div>
               <div className="varify-form--item checkbox signup-checkbox">
                <input  type="checkbox" name="" id="" />
                <label htmlFor="">I Agree To HC's <span>Terms Of Services</span></label>
               </div>
               <div className="varify-form--item varify-form-btn">
                 <button form='submit'><Link to="varification">Register</Link></button>
               </div>
               <div className="varify-form--item checkbox signup-checkbox">
                
                <label htmlFor="">Already have an account?</label>
                <Link to="login"> Login</Link>
               </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default SignUpComponent