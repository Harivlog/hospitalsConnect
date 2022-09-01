import React from 'react'
import './Home.css'
import { image } from '../../constants'
import { Link } from 'react-router-dom'
const HomeDeal = () => {
    return (
        <>
     <div className="top_deal-wrap">
     <div className="top-deal ">
                <div className="deal-card">
                    <img src={image.deal} alt="deal" />
                </div>
                <div className="flex top-deal-content">

                    <div className="hot-deal-options">
                        <div className="wrapper">
                            <div className="static-txt">Check out AMAZING</div>
                            <ul className="dynamic-txts">
                                <li><span>Dialysis</span></li>
                                <li><span>Hospitals</span></li>
                                <li><span>Lab</span></li>
                                <li><span>Pharmacy</span></li>
                                <li><span>Radiology</span></li>
                              

                            </ul>
                        </div>
                        <h3 className="">Deals and Discounts just for you</h3>
                    </div>


                    <button><Link style={{color : '#ffffff'}} to="deals-offer"> Get Now </Link></button>

                    <div className="hot-card">
                        <img src={image.hotDeal} alt="" />
                    </div>
                </div>
            </div>
     </div>
        </>
    )
}

export default HomeDeal