import React from 'react'
import { Link } from 'react-router-dom'

import image from '../../constants/image'
import { HeroHeading } from '../../container'
import './Expert.css'
import './ExpertData'
import { ExpertData } from './ExpertData'

const ExpertComponent = () => {
    return (
        <>
            <div className="App__Expert App__sec">
                <div className="App__expert-hero">
                    <h1 className='xdd-heading' >Search over <br /> 10,000 Local <br /> and <br />International<br /> Health Experts</h1>
                </div>

                <div className="App__Expert-filter-wrap">
                    <div className="App__Expert-filter">
                        <div className="App__filter-content">
                            <div className="filter-wrap">
                                  <img loading="lazy" decoding="async" src={image.search1} alt="search" />
                                <input className='text' type="text" placeholder='Search Doctors' />
                            </div>
                            <div className="filter-img app-flex">
                                <button>  <img loading="lazy" decoding="async" src={image.filter} alt="" /></button>
                            </div>
                        </div>
                        <div className="App__filter-card">
                            {ExpertData.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div className="card-img">
                                            <Link to="expertresult">
                                                  <img loading="lazy" decoding="async" src={item.img} alt={`expert${item.id}`} />
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertComponent