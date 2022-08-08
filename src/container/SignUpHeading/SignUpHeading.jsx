import React from 'react'
import { IoLogoInstagram, IoLogoGoogleplus, IoLogoTwitter , } from 'react-icons/io'

import { CgFacebook } from 'react-icons/cg'
import './SignUpHeading.css'


const SignUpHeading = () => {
  return (
    <>
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
    </>
  )
}

export default SignUpHeading