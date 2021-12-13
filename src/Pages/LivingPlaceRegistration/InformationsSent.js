import React, { useEffect } from 'react'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

import { useData } from '../../Context/LivingPlaceRegistrationContext'

import { LivingPlaceRegistrationTimeline } from '../../Components/Registration/index'
import LivingPlaceRegistrationTimelineState from '../../Context/LivingPlaceRegistrationTimelineState'

const InformationsSent = () => {

    LivingPlaceRegistrationTimelineState.maxStep = 7

    const { data } = useData()

    const navigate = useNavigate()

    const sendDatas = (data) => {
        const res = axios.post(process.env.REACT_APP_URL + 'vhe/register/registervhe/', data)
        res.then(res => { console.log('res', res) }).catch(error => { console.log(error) })
    }

    useEffect(() => {
        sendDatas(data)
    })

    const nextStep = (data) => {
        LivingPlaceRegistrationTimelineState.step = 8
        navigate('/living_place_registration/images')
    }

    return (
        <>
            <LivingPlaceRegistrationTimeline />

            <h3>Datas sent</h3>

            {/* NEXT */}
            <Button color='primary' variant='contained' onClick={nextStep}>
                Next
            </Button>
        </>
    )
}

export default InformationsSent
