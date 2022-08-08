import React from 'react'
import { image } from '../../constants'
import './Slider.css'
import { sliderData } from './Sliderdata'


const Slider = () => {
    return (
        <>
            <div className="Slider__body">
                <h1 className='md-heading'>What People Say About Us</h1>
                <div className="Slider-wrap">


                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card-box">
                                    <div className="card-imgg">
                                          <img loading="lazy" decoding="async" src={image.smith} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h2 className='md-heading'>Stiphan Smith</h2>
                                        <h4>Dermatologist</h4>
                                        <p>There are many variation of the passages of   In publishing and graphic design, Lorem ipsum is a  a document </p>
                                    </div>
                                    <div className="card-star">
                                          <img loading="lazy" decoding="async" src={image.star} alt="" />
                                    </div>
                                </div>
                                <div className="card-box">
                                    <div className="card-imgg">
                                          <img loading="lazy" decoding="async" src={image.smith} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h2 className='md-heading'>Stiphan Smith</h2>
                                        <h4>Dermatologist</h4>
                                        <p>There are many variation of the passages of   In publishing and graphic design, Lorem ipsum is a  a document </p>
                                    </div>
                                    <div className="card-star">
                                          <img loading="lazy" decoding="async" src={image.star} alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <div className="card-box">
                                    <div className="card-imgg">
                                          <img loading="lazy" decoding="async" src={image.smith} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h2 className='md-heading'>Stiphan Smith</h2>
                                        <h4>Dermatologist</h4>
                                        <p>There are many variation of the passages of   In publishing and graphic design, Lorem ipsum is a  a document </p>
                                    </div>
                                    <div className="card-star">
                                          <img loading="lazy" decoding="async" src={image.star} alt="" />
                                    </div>
                                </div>
                                <div className="card-box">
                                    <div className="card-imgg">
                                          <img loading="lazy" decoding="async" src={image.smith} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h2 className='md-heading'>Stiphan Smith</h2>
                                        <h4>Dermatologist</h4>
                                        <p>There are many variation of the passages of   In publishing and graphic design, Lorem ipsum is a  a document </p>
                                    </div>
                                    <div className="card-star">
                                          <img loading="lazy" decoding="async" src={image.star} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card-box">
                                    <div className="card-imgg">
                                          <img loading="lazy" decoding="async" src={image.smith} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h2 className='md-heading'>Stiphan Smith</h2>
                                        <h4>Dermatologist</h4>
                                        <p>There are many variation of the passages of   In publishing and graphic design, Lorem ipsum is a  a document </p>
                                    </div>
                                    <div className="card-star">
                                          <img loading="lazy" decoding="async" src={image.star} alt="" />
                                    </div>
                                </div>
                                <div className="card-box">
                                    <div className="card-imgg">
                                          <img loading="lazy" decoding="async" src={image.smith} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h2 className='md-heading'>Stiphan Smith</h2>
                                        <h4>Dermatologist</h4>
                                        <p>There are many variation of the passages of   In publishing and graphic design, Lorem ipsum is a  a document </p>
                                    </div>
                                    <div className="card-star">
                                          <img loading="lazy" decoding="async" src={image.star} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="Slider__btn">


                    {/* <button >
                  <img loading="lazy" decoding="async" src={image.leftArrow} alt="leftArrow" />
            </button>
            <button>  <img loading="lazy" decoding="async" src={image.rightArrow} alt="rightArrow" /></button> */}
                </div>
            </div>
        </>
    )
}

export default Slider