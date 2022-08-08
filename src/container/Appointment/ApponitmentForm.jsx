import React from 'react'
import '../../components/Home/Home.css'
import { image } from '../../constants'

const ApponitmentForm = ({title}) => {
  return (
    <div>

<div className="Booking_appointement-form" style={{margin : '5rem 0'}}>
                    <h2 className='md-heading'>Book An Appointement</h2>
                    <h3>{title}</h3>
                    <form action="" className="home-booking-form">
                        <div className="form-booking-item-wrap ">
                            <div className="form--booking">
                                <div className="form-booking-item">
                                    <select aria-label="Default select example">
                                        <option defaultValue>Choose Departement </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="form-booking-item">
                                    <select aria-label="Default select example">
                                        <option defaultValue>Choose Doctor</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            <div className="">
                                <div className="form--booking">
                                    <div className="form-booking-item">
                                          <img loading="lazy" decoding="async" src={image.vectorMan} alt='man' />
                                        <input type="text" placeholder='Enter Your Name' />
                                    </div>
                                    <div className="form-booking-item">
                                          <img loading="lazy" decoding="async" src={image.letter} alt="" />
                                        <input type="text" placeholder='Email Address' />
                                    </div>
                                </div>
                                <div className="form--booking ">
                                    <div className="form-booking-item ">
                                          <img loading="lazy" decoding="async" src={image.phone} alt="" />
                                        <input type="number" placeholder='Phone' />
                                    </div>
                                    <div className="form-booking-item form-booking-align">
                                        <input type="time" placeholder='Select Time' />
                                    </div>
                                    <div className="form-booking-item  form-booking-align">
                                        <input type="date" placeholder='Select Date' />
                                    </div>
                                </div>
                            </div>
                            <div className="form-home-btn app-flex">
                                <button className='text'>Book An Appointement Now</button>
                            </div>
                        </div>
                    </form>
                </div>
    </div>
  )
}

export default ApponitmentForm