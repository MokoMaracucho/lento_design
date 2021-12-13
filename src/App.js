import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from './Components/Registration/index'
import Home from './html/home_page/Home'
import {
  SomeQuestions,
  ComplexInformations,
  ResidenceInformations,
  FloorplanInformations,
  RoomsInformations,
  LivingPlacesInformations,
  InformationsSent,
  Images
} from './Pages/LivingPlaceRegistration/Registration/index'

import './App.scss'

const App = () => {

  console.log(window.innerHeight)

  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path='/home' element={<Home />} />

            <Route path='/living_place_registration/some_questions' element={<SomeQuestions />} />
            <Route path='/living_place_registration/complex_informations' element={<ComplexInformations />} />
            <Route path='/living_place_registration/residence_informations' element={<ResidenceInformations />} />
            <Route path='/living_place_registration/floorplan_informations' element={<FloorplanInformations />} />
            <Route path='/living_place_registration/rooms_informations' element={<RoomsInformations />} />
            <Route path='/living_place_registration/living_places_informations' element={<LivingPlacesInformations />} />
            <Route path='/living_place_registration/informations_sent' element={<InformationsSent />} />
            <Route path='/living_place_registration/images' element={<Images />} />

            {/* <Route path='/living_place_registration/some_questions' element={<LivingPlaceRegistrationSomeQuestions />} />
            <Route path='/living_place_registration/complex_informations' element={<LivingPlaceRegistrationComplexInformations />} />
            <Route path='/living_place_registration/residence_informations' element={<LivingPlaceRegistrationResidenceInformations />} />
            <Route path='/living_place_registration/floorplan_informations' element={<LivingPlaceRegistrationFloorplanInformations />} />
            <Route path='/living_place_registration/rooms_informations' element={<LivingPlaceRegistrationRoomsInformations />} />
            <Route path='/living_place_registration/living_places_informations' element={<LivingPlaceRegistrationLivingPlacesInformations />} /> */}
          </Routes>
        </Router>
    </>
  )
}

export default App
