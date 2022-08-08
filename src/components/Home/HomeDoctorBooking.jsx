import React from 'react'
import { Link } from 'react-router-dom'
import { image } from '../../constants'
import { ApponitmentForm } from '../../container'
import './Home.css'
import { TopDoctors } from './HomeArticleData'


const HomeDoctorBooking = () => {
    return (
        <>
            <div className='Home__booking-doctors'>
                 {/* <ApponitmentForm title="With any Local or International Doctor"/>                 */}

                 <div className="Booking_appointement-form" style={{margin : '5rem 0'}}>
                    <h2 className='md-heading'>Book An Appointement</h2>
                    <h3>With any Local or International Doctor</h3>
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
                <div className="Home-top-doctors">
                    <h1 className='md-heading'>Top Rated Doctors</h1>
                    <div className="top-doctors-card">
                        {
                            TopDoctors.map((item, index) => (
                                <Link className='top-doc-card-link' key={index} to="doctorProfile">
                                <div  className="top-doc-card">
                                    <div className="top-doc-card-img">
                                        
                                        <div className="top-doc-para">
                                        <p>{item.available}</p>

                                        </div>
                                        <div className="top-doc-icons">
                                        <button>   <img loading="lazy" decoding="async" src={item.heart} alt="heart" /></button>
                                        <button>   <img loading="lazy" decoding="async" src={item.buy} alt="buy" /></button>
                                        </div>
                                    </div>
                                    <div className="top-doc-card-content">
                                        <div className="top-doc-heading">
                                            <h3 className=''>{item.title}</h3>
                                            <div className="rating">
                                                <span>   <img loading="lazy" decoding="async" src={item.star} alt="" /></span>
                                                <span>{item.rating}</span>

                                            </div>
                                        </div>
                                        <div className="top-doc-contact">
                                              <img loading="lazy" decoding="async" src={item.location} alt="location" />
                                            <p>{item.address}</p>
                                        </div>
                                        <div className="top-doc-contact">
                                              <img loading="lazy" decoding="async" src={item.phone} alt="location" />
                                            <p>{item.number}</p>
                                        </div>
                                        <div className="top-doc-contact">
                                              <img loading="lazy" decoding="async" src={item.at} alt="location" />
                                            <p>{item.email}</p>
                                        </div>

                                    </div>
                                </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeDoctorBooking