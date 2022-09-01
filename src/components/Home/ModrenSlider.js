import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { image } from '../../constants';
import './slider.css'
// Default theme
import '@splidejs/splide/css';


// or other themes
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';


// or only core styles
import '@splidejs/splide/css/core';
var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
});

// splide.mount();

export default () => {
    return (
        <>
            <div className="App__home-slider">
                <div className="slider-home-heading">
                    <h3>Recommended Facilities</h3>
                    <p className='text'>Some of the top medical facilities in nigeria carefully recommended for you</p>
                </div>
                
                <Splide
                    options={{
                        updateOnMove: true,
                        
                        rewind: true,
                        gap: '1rem',
                        type: 'loop',
                        perPage: 3,
                        perMove: 1,
                        arrowPath : 'hidden',
                        autoplay : 'false',
                        breakpoints: {
                            815: {
                                perPage: 2,
                            },
                            570: {
                                perPage: 1,
                            },
                            
                    },
                  
                }}
                    aria-label="My Favorite Images"
                >
                    <SplideSlide>
                        <div className="">
                            <img src="./assets/img/slider1.png" width="100%" height="250px" alt="Image 1" />
                            <div className="slider-detail-box">
                                <div className="slider_detail-left">
                                    <h4>Vedic Lifecare Hospital</h4>
                                    <div className="reviews-slider">
                                        <img src="./assets/img/reviewsStars.png" alt="" />
                                        <p>(200)</p>
                                    </div>
                                </div>
                                <div className="slider-location">
                                    <p>Lekki, Lagos</p>
                                    <a href=""><span>Learn More</span></a>
                                </div>
                            </div>
                        </div>

                    </SplideSlide>
                    <SplideSlide>
                    <div className="">
                            <img src="./assets/img/cardBuilding2.png" width="100%" height="250px" alt="Image 1" />
                            <div className="slider-detail-box">
                                <div className="slider_detail-left">
                                    <h4>Evercare Hospital</h4>
                                    <div className="reviews-slider">
                                        <img src="./assets/img/reviewsStars.png" alt="" />
                                        <p>(200)</p>
                                    </div>
                                </div>
                                <div className="slider-location">
                                    <p>Lekki, Lagos</p>
                                    <a href=""><span>Learn More</span></a>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="">
                            <img src="./assets/img/Slider2.png" width="100%" height="250px" alt="Image 1" />
                            <div className="slider-detail-box">
                                <div className="slider_detail-left">
                                    <h4>Sameda Clinic</h4>
                                    <div className="reviews-slider">
                                        <img src="./assets/img/reviewsStars.png" alt="" />
                                        <p>(100)</p>
                                    </div>
                                </div>
                                <div className="slider-location">
                                    <p>Lagos, Nigeria</p>
                                    <a href=""><span>Learn More</span></a>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>

            </div>
        </>
    );
}