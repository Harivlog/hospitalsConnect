import React from 'react'
import { icons, svg } from '../../constants'
import {CgFacebook} from 'react-icons/cg'
import {IoLogoInstagram ,IoLogoGoogleplus,IoLogoTwitter} from 'react-icons/io'
import {GrLinkedinOption} from 'react-icons/gr'
import {AiFillApple} from 'react-icons/ai'
import './Footer.css'
import playstore from '../../assets/icons/playStore.svg'
import apple from '../../assets/icons/apple.svg'


const Footer = () => {
  return (
    <>
      <div className="app__footer">
        <div className="app__footer-heading app-grid-two-column">
          <div className="app__footer-heading-left">
            <h2>
              Get More<br/> Updates To <br/>  Subscribe US
            </h2>
          </div>
          <div className="app__footer-heading-right app-flex">
            <div className="app__footer-subscribe app-flex ">
                <img loading="lazy" decoding="async" src={icons.inbox} alt="inbox" />
              <input type="text" className='sm-text' placeholder={`Email Adress`} />
              <button className='sm-text'>Subsribe</button>
            </div>
          </div>
        </div>
        <div className="app__footer-wrap">
          <div className="app__footer-wrap-top app-grid-two-column">
            <div className="app__footer-wrap-left-define">
              <h3 className='heading'>HospitalSconnect</h3>
              <p className=''>HospitalsConnect is a listing directory platform connecting people with hospitals , laboratories and health care providers generally. </p>
            </div>
            <div className="app__footer-wrap-left-list">
              <h3 className='md-heading'>Quick Links </h3>
              <div className="app__footer-item-wrap">
                <ul className="footer-wrap-item">
                  <li><a href="" >  <img loading="lazy" decoding="async" src={svg.Arrow} alt="arrow" /> About Us</a></li>
                  <li><a href="" >  <img loading="lazy" decoding="async" src={svg.Arrow} alt="arrow" /> Our Pricing </a></li>
                  <li><a href="" >  <img loading="lazy" decoding="async" src={svg.Arrow} alt="arrow" /> Appointements</a></li>
                  <li><a href="" >  <img loading="lazy" decoding="async" src={svg.Arrow} alt="arrow" /> Privacy Policy</a></li>
                </ul>
                <ul className="footer-wrap-item">
                  <li><a href="" >  <img loading="lazy" decoding="async" src={svg.Arrow} alt="arrow" /> About Us</a></li>
                  <li><a href="" >  <img loading="lazy" decoding="async" src={svg.Arrow} alt="arrow" /> Our Pricing </a></li>
                  <li><a href="" >  <img loading="lazy" decoding="async" src={svg.Arrow} alt="arrow" /> Appointements</a></li>
                  <li><a href="" >  <img loading="lazy" decoding="async" src={svg.Arrow} alt="arrow" /> Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="app__footer-connect">

          <div className="app__footer-social-icons">
            <li  ><a href="" className='app-flex'><CgFacebook/></a></li>
             <li ><a href="" className='app-flex'><IoLogoTwitter/></a></li>
             <li ><a href="" className='app-flex'><IoLogoInstagram/></a></li>
             <li ><a href="" className='app-flex'><GrLinkedinOption/></a></li>
             <li ><a href="" className='app-flex'><IoLogoGoogleplus/></a></li>

          </div>
          <div className="flex social-btns">
  <a className="app-btn blu flex vert" href="http:apple.com">
    <img loading="lazy" decoding="async" src={apple} alt="" />
   
    <p>Available on the <br/> <span className="big-txt">App Store</span></p>
  </a>

  <a className="app-btn blu flex vert" href="http:google.com">
      <img loading="lazy" decoding="async" src={playstore} alt="" />
    <p>Get it on <br/> <span className="big-txt">Google Play</span></p>
  </a>
	

</div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer