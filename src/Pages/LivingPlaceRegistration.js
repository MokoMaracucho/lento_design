import React, { useState } from 'react'

import axios from 'axios'

import {
    LivingPlaceRegistrationTimeline
} from '../Components/Registration'

 import {
    ComplexInformations,
    FloorplanInformations,
    LivingPlaceInformationsWrapper,
    ResidenceInformations,
    RoomsInformations,
    SendDatas,
    SomeQuestions
} from '../Components/LivingPlaceRegistration/Registration'

const initialValues = {
    introductions: {
        part_of_complex: '',
        is_existing_complex: '',
        existing_complex_name: '',
        residence_type: '',
        vhe_type: ''
    },
    complex: {
        complex_name: '',
        house_number: '',
        city: '',
        postal_code: '',
        phone_number: '',
        email_address: '',
        street: '',
        house_number_extension: '',
        country: '',
        phone_number_landcode: '',
        opening_hours: '',
        complex_facility_type: {
            kitchen: '',
            bathroom: '',
            supermarket: '',
            fitness: '',
            common_room: '',
            reception_office: '',
            laundry: '',
            relax: ''
        }
    },
    residence: {
        house_number: '',
        house_number_extension: '',
        floor: '',
        rental_permit: '',
        visible_on_platform: '',
        snf_certificate_approved: '',
        akf_certificate_approved: '',
        number_rooms: '',
        number_rooms_with_vhes: '',
        residence_facility_type: {
            kitchen: '',
            bathroom: '',
            common_room: ''
        }
    },
    floorplan: [],
    rooms: []
}

const LivingPlaceRegistration = () => {

    const [data, setData] = useState(initialValues)
    
    /* console.log('data', data) */
 
    const makeRequest = (data) => {
        /* console.log('form is submitted', data) */
        const res = axios.post(process.env.REACT_APP_URL + 'vhe/register/registervhe/', data)
        res.then(/* res => { console.log('res', res) } */).catch(/* error => { console.log(error) } */)
    }

    const handleNextStep = (newData, final = false) => {
        setData((prev) => ({
            ...prev,
            ...newData
        }))
        if(final) {
            makeRequest(data)
            return
        }
        setCurrentStep((prev) => prev + 1)
    }

    const handlePreviewStep = (newData) => {
        setData((prev) => ({ ...prev, ...newData }))
        setCurrentStep((prev) => prev - 1);
    }

    const [currentStep, setCurrentStep] = useState(0)

    const steps = [
        <SomeQuestions next={handleNextStep} data={data} />, 
        <ComplexInformations next={handleNextStep} prev={handlePreviewStep} data={data} />,
        <ResidenceInformations next={handleNextStep} prev={handlePreviewStep} data={data} />,
        <FloorplanInformations next={handleNextStep} prev={handlePreviewStep} data={data} />,
        <RoomsInformations next={handleNextStep} prev={handlePreviewStep} data={data} />,
        <LivingPlaceInformationsWrapper next={handleNextStep} prev={handlePreviewStep} data={data} />,
        <SendDatas next={handleNextStep} prev={handlePreviewStep} data={data} />
    ]

    return (
        <>
            <div className='timelineForm__container'>
                <LivingPlaceRegistrationTimeline />
                <div>
                    {steps[currentStep]}
                </div>
            </div>
        </>
    )
}

export default LivingPlaceRegistration

