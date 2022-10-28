import React from 'react'
import "./AppointmentBooking.css"
import { dayTime, AppointmentService } from './ApptmntData'
import { Link } from 'react-router-dom'
const AppointmentBooking = () => (
    <>
        <div className="Apponitment__bking">
            <div className="Appoint__bking__heading">
                <h2>Appointment Booking</h2>
            </div>
            <div className="Appointment__schduling">
                <h4>09 January, Saturday</h4>
                <div className="Appointment__schduling_time">
                    <button><img src={"../assets/img/sun.png"} alt="" /> <span>Morning</span></button>
                    <button><img src={"../assets/img/moon.png"} alt="" /> <span>Evening</span> </button>

                </div>
            </div>
            <div className="booking_time-wrap">
                <div className="booking_time">
                    {
                        dayTime.map((item, index) => (
                            <div className="booking_time-item" key={index}>
                                <span>{item.time1}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
                <div className="fee_info-wrap">
                    <h4>Fees Information</h4>
                    <div className="fee__info-source-wrap">
                        {
                            AppointmentService.map((item, index) => (
                                <div className="fee-info-item" key={index}>
                                    <div className="fee__info-left">
                                        <div className="fee__info-left-img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="fee-info-detail">
                                            <h5>{item.title}</h5>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="fee__info-right">
                                        <p>
                                        {item.fee}

                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="fee_btn">
                        
                            <Link to="patientsDetail">Continue</Link>
                        </div>
                    </div>
                </div>
        </div>
    </>
)

export default AppointmentBooking