import React from 'react'
import { useState } from 'react'
import { icons } from '../../constants'
import './PatientsDetails.css'
const age = ['-10', '+10', '+20', '+30', '+40', '+50', '+60']
const countryCallCode = ['+880', '+881', '+882', '+883', '+884', '+885', '+886', '+887',]
const PatientsDetails = () => {
    const [check, setCheck] = useState(true)
    const [unCheck, setUnCheck] = useState(false)
    const handleGenderToggle = (toggle)=>{
        if(toggle == 'male'){
            setCheck(!check)
            setUnCheck(false)
        }
        else{
            setUnCheck(!unCheck)
            setCheck(false)

        }
    }
    return (
        <div className='patient-detail-box'>
            <h2 className='patient-detail-heading'>Patient Details</h2>
            <div className="patient-detail-boxing">
                <div className="patient-box-label">
                    <img src={icons.person} alt="user" />
                    <h2 htmlFor="">Name</h2>
                </div>
                <h3>Masum Ahmed</h3>
            </div>
            <div className="patient-age-container">
                <div className="patient-age">
                    <img src={icons.calender} alt="calender" />
                    <h2>Select your age range or type</h2>
                </div>
                <div className="age-slector">
                    {
                        age.map((items, index) => (
                            <div className="age-box" key={index}><p>{items}</p></div>
                        ))
                    }
                </div>
                <div className="patient-phone-box">
                    <div className="patient-phone">
                        <img src={icons.phone} alt="phone" />
                        <h2>Phone number</h2>
                    </div>
                    <div className="selct-code-box">
                        <select name="" id="">
                            {
                                countryCallCode.map((items, index) => (
                                    <option key={index} value="">{items}</option>
                                ))
                            }

                        </select>
                        <input type="number" placeholder='1785 325 320' />
                    </div>
                </div>
                <div className="">
                    <div className="patient-box-label">
                        <img src={icons.doublePerson} height="22" width="23" alt="user" />
                        <h2 htmlFor="">Gender</h2>
                    </div>
                    <div className="gender-box">
                        <div className="gender-flex">
                            {
                                check ? <img src={icons.check} alt="check"onClick={()=>handleGenderToggle('male')} /> : <img src={icons.uncheck} alt="uncheck" onClick={()=>handleGenderToggle('male')}  />
                            }
                            
                            <p>Male</p></div>
                        <div className="gender-flex">
                        {
                                unCheck ? <img src={icons.check} alt="check" onClick={()=>handleGenderToggle('female')} /> : <img src={icons.uncheck} alt="uncheck" onClick={()=>handleGenderToggle('female')}  />
                            }
                            <p>Female</p></div>
                    </div>
                </div>
                <div className="problems-box">
                    <h3>Write your problem</h3>
                    <textarea name="" id=""  cols="30" rows="10" placeholder='I am a cardio patient .Feel sick last two weeks.I need to talk about cardio problem.'></textarea>
                </div>
                <div className="btn-box">
                <button className='btn-patient'>Continue</button>

                </div>
            </div>



        </div>
    )
}

export default PatientsDetails