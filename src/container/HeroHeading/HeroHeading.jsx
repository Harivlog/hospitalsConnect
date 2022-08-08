import React from 'react'
import './Heroheading.css'
const HeroHeading = ({text , url}) => {
  console.log(url)
  return (
    <>
     <div className="hero-img"> <div style={{backgroundImage : `url("${url})`}} className="App__expert-hero">
            <h1 className='xdd-heading' >{text}</h1>
        </div>
        </div>
    </>
  )
}

export default HeroHeading