import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { useSnapshot } from 'valtio'

import LivingPlaceRegistrationTimelineState from '../Context/LivingPlaceRegistrationTimelineState'

import '../Styles/Components/LivingPlaceRegistrationTimeline.scss'

const LivingPlaceRegistrationTimeline = () => {

    const LivingPlaceRegistrationTimelineSnap = useSnapshot(LivingPlaceRegistrationTimelineState)

    const [step, setStep] = useState(2)

    useEffect(() => {
        setStep(LivingPlaceRegistrationTimelineState.step)
    }, [LivingPlaceRegistrationTimelineSnap.step])

    const navigate = useNavigate()

    const goSomeQuestions = () => {
        if(LivingPlaceRegistrationTimelineState.maxStep >= 1) {
            LivingPlaceRegistrationTimelineState.step = 1
            navigate('/living_place_registration/some_questions')
        }
    }

    const goComplexInformations = () => {
        if(LivingPlaceRegistrationTimelineState.maxStep >= 2) {
            LivingPlaceRegistrationTimelineState.step = 2
            navigate('/living_place_registration/complex_informations')
        }
    }

    const goResidenceInformations = () => {
        if(LivingPlaceRegistrationTimelineState.maxStep >= 3) {
            LivingPlaceRegistrationTimelineState.step = 3
            navigate('/living_place_registration/residence_informations')
        }
    }

    const goStep4 = () => {
        if(LivingPlaceRegistrationTimelineState.maxStep >= 4) {
            LivingPlaceRegistrationTimelineState.step = 4
            navigate('/living_place_registration/floorplan_informations')
        }
    }

    const goStep5 = () => {
        if(LivingPlaceRegistrationTimelineState.maxStep >= 5) {
            LivingPlaceRegistrationTimelineState.step = 5
            navigate('/living_place_registration/rooms_informations')
        }
    }

    const goStep6 = () => {
        if(LivingPlaceRegistrationTimelineState.maxStep >= 6) {
            LivingPlaceRegistrationTimelineState.step = 6
            navigate('/living_place_registration/living_places_informations')
        }
    }

    return (
        <>
            <div className='formSteps__div'>
                <div className='formStep__div'>
                    <div
                        className='circle__formStep__div white_COLOR'
                        style={{ backgroundColor: step >= 1 ? '#5398D4' : '#5398D477' }}
                        onClick={goSomeQuestions}
                    >1</div>
                    <div
                        className='title__formStep__div grey_COLOR'
                        onClick={goSomeQuestions}
                    >Some questions</div>
                </div>

                {/* <div className='line__formStep__div'></div> */}

                <div className='formStep__div'>
                    <div
                        className='circle__formStep__div white_COLOR'
                        style={{ backgroundColor: step >= 2 ? '#5398D4' : '#5398D477' }}
                        onClick={goComplexInformations}
                    >2</div>
                    <div
                        className='title__formStep__div grey_COLOR'
                        onClick={goComplexInformations}
                    >Complex</div>
                </div>

                <div className='formStep__div'>
                    <div
                        className='circle__formStep__div white_COLOR'
                        style={{ backgroundColor: step >= 3 ? '#5398D4' : '#5398D477' }}
                        onClick={goResidenceInformations}
                    >3</div>
                    <div
                        className='title__formStep__div grey_COLOR'
                        onClick={goResidenceInformations}
                    >Residence</div>
                </div>

                <div className='formStep__div'>
                    <div
                        className='circle__formStep__div white_COLOR'
                        style={{ backgroundColor: step >= 4 ? '#5398D4' : '#5398D477' }}
                        onClick={goStep4}
                    >4</div>
                    <div
                        className='title__formStep__div grey_COLOR'
                        onClick={goStep4}
                    >Floorplan</div>
                </div>

                <div className='formStep__div'>
                    <div
                        className='circle__formStep__div white_COLOR'
                        style={{ backgroundColor: step >= 5 ? '#5398D4' : '#5398D477' }}
                        onClick={goStep5}
                    >5</div>
                    <div
                        className='title__formStep__div grey_COLOR'
                        onClick={goStep5}
                    >Room</div>
                </div>

                <div className='formStep__div'>
                    <div
                        className='circle__formStep__div white_COLOR'
                        style={{ backgroundColor: step >= 6 ? '#5398D4' : '#5398D477' }}
                        onClick={goStep6}
                    >6</div>
                    <div
                        className='title__formStep__div grey_COLOR'
                        onClick={goStep6}
                    >Living place</div>
                </div>

                <div className='formStep__div'>
                    <div 
                        className='circle__formStep__div backgroundBlueAlpha_div white_COLOR'>7</div>
                    <div 
                        className='title__formStep__div  grey_COLOR'>Pictures</div>
                </div>

                <div className='formStep__div'>
                    <div 
                        className='circle__formStep__div backgroundBlueAlpha_div white_COLOR'>8</div>
                    <div 
                        className='title__formStep__div  grey_COLOR'>Documents</div>
                </div>

                <div className='formStep__div'>
                    <div 
                        className='circle__formStep__div backgroundBlueAlpha_div white_COLOR'>9</div>
                    <div 
                        className='title__formStep__div  grey_COLOR'>Done</div>
                </div>
            </div>
        </>
    )
}

export default LivingPlaceRegistrationTimeline
