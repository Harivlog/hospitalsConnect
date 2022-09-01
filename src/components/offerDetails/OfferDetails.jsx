import React from 'react'
import { icons, image } from '../../constants'
import './offerDetail.css'
const OfferDetails = () => {
  return (
    <>
      <section>
        <div className="App__offerDetail">
          <h1>Offer Details</h1>
          <div className="offerDtl-img">
            <div className="oofer-img-wrapper"><img src={image.offerDetail} alt="" /></div>
          </div>
          <div className="offer-form-wrap">
            <div className="offerform-heading">
            <div className="offer-title block">
                <img src={image.tick} alt="" />
                <h3>Benefit 1</h3>
              </div>
              <div className="offer_input">
                <h3>Hospital Price</h3>

              </div>
              <div className="offer_input">
                <h3>HC Price</h3>

              </div>
            </div>
            <div className="offerform">
              <div className="offer-title">
                <img src={image.tick} alt="" />
                <h3>Benefit 1</h3>
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
            </div>
            <div className="offerform">
              <div className="offer-title">
                <img src={image.tick} alt="" />
                <h3>Benefit 1</h3>
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
            </div>
            <div className="offerform">
              <div className="offer-title">
                <img src={image.tick} alt="" />
                <h3>Benefit 1</h3>
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
            </div>
            <div className="offerform">
              <div className="offer-title">
                <img src={image.tick} alt="" />
                <h3>Benefit 1</h3>
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
            </div>
            <div className="offerform">
              <div className="offer-title">
                <img src={image.tick} alt="" />
                <h3>Benefit 1</h3>
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
            </div>
            <div className="offerform">
              <div className="offer-title">
                <img src={image.tick} alt="" />
                <h3>Benefit 1</h3>
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
            </div>
            <div className="offerform">
              <div className="offer-title">
                <img src={image.tick} alt="" />
                <h3>Benefit 1</h3>
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
            </div>
            <div className="offerform">
              <div className="offer-title">
                <img src={image.tick} alt="" />
                <h3>Benefit 1</h3>
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
            </div>
            <div className="offerform">
              <div className="offer-title">
                <img src={image.tick} alt="" />
                <h3>Benefit 1</h3>
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
              <div className="offer_input">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="offerDetail__btn ">
             <button>Get the Offer</button>
             <button>Book Appointment</button>

          </div>
        </div>
      </section>
    </>
  )
}

export default OfferDetails