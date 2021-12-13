import React, { useState, useEffect } from 'react'

import { Formik, Form, Field, FieldArray, getIn } from 'formik'
import * as Yup from 'yup'

import PropTypes from 'prop-types'
import { Box, Tabs, Tab, Typography, FormLabel, TextField, FormControl, Select, MenuItem, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@mui/material'

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
    room_facility_type:  {
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

const RoomsInformations = (props) => {

    const [roomsArrayCreated, setRoomsArrayCreated] = useState(false)
    const [value, setValue] = useState(0)

    const handleChangeTab = (event, newValue) => {
        setValue(newValue, true)
    }

    /* console.log('number_of_rooms_with_living_places', props.data.residence.number_rooms_with_vhes) */
    const numberOfRooms = parseInt(props.data.residence.number_rooms_with_vhes)
    
    const setRoomsArray = (numberOfRooms) => {
        for (let i = 0; i < numberOfRooms; i++) {
            roomsArray.push(room)
            /* console.log(roomsArray) */
        }
    }

    useEffect(() => {
        setRoomsArray(numberOfRooms)
        setRoomsArrayCreated(true)
    }, [numberOfRooms])

    /* console.log('roomsArray', roomsArray) */
    initialValues.rooms = roomsArray
    /* console.log('initialValues.rooms', initialValues.rooms) */

    if(!roomsArrayCreated) return null

    return (
        <>
            <Formik
                initialValues={initialValues}
                /* validationSchema={validationSchema} */
                onSubmit={(data) => {
                    console.log(data)
                    props.next(data)
                }}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <FieldArray name='rooms'>
                            {({ remove, push, touched, errors }) => (
                                <div>
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Tabs value={value} onChange={handleChangeTab} aria-label='basic tabs example' centered>
                                                {Array.from(Array(numberOfRooms), (e, index) => {
                                                    return (
                                                        <Tab label='Item One' {...a11yProps(index)} />
                                                    )
                                                })}
                                            </Tabs>
                                        </Box>
                                        {props.data.residence.number_rooms_with_vhes > 0 && values.rooms.map((room, index) => (
                                            <TabPanel value={value} index={index}>
            
                                                {/* LIVING PLACE TYPE */}
                                                <div>
                                                    <FormControl>
                                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Living place type {index}</FormLabel>
                                                        <Select
                                                            name={`rooms.${index}.room_type`}
                                                            value={room.room_type}
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value=''>Choose a living place type</MenuItem>
                                                            {roomTypes.map((item, index) => (
                                                                <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    <ErrorMessage name={`rooms.${index}.room_type`} />
                                                </div>

                                                {/* ROOM NUMBER */}
                                                <div>
                                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Room number</FormLabel>
                                                    <TextField
                                                        name={`rooms.${index}.room_number`}
                                                        value={room.room_number}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage name={`rooms.${index}.room_number`} />
                                                </div>

                                                {/* FLOOR */}
                                                <div>
                                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Floor</FormLabel>
                                                    <TextField
                                                        name={`rooms.${index}.floor`}
                                                        value={room.floor}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage name={`rooms.${index}.floor`} />
                                                </div>

                                                {/* FLOOR */}
                                                <div>
                                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Dimension in m2</FormLabel>
                                                    <TextField
                                                        name={`rooms.${index}.dimension_m2`}
                                                        value={room.dimension_m2}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage name={`rooms.${index}.dimension_m2`} />
                                                </div>

                                                {/* PART OF A COMPLEX */}
                                                <div>
                                                    <FormControl component='fieldset'>
                                                        <FormLabel component='legend' style={{ color: 'black'}}>Coliving allowed</FormLabel>
                                                        <RadioGroup
                                                            name={`rooms.${index}.coliving_allowed`}
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
                                                    <ErrorMessage name={`rooms.${index}.coliving_allowed`} />
                                                </div>

                                                {/* FLOOR */}
                                                <div>
                                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Number of living places</FormLabel>
                                                    <TextField
                                                        name={`rooms.${index}.number_of_living_places`}
                                                        value={room.number_of_living_places}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage name={`rooms.${index}.number_of_living_places`} />
                                                </div>

                                                {/* FACILITY TYPES */}
                                                <div>
                                                    <FormGroup>
                                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Facility types</FormLabel>
                                                        <FormGroup>
                                                            {roomFacilities.map((item, index) => (
                                                                <FormControlLabel key={index} name={`rooms.${index}.room_facility_type.${item.value}`} onChange={handleChange} control={<Checkbox />}label={item.label} />
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
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default RoomsInformations

/* https://codesandbox.io/s/f7rkz?file=/src/form.js:1198-1210 */