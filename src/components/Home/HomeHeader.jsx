import React from 'react'
import './Home.css'


const HomeHeader = () => {
  return (
    <>
      <div className="home-header">

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item img-one active">
    <h1 className="xdd-heading">
                Welcome to<br/>
                Your Healthcare <br/> Hub
              </h1>
    </div>
    <div className="carousel-item ">
       <div className="img-two">
       <h1 className="xdd-heading">
                Welcome to<br/>
                Your Healthcare<br/> Hub
              </h1>
       </div>
    </div>
    <div className="carousel-item ">
     <div className="img-three">
     <h1 className="xdd-heading">
                Welcome to<br/>
                Your Healthcare <br/> Hub
              </h1>
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
    </>
  )
}

export default HomeHeader