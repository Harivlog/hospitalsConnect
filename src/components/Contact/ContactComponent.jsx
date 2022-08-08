import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { icons, image } from '../../constants'
import { MdPhone } from 'react-icons/md'
import {  useJsApiLoader } from '@react-google-maps/api';
import { MapContainer, TileLayer, useMap , Marker ,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
const ContactComponent = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    return (
        <>
            <section className='App__contact App__sec'>
                <div className="App__contact-header">
                    <h1 className='xdd-heading'>We are closer <br />than you<br /> thought</h1>
                </div>
                <div className="App__contact-wrapp">
                    <div className="contact-form">
                        <h1 className='xdd-heading'>Contact Us</h1>

                        <div className="contact-form-container">
                            <div className="form-heading">
                                <h2>Get in touch</h2>
                            </div>
                            <form action="" className="form-content">
                                <div className='contactForm-item'>
                                    <label htmlFor="">Your Name</label>
                                    <div className="varify-form contact-input-form">
                                        <MdOutlinePersonOutline />
                                        <input className='text' type="text" placeholder={` Name`} />
                                    </div>
                                </div>
                                <div className='contactForm-item'>
                                    <label htmlFor="">Email</label>
                                    <div className="varify-form  contact-input-form">
                                        <AiOutlineMail />
                                        <input className='text' type="email" placeholder={` email`} />
                                    </div>
                                </div>
                                <div className='contactForm-item'>
                                    <label htmlFor="">Message</label>
                                    <textarea className='text' name="" id="" cols="30" rows="10"></textarea>
                                </div>
                                <div className='contactForm-item'>
                                    <button type='submit' className=' text'>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="contact-office contact-form-container">
                        <h1 className='md-heading'>Our Office</h1>
                          <img loading="lazy" decoding="async" className='machine-img' src={image.machine} alt="" />
                        <p className="text">
                            Hospitalsconnect  is a  limited liability company registered under the Nigerian Companies  and Allied Matters Act at inception the company will be a private limited company.
                        </p>
                        <p className='text'>
                            Hospitalsconnect is  a start up company launched with intends to provide, undertake, promote, maintain or engage in all kinds of data collection and compilation, collection of links, and publication of accurate and updated data to help healthcare service seekers find resourceful health information. To provide access to prompt, qualitative and value-added medical care for people using healthcare data management and other multi-disciplinary techniques.
                        </p>
                        <div className="contact-info ">
                              <img loading="lazy" decoding="async" src={icons.Vector} alt="" />
                            <p>The waterside 5 Admiralty Road,
                                Off Admiralty way, Lekki phase 1, Lagos

                            </p>
                        </div>
                        <div className="contact-info">
                              <img loading="lazy" decoding="async" src={image.letter} alt="" />
                            <p>Info@hospitalsconnect.co</p>
                        </div>
                        <div className="contact-info">
                              <img loading="lazy" decoding="async" src={image.phone} alt="" />
                            <p> (+234) 70 604 60934

                            </p>
                        </div>
                        <div className="contact-info">
                              <img loading="lazy" decoding="async" src={image.chorome} alt="" />
                            <p>www.hospitalsconnect.com</p>
                        </div>
                    </div>
                    <div className="contact-map">
                    <MapContainer  style={{ height: "450px", width: "100%" }}  center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      Hospital Location <br />
    </Popup>
  </Marker>
</MapContainer>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactComponent