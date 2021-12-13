import React, { useState, useEffect } from 'react'

import { Formik, Form, Field, FieldArray, getIn } from 'formik'
import * as Yup from 'yup'

import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'
import { Button, Box, Tabs, Tab, Typography, FormLabel, TextField, FormControl, Select, MenuItem, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@mui/material'

import { useData } from '../../Context/LivingPlaceRegistrationContext'

import { LivingPlaceRegistrationTimeline } from '../../Components/Registration/index'
import LivingPlaceRegistrationTimelineState from '../../Context/LivingPlaceRegistrationTimelineState'

import roomTypes from '../../Json/RoomTypes'
import roomFacilities from '../../Json/RoomFacilities'

let initialValues = {
    rooms: ''
}

let roomsArray = []

const room = {
    room_type: '',
    room_number: '',
    floor: '',
    dimension_m2: '',
    coliving_allowed: '',
    number_of_living_places: '',
    room_facility_types:  {
        wardrobe: '',
        sink: '',
        working_space: '',
        fridge: '',
        built_in_wardrobe: ''
    },
    vhes: []
}

const validationSchema = Yup.object().shape({
    rooms: Yup.array().of(
        Yup.object().shape({
            room_type: Yup.string().required('Test'),
            room_number: Yup.number().required('Test'),
            floor: Yup.number().required('Test'),
            dimension_m2: Yup.number().required('Test'),
            coliving_allowed: Yup.boolean().required('Test'),
            number_of_living_places: Yup.number().required('Test')
        })).required('Test')
})
 
const ErrorMessage = ({ name }) => (
    <Field
        name={name}
        render={({ form }) => {
            const error = getIn(form.errors, name);
            const touch = getIn(form.touched, name);
            return touch && error ? error : null;
        }}
    />
)

function TabPanel(props) {
    
    const { children, value, index, ...other } = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const RoomsInformations = () => {

    const [roomsArrayCreated, setRoomsArrayCreated] = useState(false)
    const [value, setValue] = useState(0)

    const handleChangeTab = (event, newValue) => {
        setValue(newValue, true)
    }

    LivingPlaceRegistrationTimelineState.maxStep = 5

    const { setValues, data } = useData()

    const navigate = useNavigate()

    const previewStep = (data) => {
        LivingPlaceRegistrationTimelineState.step = 4
        navigate('/living_place_registration/floorplan_informations')
    }

    const numberOfRooms = parseInt(data.residence.number_rooms_with_vhes)
    
    const setRoomsArray = (numberOfRooms) => {
        for (let i = 0; i < numberOfRooms; i++) {
            roomsArray.push(room)
        }
    }

    useEffect(() => {
        setRoomsArray(numberOfRooms)
        setRoomsArrayCreated(true)
    }, [numberOfRooms])

    initialValues.rooms = roomsArray

    if(!roomsArrayCreated) return null

    return (
        <>
            <LivingPlaceRegistrationTimeline />

            <h5>Rooms informations</h5>

            <div id='complexInfos__div'>
                <p className='p-large blue_COLOR' style={{marginTop: '10px'}}>{data.complex.complex_name}</p>
                <p className='p-medium' style={{marginTop: '-10px'}}>
                    {/* Van Koetsveldstraat 25, 3532 ES Utrecht (NL) */}
                    {data.complex.street}
                    {' '}
                    {data.complex.complex_house_number}
                    {', '}
                    {data.complex.postal_code}
                    {' '}
                    {data.complex.city}
                    {' ('}
                    {data.complex.country}
                    {')'}
                </p>
            </div>

            <Formik
                initialValues={initialValues}
                /* validationSchema={validationSchema} */
                onSubmit={(data) => {
                    setValues(data)
                    LivingPlaceRegistrationTimelineState.step = 6
                    navigate('/living_place_registration/living_places_informations')
                    console.log(data)
                }}
            >
                {({ values, handleChange, setFieldValue }) => (
                    <Form>
                        <FieldArray name='rooms'>
                            {({ remove, push, touched, errors }) => (
                                <div>
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Tabs value={value} onChange={handleChangeTab} aria-label='basic tabs example' centered>
                                                {Array.from(Array(numberOfRooms), (e, index) => {
                                                    return (
                                                        <Tab label={`Room ${index + 1}`} {...a11yProps(index)} />
                                                    )
                                                })}
                                            </Tabs>
                                        </Box>
                                        {data.residence.number_rooms_with_vhes > 0 && values.rooms.map((room, roomIndex) => (
                                            <TabPanel value={value} index={roomIndex}>
            
                                                {/* LIVING PLACE TYPE */}
                                                <div>
                                                    <FormControl>
                                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Living place type {roomIndex}</FormLabel>
                                                        <Select
                                                            name={`rooms.${roomIndex}.room_type`}
                                                            value={room.room_type}
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value=''>Choose a room type</MenuItem>
                                                            {roomTypes.map((item, index) => (
                                                                <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    <ErrorMessage name={`rooms.${roomIndex}.room_type`} />
                                                </div>

                                                {/* ROOM NUMBER */}
                                                <div>
                                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Room number</FormLabel>
                                                    <TextField
                                                        name={`rooms.${roomIndex}.room_number`}
                                                        value={room.room_number}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage name={`rooms.${roomIndex}.room_number`} />
                                                </div>

                                                {/* FLOOR */}
                                                <div>
                                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Floor</FormLabel>
                                                    <TextField
                                                        name={`rooms.${roomIndex}.floor`}
                                                        value={room.floor}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage name={`rooms.${roomIndex}.floor`} />
                                                </div>

                                                {/* DIMENSION M2 */}
                                                <div>
                                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Dimension in m2</FormLabel>
                                                    <TextField
                                                        name={`rooms.${roomIndex}.dimension_m2`}
                                                        value={room.dimension_m2}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage name={`rooms.${roomIndex}.dimension_m2`} />
                                                </div>

                                                {/* COLIVING ALLOWED */}
                                                <div>
                                                    <FormControl component='fieldset'>
                                                        <FormLabel component='legend' style={{ color: 'black'}}>Coliving allowed</FormLabel>
                                                        <RadioGroup
                                                            name={`rooms.${roomIndex}.coliving_allowed`}
                                                            value={room.coliving_allowed}
                                                            onChange={handleChange}
                                                        >
                                                            <FormControlLabel
                                                                value='true'
                                                                control={<Radio />}
                                                                label='True'
                                                            />
                                                            <FormControlLabel
                                                                value='false'
                                                                control={<Radio />}
                                                                label='False'
                                                            />
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <ErrorMessage name={`rooms.${roomIndex}.coliving_allowed`} />
                                                </div>

                                                {/* NUMBER OF LIVING PLACES */}
                                                <div>
                                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Number of living places</FormLabel>
                                                    <TextField
                                                        name={`rooms.${roomIndex}.number_of_living_places`}
                                                        value={room.number_of_living_places}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage name={`rooms.${roomIndex}.number_of_living_places`} />
                                                </div>

                                                {/* FACILITY TYPES */}
                                                <div>
                                                    <FormGroup>
                                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Facility types</FormLabel>
                                                        <FormGroup>
                                                            {roomFacilities.map((item, index) => (
                                                                <FormControlLabel key={index}
                                                                control={
                                                                    <Checkbox
                                                                    onChange={(e) => {
                                                                            setFieldValue(`rooms.${roomIndex}.room_facility_types.${item.value}`, e.target.checked)
                                                                        }}
                                                                        name={`rooms.${roomIndex}.room_facility_types.${item.value}`}
                                                                    />}
                                                                    label={item.label}
                                                                />
                                                            ))}
                                                        </FormGroup>
                                                    </FormGroup>
                                                </div>
                                            </TabPanel>
                                        ))}
                                    </Box>
                                </div>
                            )}
                        </FieldArray>

                        {/* PREVIEW */}
                        <Button type='submit' variant='contained' onClick={previewStep}>
                            Previous
                        </Button>

                        {/* NEXT */}
                        <Button type='submit' color='primary' variant='contained'>
                            Next
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default RoomsInformations