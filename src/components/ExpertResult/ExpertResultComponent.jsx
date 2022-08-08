import React from 'react'
import { Link } from 'react-router-dom'
import { image } from '../../constants'
import './ExpertResult.css'
import { ExpertResultdata } from './ExpertResultData'


const ExpertResultComponent = () => {
    return (
        <>
            <section className="App__expertResult App__sec">
                <div className="App__expert-hero">
                    <h1 className='xdd-heading' >Schedule an <br />Appointment<br />Qucik</h1>
                </div>
                <div className="expert-sort">
            <div className="sort-left">
                <button>Video Consult</button>
                <select defaultValue={'Availability'}>
                            <option value='Availability' disabled>Availability </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
            </div>
          <div className="sort-right">
            <label htmlFor="">Sort by</label>
            <select defaultValue={'Relevance'}>
                            <option value='Relevance' disabled>Relevance </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
          </div>
        </div>

                <div className="App__expertPage-wrapper">
                    <div className="App__booking-facilities-heading">
                        <h1 className='xdd-heading'>Top Nigerians Doctors</h1>
                        <div className="App__booking-facility-title">
                              <img loading="lazy" decoding="async" src={image.tick} alt="" />
                            <p>Book appointments with minimum wait-time & verified Doctors details</p>
                        </div>
                    </div>
                    <div className="App__doctor-detals">
                        {
                            ExpertResultdata.map((item , index)=>(
                                <div className='App__doctor-details-item ' key={index}>
                                    <div className="App__doctor-detail-img app-flex">
                                       <Link to="doctorProfile">   <img loading="lazy" decoding="async" src={item.doctorimg} alt={`doctor${index}`} /></Link>

                                    </div>
                                    <div className="App__doctor-detail-content-wrap ">
                                        <div className="App__doctor-detail-content">
                                           
                                            <Link to="doctorProfile"><h3 className='heading'>{item.title}</h3></Link>
                                            <p className='text'>{item.detail}</p>
                                            <p className='text'>{item.experience}</p>
                                        </div>
                                        <div className="App__doctor-detail-content-btn">
                                            <div className="app-flex">
                                                  <img loading="lazy" decoding="async" src={item.icon} alt="" />
                                                <a href="">Avaiable Today</a>

                                            </div>
                                            <button className='text link__btn'>
                                            <Link to="hospitalReservation" >
                                            {item.btn} </Link>
                                            </button>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExpertResultComponent