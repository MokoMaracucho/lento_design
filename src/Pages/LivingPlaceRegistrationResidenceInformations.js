import React, { useState, useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useNavigate } from 'react-router-dom'

import { TextField, Button, FormGroup } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import Checkbox from '@mui/material/Checkbox'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Info } from '@material-ui/icons'

import { LivingPlaceRegistrationTimeline } from '../Components/Registration/index'

import { useData } from '../Context/DataContext'
import LivingPlaceRegistrationTimelineState from '../Context/LivingPlaceRegistrationTimelineState'

import '../Styles/Pages/LivingPlaceRegistrationResidenceInformations.scss'

const LivingPlaceRegistrationResidenceInformations = () => {

    LivingPlaceRegistrationTimelineState.maxStep = 3

    const { setValues, data } = useData()

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            residence_house_number: data.residence_house_number,
            residence_house_number_extension: data.residence_house_number_extension,
            residence_floor: data.residence_floor,
            rental_permit: data.rental_permit,
            always_visible_in_platform: data.always_visible_in_platform,
            snf_certificate: data.snf_certificate,
            akf_certificate: data.akf_certificate,
            number_of_rooms_with_living_place: data.number_of_rooms_with_living_place,
            residence_facility_types: {
                residence_kitchen: data.kitchen,
                residence_bathroom: data.bathroom,
                residence_common_room: data.common_room
            }
        }
    })

    const navigate = useNavigate()

    const onSubmit = (data) => {
        navigate('/living_place_registration/floorplan_informations')
        setValues(data)
        console.log(data)
    }

    const previewStep = (data) => {
        navigate('/living_place_registration/complex_informations')
        LivingPlaceRegistrationTimelineState.step = 2
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='timelineFrom__container'
            >
                <LivingPlaceRegistrationTimeline />
                <h5>Residence informations</h5>

                <div id='complexInfos__div'>
                    <p className='p-large blue_COLOR' style={{marginTop: '10px'}}>{data.complex_name}</p>
                    <p className='p-medium' style={{marginTop: '-10px'}}>
                        {/* Van Koetsveldstraat 25, 3532 ES Utrecht (NL) */}
                        {data.street}
                        {' '}
                        {data.complex_house_number}
                        {', '}
                        {data.postal_code}
                        {' '}
                        {data.city}
                        {' ('}
                        {data.country}
                        {')'}
                    </p>
                </div>
            
                <div id='residenceInformationsPanels__div'>

                    <div id='residenceInformationsLeftPanel__div'>

                        {/* RESIDENCE HOUSE NUMBER */}
                        <div id='residenceHouseNumberError__container'>
                            <FormControl>
                                <div id='residenceHouseNumber__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>House number</FormLabel>
                                    <TextField
                                        {...register('residence_house_number', { required: true })}
                                        placeholder='House number'
                                        style={textFieldStyle}
                                        InputProps={{ 
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                            </FormControl>
                            <div id='residenceHouseNumberError__div'>
                                {errors.residence_house_number && errors.residence_house_number.type === "required" && <span className='red_COLOR error_FORM'>Residence house number is mandatory</span>}
                            </div>
                        </div>

                        {/* RESIDENCE HOUSE NUMBER EXTENSION */}
                        <div id='residenceHouseNumberExtensionError__container'>
                            <FormControl>
                                <div id='residenceHouseNumberExtension__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>House number extension</FormLabel>
                                    <TextField
                                        {...register('residence_house_number_extension')}
                                        placeholder='House number extension'
                                        style={textFieldStyle}
                                        InputProps={{ 
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                            </FormControl>
                            <div id='residenceHouseNumberExtensionError__div'>
                                <span></span>
                            </div>
                        </div>

                        {/* FLOOR */}
                        <div id='residenceFloorError__container'>
                            <FormControl>
                                <div id='residenceFloor__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Floor</FormLabel>
                                    <TextField
                                        {...register('residence_floor', { required: true })}
                                        placeholder='Floor'
                                        style={textFieldStyle}
                                        InputProps={{ 
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                            </FormControl>
                            <div id='residenceFloorError__div'>
                                {errors.residence_floor && errors.residence_floor.type === "required" && <span className='red_COLOR error_FORM'>Residence house number is mandatory</span>}
                            </div>
                        </div>
                    </div>

                    <div id='residenceInformationsRightPanel__div'>
                        <div id='rentalPermitAlwaysVisibleInPlatform__div'>

                            {/* RENTAL PERMIT */}
                            <div id='rentalPermitError__container'>
                                <FormControl component='fieldset'>
                                    <div id='rentalPermit__div'>
                                        <FormLabel component='legend' style={{ color: 'black'}}>Rental permit?</FormLabel>
                                        <RadioGroup
                                            {...register('rental_permit', { required: true })}
                                            style={{ display: 'initial' }}
                                        >
                                            <FormControlLabel value='yes' control={
                                                <Radio
                                                    style={{ color: '#eeeeee' }}
                                                />
                                            } label='Yes' />

                                            <FormControlLabel value='no' control={
                                                <Radio
                                                    style={{ color: '#eeeeee' }}
                                                />
                                            } label='No' />
                                        </RadioGroup>
                                    </div>
                                    <div id='rentalPermitError__div'>
                                        {errors.rental_permit && errors.rental_permit.type === "required" && <span className='red_COLOR error_FORM'>Is mandatory</span>}
                                    </div>
                                </FormControl>
                            </div>
                            
                            {/* ALWAYS VISIBLE IN PLATFORM */}
                            <div id='alwaysVisibleInPlatformError__container'>
                                <FormControl component='fieldset'>
                                    <div id='alwaysVisibleInPlatform__div'>

                                        <FormLabel component='legend' style={{ color: 'black'}}>Always visible?</FormLabel>
                                        <RadioGroup
                                            {...register('always_visible_in_platform', { required: true })}
                                            style={{ display: 'initial' }}
                                        >
                                            <FormControlLabel value='yes' control={
                                                <Radio
                                                    style={{ color: '#eeeeee' }}
                                                />
                                            } label='Yes' />

                                            <FormControlLabel value='no' control={
                                                <Radio
                                                    style={{ color: '#eeeeee' }}
                                                />
                                            } label='No' />
                                        </RadioGroup>
                                    </div>
                                    <div id='alwaysVisibleInPlatformError__div'>
                                        {errors.always_visible_in_platform && errors.always_visible_in_platform.type === "required" && <span className='red_COLOR error_FORM'>Is mandatory</span>}
                                    </div>
                                </FormControl>
                            </div>
                        </div>

                        <div id='snfCertificateAkfCertificate__div'>
                            {/* SNF CERTIFICATE */}
                            <div id='snfCertificateError__container'>
                                <FormControl component='fieldset'>
                                    <div id='snfCertificate__div'>

                                        <FormLabel component='legend' style={{ color: 'black'}}>SNF Certificate</FormLabel>
                                        <RadioGroup
                                            {...register('snf_certificate', { required: true })}
                                            style={{ display: 'initial' }}
                                        >
                                            <FormControlLabel value='yes' control={
                                                <Radio
                                                    style={{ color: '#eeeeee' }}
                                                />
                                            } label='Yes' />

                                            <FormControlLabel value='no' control={
                                                <Radio
                                                    style={{ color: '#eeeeee' }}
                                                />
                                            } label='No' />
                                        </RadioGroup>
                                    </div>
                                    <div id='snfCertificateError__div'>
                                        {errors.snf_certificate && errors.snf_certificate.type === "required" && <span className='red_COLOR error_FORM'>Is mandatory</span>}
                                    </div>
                                </FormControl>
                            </div>

                            {/* AKF CERTIFICATE */}
                            <div id='akfCertificateError__container'>
                                <FormControl component='fieldset'>
                                    <div id='akfCertificate__div'>

                                        <FormLabel component='legend' style={{ color: 'black'}}>AKF Certificate</FormLabel>
                                        <RadioGroup
                                            {...register('akf_certificate', { required: true })}
                                            style={{ display: 'initial' }}
                                        >
                                            <FormControlLabel value='yes' control={
                                                <Radio
                                                    style={{ color: '#eeeeee' }}
                                                />
                                            } label='Yes' />

                                            <FormControlLabel value='no' control={
                                                <Radio
                                                    style={{ color: '#eeeeee' }}
                                                />
                                            } label='No' />
                                        </RadioGroup>
                                    </div>
                                    <div id='akfCertificateError__div'>
                                        {errors.akf_certificate && errors.akf_certificate.type === "required" && <span className='red_COLOR error_FORM'>Is mandatory</span>}
                                    </div>
                                </FormControl>
                            </div>
                        </div>

                        <div id='numberOfRoomsNumberOfRoomsWithLivingPlace__div'>

                            {/* NUMBER OF ROOMS */}
                            <div id='numberOfRoomsError__container'>
                                <FormControl>
                                    <div id='numberOfRooms__div'>
                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Number of rooms</FormLabel>
                                        <TextField
                                            {...register('number_of_rooms', { required: true })}
                                            placeholder='e.g. 1'
                                            style={smallTextFieldStyle}
                                            InputProps={{ 
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                    <div id='numberOfRoomsError__div'>
                                        {errors.number_of_rooms && errors.number_of_rooms.type === "required" && <span className='red_COLOR error_FORM'>Is mandatory</span>}
                                    </div>
                                </FormControl>
                            </div>

                            {/* NUMBER OF ROOMS WITH LIVING PLACE */}
                            <div id='numberOfRoomsWithLivingPlaceError__container'>
                                <FormControl>
                                    <div id='numberOfRoomsWithLivingPlace__div'>
                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>... with living place</FormLabel>
                                        <TextField
                                            {...register('number_of_rooms_with_living_place', { required: true })}
                                            defaultValue={data.number_of_rooms_with_living_place}
                                            placeholder='e.g. 1'
                                            style={smallTextFieldStyle}
                                            InputProps={{ 
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                    <div id='numberOfRoomsWithLivingPlaceError__div'>
                                        {errors.number_of_rooms_with_living_place && errors.number_of_rooms_with_living_place.type === "required" && <span className='red_COLOR error_FORM'>Is mandatory</span>}
                                    </div>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RESIDENCE FACILITY TYPES */}
                <div id='residenceFacilities__div'>
                    <FormGroup>
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Facility types</FormLabel>
                        <div id='residenceFacilitiesTypes__div'>
                            <FormGroup>
                                {facilityTypes__array.map((item, index) => (
                                    <FormControlLabel key={index} {...register('residence_facility_types.' + item.value)} control={<Checkbox />}label={item.label} />
                                ))}
                            </FormGroup>
                        </div>
                    </FormGroup>    
                </div>

                <div id='residenceInformationsButtons__div'>
                    {/* PREVIEW */}
                    <Button
                        type='submit'
                        variant='contained'
                        style={{
                            backgroundColor: '#5398D4',
                            borderRadius: 50,
                            fontFamily: 'DMSansMedium',
                            boxShadow: 'unset'
                        }}
                        onClick={previewStep}
                    >
                        Preview
                    </Button>

                    {/* NEXT */}
                    <div id='residenceInformationsNextButton__div'>
                        <Info style={{ color: '#eeeeee' }}/>
                        <Button
                            type='submit'
                            variant='contained'
                            style={{
                                backgroundColor: '#5398D4',
                                borderRadius: 50,
                                fontFamily: 'DMSansMedium',
                                boxShadow: 'unset',
                                marginLeft: '10px'
                            }}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}

const textFieldStyle = {
    width: '300px',
    height: '40px',
    borderRadius: '5px',
    background: '#eee',
    paddingLeft: '15px',
    paddingTop: '5px'
}

const smallTextFieldStyle = {
    width: '140px',
    height: '40px',
    borderRadius: '5px',
    background: '#eee',
    paddingLeft: '15px',
    paddingTop: '5px'
}

const facilityTypes__array = [
    {
        value: 'residence_kitchen',
        checked: 'checked',
        label: 'Kitchen'
    },
    {
        value: 'residence_bathroom',
        checked: 'checked',
        label: 'Bathroom'
    },
    {
        value: 'residence_common_room',
        checked: 'checked',
        label: 'Common room'
    }
]

export default LivingPlaceRegistrationResidenceInformations
