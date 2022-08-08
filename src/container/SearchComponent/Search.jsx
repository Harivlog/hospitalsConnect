import React from 'react'
import { image ,icons } from '../../constants'
import './Search.css'
import { HomeData } from './SearchData'


const Search = () => {
    return (
        <>
            <div className='App__search'>
                <div className="App__search-container">
                <div className="App__searchTop">
                    <div className="search-item">
                          <img loading="lazy" decoding="async" src={icons.topsearch} alt="search" />
                        <input type="text" placeholder='What are you looking for ?' />
                    </div>
                    <div className="search-item">
                          <img loading="lazy" decoding="async" src={icons.inputLocation} alt="location" />
                        <select defaultValue={'Default select example'}>
                            <option value='Default select example' disabled>Select a location </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="search-btn">
                        <button>  <img loading="lazy" decoding="async" src={image.search} alt="" /></button>
                    </div>
                </div>
                <div className="App__search-bottom">
                   <h3>You may be looking for</h3>
                   <div className="search__tags">
                    {
                        HomeData.map((item,index)=> (
                            <button key={index} className='tags-card app-flex'>
                                <p>{item.title}</p>
                                  <img loading="lazy" decoding="async" src={item.img} alt="tags-close" />
                            </button>
                        ))
                    }
                   </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Search