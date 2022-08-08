import React from 'react'
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
import { Footer } from './container'

const App = () => {
  return (
    <>
      <div className='app'>

        <Routes>
          <Route path='/' element={<Layout />}>


            <Route path='/' >

              <Route index element={<Home />} />
              <Route path="doctorProfile"  >
                <Route index element={<DoctorProfile />} />
                <Route path="hospitalReservation" element={<HospitalReservation />} />
                <Route path="research" element={<Research />} />

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

        {/* <Footer /> */}

      </div>
    </>
  )
}

export default App