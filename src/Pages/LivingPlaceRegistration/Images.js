import React from 'react'

import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

import { LivingPlaceRegistrationTimeline } from '../../Components/Registration/index'
import LivingPlaceRegistrationTimelineState from '../../Context/LivingPlaceRegistrationTimelineState'

const Images = () => {

    LivingPlaceRegistrationTimelineState.maxStep = 8

    const navigate = useNavigate()

    const nextStep = (data) => {
        LivingPlaceRegistrationTimelineState.step = 8
        navigate('/living_place_registration/images')
    }

    return (
        <>
            <LivingPlaceRegistrationTimeline />

            <h3>Images</h3>

            {/* NEXT */}
            <Button color='primary' variant='contained' onClick={nextStep}>
                Next
            </Button>
        </>
    )
}

export default Images
