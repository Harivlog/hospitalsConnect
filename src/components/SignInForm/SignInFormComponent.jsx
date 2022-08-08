import React from 'react'
import { SignUpHeading } from '../../container'
import './SignInForm.css'
import {MdOutlinePersonOutline} from 'react-icons/md'
import {BiLock} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {Link , useNavigate} from 'react-router-dom'
const SignInFormComponent = () => {
    const navigate = useNavigate()
    const goBack  = ( ) => {
        navigate(-1)
    }
    return (
        <>
            <div className="A__signInForm App__sec">

                <div className="App__signInForm-hero">
                    <h1 className='xdd-heading' >The Future of Healthcare is Here. Join Us
                    </h1>
                </div>

                <div className="App__signInForm-form">
                    <div className="App__signInform-wrap">

                <SignUpHeading/>
                <div className="App__signup-form">
              <div className="signUp-form">
              <div className="varify-form--item">
                <label className='heading' htmlFor="">First Name</label>
                <div className="varify-form signup-align-input">
                  <AiOutlineMail/>
                <input className='text' type="email" placeholder={` email`}/>
                </div>
               </div>
               
               
                <div className="varify-form--item">
                <label className='heading' htmlFor="">Password</label>
                <div className="varify-form signup-align-input ">
                <BiLock/>

                <input className='text' type="text" placeholder='Password'/>
                </div>
               
               </div> 
               <div className="varify-form--item form-password">
                <a href="">Forgot password?</a>
               </div>
               <div className="varify-form--item">
                <button className='text'>LogIn</button>
               </div>
               <div className="varify-form--item checkbox signup-checkbox">
               
                <label htmlFor="">Not a member?<span> <a onClick={()=> goBack()}   className='link' >Register</a> </span></label>
               </div>
              </div>
            </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SignInFormComponent