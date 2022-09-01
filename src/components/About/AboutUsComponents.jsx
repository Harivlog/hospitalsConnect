import React from 'react'
import './AboutUs.css'
import { image, icons } from '../../constants'
import { facility, services,Doctors , AccordionData} from './AboutData'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Accordion from './Accordion'
const accordionData = [
  {
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
  },
  {
    title: 'Section 2',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`
  },
  {
    title: 'Section 3',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`
  },
  ,
  {
    title: 'Section 3',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`
  }
];
const AboutUsComponnets = () => {
  const [handleActive, setHandleActive] = useState(false)
  let [data ,setData] = useState({})
  const CommingSoon = () =>{
    alert("This page is Comming Soon")
  }
   const handleAccordion = (event) =>{
     let obObject = {}

     setHandleActive(!handleActive)
     var x = event.target.id;
     
     switch (x) {
       case 'Facility':
         obObject = {title : "haris"}
         setData(data => ({
              title : AccordionData[0].title,
              content :  AccordionData[0].content
             }))
             console.log(data)
             break;
         case 'services':
          setData(data => ({
            title : AccordionData[1].title,
            content :  AccordionData[1].content
           }))
             console.log('Threads');
             break;
         case 'pricing':
          setData(data => ({
            title : AccordionData[2].title,
            content :  AccordionData[2].content
           }))
             console.log('Comments');
             break;
             case 'offers':
              setData(data => ({
                title : AccordionData[3].title ,
                content :  AccordionData[3].content
               }))
              console.log('Comments');
              break;
         default:
             return false;
     }

  }
  return (
    <>
      <section className='App__about '>
        <div className="App__about-hero">
          <h1 className='xdd-heading'>Evercare Hospital</h1>
          <div className='App__about-hero-img'>
              <img loading="lazy" decoding="async"src={image.hospital} alt="hospital building" />
          </div>
          <div className="App__about-location">
              <img loading="lazy" decoding="async"src={icons.Vector} alt="" />
            <p className='text'>Plot 20, Lekki Phase 1 Gate, Lagos</p>
          </div>
          <div className="App__about-hero-btn">
            <a href="" className='text'>Message</a>
            <Link to="refralForm" className='text'>Refer to us</Link>
          </div>
        </div>
        <div className="App__about-content">
          <h2 className='heading'>About</h2>
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor amet eu, egestas mi. Pharetra, aenean ut facilisis fermentum cursus a volutpat. Elementum etiam felis semper eget. Curabitur tempus, quis id vestibulum sit ut pellentesque tincidunt est. Vel suspendisse integer non blandit. Lobortis proin quis tincidunt sed vitae. Amet arcu dolor sagittis vitae tellus malesuada. A scelerisque dolor nibh pharetra, egestas faucibus nunc faucibus.
          </p>
          <p className='text'>
            Urna, et egestas erat sit sed porta nisi. Sed volutpat, eget quis congue curabitur eget convallis. Cum penatibus pharetra, et ut vitae. Amet lectus elit rhoncus sed porta diam cras pellentesque. Ac natoque varius tellus blandit dignissim pellentesque. Facilisis ligula donec risus quis. Euismod vitae dolor ornare sed. Sed eget at porttitor orci ultrices nisl. Habitant purus pharetra aliquam morbi urna. Sed volutpat platea vel semper aenean volutpat consectetur cursus tincidunt. Pretium dolor sed ipsum suspendisse. Amet eget </p>
           
           <div className="accordion_about">
            {/* <div className="accordion__button">
              <button id='Facility' style={{background :  (e => e.target.id ? '#FF0000': '')}} onClick={e => handleAccordion(e)}>Facility Features</button>
              <button id='services' style={{background :  (e => e == e.target.id ? '#FF0000': '')}} onClick={e => handleAccordion(e)}>Services</button>
              <button id='pricing' style={{background :  (e => e.target.id ? '#FF0000': '')}} onClick={e => handleAccordion(e)}>Pricing</button>
              <button id='offers' style={{background :  (e => e.target.id ? '#FF0000': '')}} onClick={e => handleAccordion(e)}>Offers</button>

            </div> */}
            {/* <div className="accordion-content" style={{display :  (handleActive ? 'block': 'none'), top :  (handleActive ? '30px': '0')}}>
              <h3>{data.title}</h3>
              <p className='text'>{data.content}</p>
            </div> */}
                {/* <ul className="accordion">
      {accordionData.map(({ heading, content }) => (
        <Accordion heading={heading} content={content} />
      ))}
    </ul> */}
              <div className='accordion_wrap'>
              <Accordion
        title="Facility Features"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Accordion
        title="Services?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
        <Accordion
        title="Pricing"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Accordion
        title="Offers"
        content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
   
        "
      />
    </div>
           </div>
          <div className="About-content-facility-services">
            <h3 className='heading'>Facility</h3>
            <div className='app-flex about-facility'>
              {
                facility.map((item) => {
                  return (
                    <div key={item.id} className="app-flex about-facility-item">
                        <img loading="lazy" decoding="async"src={item.img} alt="" />
                      <p className='text'>{item.department}</p>
                      <span className='text'>{item.exist}</span>
                    </div>
                  )
                })
              }
            </div>
            <h3 className='heading'>Services</h3>
            <div className='app-flex about-services'>
              {
                services.map((item) => {
                  return (
                    <div key={item.id} className="app-flex about-services-item">

                      <p className='text'>{item.servicesName}</p>

                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="About-content-timeing">
            <h3 className='heading'>Working Time</h3>
            <p>Mon-Fri  24hours</p>
          </div>
          <div className="About-content-register">
              <div className="About__content-register-wrap app-flex">
                 <button> <Link to="hospitalReservation">Book Reservation with Evercare</Link></button>
                 <button onClick={CommingSoon} style={{color : '#fff'}}>Book Bed Space</button>
 
              </div>
              <div className="About__content-doctors">
                <h3 className='heading'>Top Evercare Doctors</h3>

                <div className="app-flex doctors-item">
                  {
                    Doctors.map((item)=>{
                       return(
                         <Link key={item.id} to="doctorProfile">
                        <div className='doctors-item-card' >
                         <div className="">  <img loading="lazy" decoding="async"src={item.img} alt={`doctor${item.id}`} /></div>
                           <h3>{item.title}</h3>
                           <p className='text'>{item.content}</p>
                        </div>
                         </Link>
                       )
                    })
                  }
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsComponnets