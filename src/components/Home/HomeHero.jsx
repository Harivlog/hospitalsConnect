import React from 'react'
import { icons, image } from '../../constants'
import { heroData } from '../../container/SearchComponent/SearchData'
const HomeHero = () => {
    return (

        <div className='App_hero'>
            <div className="App-hero-left">
                <div className="hero-left-wrap">
                    <h1 className='xdd-heading' >Find Best<br />
                        Medical Facilities in<br />
                        Nigeria in a Simple<br />
                        Search
                    </h1>
                    <div className="music">
                        <img src={image.music} alt="" />
                    </div>
                </div>
                <div className="location-hero">
                    <img src={icons.Vector2x} alt="" />
                    <a href=''>Ifako, Lagos</a>
                </div>
            </div>
            <div className="hero-form-box">
                <h2 >Find what you
                    <br />need</h2>
                <div className="hero-form">
                    <div className="hero-form-item">
                        <label htmlFor="" >What are you Looking for?</label>
                        <div className="hero-form-item-input">
                            <input type="text" placeholder='try “ICU Lagos”' />
                            <img src={icons.search} alt="" />
                        </div>
                        <div className="hero-form-item-input">
                            <input type="text" placeholder='try “Lagos”' />
                            <img src={icons.location} alt="" />
                        </div>
                    </div>
                    <div className="hero-form-item">
                        <label htmlFor="">Facilitiy Search</label>
                        <div className="">
                            <div className="hero__section">
                                <select aria-label="Default select example">
                                    <option defaultValue>Laboratory </option>
                                    <option value="1">Lab</option>
                                    <option value="2">Radiology</option>
                                    <option value="3">Hospital</option>
                                    <option value="3">Pharmacy</option>
                                    <option value="3">Dylasis</option>

                                </select>
                            </div>
                            <div className="search__tags-hero">
                                {
                                    heroData.map((item, index) => (
                                        <button key={index} className='tags-card-hero '>
                                            <p className='text'>{item.title}</p>
                                            <img loading="lazy" decoding="async" src={item.img} alt="tags-close" />
                                        </button>
                                    ))
                                }
                            </div>
                            <div className="search-facalty">
                                <button>Search</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default HomeHero