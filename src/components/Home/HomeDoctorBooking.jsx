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



                <div className="Home-top-doctors">
                    <h1 className='md-heading'>Featured Hospital Offers</h1>
                    <div className="offer_second-heading">
                        <h3 className=''>Best Deals from Hospitals </h3>
                        <p className='text'>Find Hospital Packages that fit your needs without breaking the bank</p>
                    </div>
                    <div className="top-doctors-card">
                        {
                            TopDoctors.map((item, index) => (
                                <Link className='top-doc-card-link' key={index} to="doctorProfile">
                                    <div className="top-doc-card">
                                        <div className="top-doc-card-img">

                                            <div className="top-doc-para">
                                                <p>{item.available}</p>

                                            </div>
                                            <div className="top-doc-icons">
                                                <button>   <img loading="lazy" decoding="async" src={item.heart} alt="heart" /></button>
                                                <button>   <img loading="lazy" decoding="async" src={item.buy} alt="buy" /></button>
                                                <button>   <img loading="lazy" decoding="async" src={item.eyes} alt="buy" /></button>
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
                                            <div className="offer_detail-card">
                                                <h3>{item.sndTitle}</h3>
                                                <p>{item.dec}</p>
                                                <div className="dnld_wrap">
                                                    <img loading="lazy" decoding="async" src={item.download} alt="" />
                                                    <p>{item.sale}</p>
                                                </div>
                                                <div className="dolrs_wrap">
                                                    <span>{item.dollar}</span>
                                                    <span>{item.dollarsnd}</span>
                                                </div>
                                                <div className="offer_btn-card">
                                                    <button>
                                                        {item.learn}
                                                        <img loading="lazy" decoding="async" src={item.arrow} alt="" />
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="offers_video-wrap">
                        <div className="video-wrap-left">
                        <div className="line"></div>
                        <h2 className=''>The Best Reference</h2>
                        <p>Problems trying to resolve the conflict between
                            the two major realms of Classical physics:
                            Newtonian mechanics </p>
                        <div className="video-wrap-btn">
                            <button>
                                Learn More
                                <img src="./assets/img/arrow.png" alt="" />
                            </button>
                        </div>
                        </div>
                        <div className="video-wrap-right">
                            <img src="./assets/img/videoCard.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeDoctorBooking