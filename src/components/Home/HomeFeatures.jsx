import React from 'react'
import { image } from '../../constants'


const HomeFeatures = () => {
  return (
    <>
      <div className="Home__features">
        <h1 className='md-heading'>See our top featured facilities</h1>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
                <img loading="lazy" decoding="async" src={image.featurefacility} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img loading="lazy" decoding="async" src={image.facilityhero} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img loading="lazy" decoding="async" src={image.blog1} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default HomeFeatures