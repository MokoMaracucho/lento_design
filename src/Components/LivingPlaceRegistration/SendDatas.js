import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { useData } from '../../Context/LivingPlaceRegistrationContext'

import { LivingPlaceRegistrationTimeline } from '../../Components/Registration/index'
import LivingPlaceRegistrationTimelineState from '../../Context/LivingPlaceRegistrationTimelineState'

const SendDatas = (props) => {

    LivingPlaceRegistrationTimelineState.maxStep = 7

    const { data } = useData()

    const navigate = useNavigate()

    const sendDatas = (data) => {
        props.next(data, true)
    }

    useEffect(() => {
        sendDatas(data)
    })

    return (
        <>
            <LivingPlaceRegistrationTimeline />

            <h3>Datas sent</h3>
        </>
    )
}

export default SendDatas
