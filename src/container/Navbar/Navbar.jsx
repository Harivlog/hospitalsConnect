import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MENU } from './constants'
import { icons } from '../../constants'


import './Navbar.css'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [dropdownToggle, setdropdownToggle] = useState(false)
  const [dropdownMini, setdropdownMini] = useState(false)

  const dropdownHundler = () => {
    setdropdownMini(!dropdownMini)
    setdropdownToggle(!dropdownToggle)
    setToggle(!toggle)
    console.log(toggle)
  }

  return (
    <>
      <nav className="app__navbar ">
        <div className="app__navbar-logo app-flex">
          <img loading="lazy" decoding="async" src={icons.logo} alt="" />
        </div>
        <ul className="app__navbar-items app-flex">

          {
            MENU.map((item, index) => (
              <li className='text' key={index}><Link to={item.path}>{item.title}</Link></li>

            ))
          }



        </ul>
        <div className="app__navbar-menu">
          <img loading="lazy" decoding="async" onClick={() => setToggle(!toggle)} src={icons.hamburger} alt="" />

          {toggle ?
            <>
              <div className='app__navbar-menu-wrap'>

                <ul className="app__navbar-menu_items ">

                  {
                    MENU.map((item, index) => (
                      <li className='text' key={index}><Link onClick={() => setToggle(!toggle)} to={item.path}>{item.title}</Link></li>

                    ))
                  }



                </ul>


                <div className="app__navbar-menu_butoons ">
                  <button className='app-flex nav-btn emergency-btn'><a href="tel:+YOURNUMBERHERE'">Emergency</a>
                    <img loading="lazy" decoding="async" src={icons.emergency} alt="" />
                  </button>

                  <div className="dropdown">
                    <button className="nav-btn " type="button" onClick={()=> setdropdownToggle(!dropdownToggle)} >
                      SignUp
                      <img loading="lazy" decoding="async" src={icons.profile} alt="" />

                    </button>
                    {
                      dropdownToggle ?
                        <div className="dropdownMenuButton" aria-labelledby="dropdownMenuButton" >
                          <li onClick={dropdownHundler}>
                            <Link to="signUp" className="dropdown-item" >User</Link></li>
                          <li onClick={ dropdownHundler}>
                            <Link to="facilityquestion" className="dropdown-item" >Experts</Link></li>
                          <li >

                            <div className="dropdownMini">
                              <button className="nav-btn " type="button" onClick={() => setdropdownMini(!dropdownMini)} >
                                Facilities


                              </button>
                              {
                                dropdownMini ?
                                  <div className="dropdownMenuMini" aria-labelledby="dropdownMenuButton" >
                                    <li onClick={ dropdownHundler}>
                                      <Link to="RadiologuySignUp" className="dropdown-item" >Radiology</Link></li>
                                    <li onClick={dropdownHundler}>
                                      <Link to="LaboratorySignUp" className="dropdown-item" >Laboratories</Link></li>
                                    <li onClick={dropdownHundler}>
                                      <Link to="PharmaciesSignUp" className="dropdown-item" >Pharmacies</Link></li>
                                    <li onClick={dropdownHundler}>
                                      <Link to="HospitalSignUp" className="dropdown-item" >Hospitals</Link></li>
                                  </div>
                                  : ""
                              }
                            </div>

                          </li>
                        </div>
                        : ""
                    }
                  </div>
                </div>

              </div>
            </>
            : ''
          }
        </div>
        <div className="app__navbar-butoons app-flex">
          <button className='app-flex nav-btn emergency-btn'><a href='tel:+YOURNUMBERHERE'>Emergency</a>
            <img loading="lazy" decoding="async" src={icons.emergency} alt="" />
          </button>

          <div className="dropdown">
            <button className="nav-btn " type="button" onClick={() => setdropdownToggle(!dropdownToggle)} >
              SignUp
              <img loading="lazy" decoding="async" src={icons.profile} alt="" />

            </button>
            {
              dropdownToggle ?
                <div className="dropdownMenuButton" aria-labelledby="dropdownMenuButton" >
                  <li onClick={() => setdropdownToggle(!dropdownToggle)}>
                    <Link to="signUp" className="dropdown-item" >User</Link></li>
                  <li onClick={() => setdropdownToggle(!dropdownToggle)}>
                    <Link to="facilityquestion" className="dropdown-item" >Experts</Link></li>
                  <li onClick={() => dropdownHundler}>

                    <div className="dropdownMini">
                      <button className="nav-btn " type="button" onClick={() => setdropdownMini(!dropdownMini)} >
                        Facilities


                      </button>
                      {
                        dropdownMini ?
                          <div className="dropdownMenuMini" aria-labelledby="dropdownMenuButton" >
                            <li onClick={dropdownHundler}>
                              <Link to="RadiologuySignUp" className="dropdown-item" >Radiology</Link></li>
                            <li onClick={dropdownHundler}>
                              <Link to="LaboratorySignUp" className="dropdown-item" >Laboratories</Link></li>
                            <li onClick={dropdownHundler}>
                              <Link to="PharmaciesSignUp" className="dropdown-item" >Pharmacies</Link></li>
                            <li onClick={dropdownHundler}>
                              <Link to="HospitalSignUp" className="dropdown-item" >Hospitals</Link></li>
                          </div>
                          : ""
                      }
                    </div>

                  </li>
                </div>
                : ""
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar