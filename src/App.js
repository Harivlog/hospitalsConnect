import React, { useEffect } from 'react'
import './App.css'
import Error from './components/Error/Error'

import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home'
import Booking from './Views/Booking'
import Contact from './Views/Contact'
import ExpertPage from './Views/ExpertPage'
import ExpertResult from './Views/ExpertResult'

import About from './Views/About'
import EvercareHospital from './Views/AboutUs'

import Blogs from './Views/Blogs'
import Layout from './components/Layout/Layout'
import Resscue from './Views/Resscue'
import DoctorProfile from './Views/DoctorProfile'
import RefralForm from './Views/RefralForm'
import HospitalReservation from './Views/HospitalReservation'
import Research from './Views/Research'
import FacilityQuestion from './Views/FacilityQuestion'
import SignUpForm from './Views/SignUpForm'
import SignInForm from './Views/SignInForm'
import Varification from './Views/Varification'
import VarificationComplete from './Views/VarificationComplete'
import RadiologuySignUp from './Views/RadiologuySignUp'
import LaboratorySignUp from './Views/LaboratorySignUp'
import PharmaciesSignUp from './Views/PharmaciesSignUp'
import HospitalSignUp from './Views/HospitalSignUp'


import OfferDetails from './Views/offerDeails'
import AppointmentBooking from './Views/AppiointBooking'
import DealsOffer from './Views/dealsOffer'
import PatientsDetail from './Views/PatientsDetail'



const App = () => {


  return (
    <>
      <div className='app'>

        <Routes>
          <Route path='/' element={<Layout />}>


            <Route path='/' >

              <Route path='/'>
                <Route index element={<Home />} />
                <Route path="deals-offer"  >
                  <Route index element={<DealsOffer />} />
                  <Route path="offerDetails" element={<OfferDetails />} />

                </Route>
              </Route>
              <Route path="doctorProfile"  >
                <Route index element={<DoctorProfile />} />
                <Route path="hospitalReservation" element={<HospitalReservation />} />
                <Route path="research" element={<Research />} />
                <Route path="AppiontmentBooking"  >
                    <Route index element={<AppointmentBooking />} />
                    <Route path="patientsDetail" element={<PatientsDetail />} />
                  </Route>

              </Route>


            </Route>


            <Route path="facilities" >
              <Route index element={<Booking />} />

              <Route path="evercareHospital"  >

                <Route index element={<EvercareHospital />} />
                <Route path="refralForm" element={<RefralForm />} />
                <Route path="hospitalReservation" element={<HospitalReservation />} />

                <Route path="doctorProfile"  >
                  <Route index element={<DoctorProfile />} />
                  <Route path="hospitalReservation" element={<HospitalReservation />} />
                  <Route path="research" element={<Research />} />
                  <Route path="AppiontmentBooking"  >
                    <Route index element={<AppointmentBooking />} />
                    <Route path="patientsDetail" element={<PatientsDetail />} />
                  </Route>
                </Route>

              </Route>

            </Route>
            <Route path="experts"  >
              <Route index element={<ExpertPage />} />
              <Route path="expertresult"  >
                <Route index element={<ExpertResult />} />
                <Route path="doctorProfile"  >
                  <Route index element={<DoctorProfile />} />
                  <Route path="hospitalReservation" element={<HospitalReservation />} />
                  <Route path="research" element={<Research />} />
                  <Route path="AppiontmentBooking"  >
                    <Route index element={<AppointmentBooking />} />
                    <Route path="patientsDetail" element={<PatientsDetail />} />
                  </Route>

                </Route>
                <Route path="hospitalReservation" element={<HospitalReservation />} />

              </Route>

            </Route>
            <Route path="about" >
              <Route index element={<About />} />

              <Route path="resscue" element={<Resscue />} />
            </Route>

            <Route path="blog"  >
              <Route index element={<Blogs />} />
              <Route path="resscue" element={<Resscue />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="facilityquestion" element={<FacilityQuestion />} />
            <Route path="signUp"  >
              <Route index element={<SignUpForm />} />

              <Route path="login" element={<SignInForm />} />
              <Route path="varification" >
                <Route index element={<Varification />} />

                <Route path="varificationComplete" element={<VarificationComplete />} />

              </Route>

            </Route>
            <Route path="RadiologuySignUp" element={<RadiologuySignUp />} />
            <Route path="LaboratorySignUp" element={<LaboratorySignUp />} />
            <Route path="PharmaciesSignUp" element={<PharmaciesSignUp />} />
            <Route path="HospitalSignUp" element={<HospitalSignUp />} />


            <Route path="*" element={<Error />} />
          </Route>

        </Routes>
        {/* <DealsOffers/> */}
        {/* <OfferDetails/> */}
        {/* <AppointmentBooking/> */}
        {/* <Footer /> */}

      </div>
    </>
  )
}

export default App