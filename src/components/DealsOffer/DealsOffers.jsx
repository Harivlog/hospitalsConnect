
import React from 'react'
import { DealsData } from './DealsData'
import './DealsOffers.css'
import {icons, image} from "../../constants"
import { Link } from 'react-router-dom'
const DealsOffers = () => {
  return (
    <div className='ooffer-detail'>
        <div className="app__offer-deal-heading">
        <div className="message-offer">
            <img src={image.letter} alt="" />
            <p>Send Message</p>
        </div>
            <h1 className="">Deals & Offers</h1>
            <div className="offer-deal-search">
                <div className="off-deal-srh-box">
                    <label htmlFor="">Content</label>
                    <div className="input-offer-wrap">
                    <img src={icons.search} alt="" />
                    <input type="text" placeholder='search Deals'/>

                    </div>
                </div>
                <div className="off-deal-srh-box">
                    <label htmlFor="">Content</label>
                    <div className="input-offer-wrap">
                    <img src={icons.location} alt="" />
                    <input type="text" placeholder='Location'/>

                    </div>
                </div>
            </div>
        </div>
        <div className="App_cards_offers ">
            {
                DealsData.map((item,index)=> (
                    <div className="card__deals" key={index} id={`id${index + 1}`}>
                        <div className="bg-img
                        ">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="reviews__card" >
                            <img src={item.reviews} alt="" />
                            <h3>{item.title}</h3>
                        </div>
                        <div className="card_offer_btn">
                            <button><Link to="offerDetails" > {item.btn} </Link></button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default DealsOffers