import React from 'react'

import { TextField, Select, MenuItem, FormGroup } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@mui/material/Checkbox'

import '../Styles/Components/RoomInformations.scss'

const RoomInformations = () => {

    return (
        <>
            <div id='roomInformations_div'>
                {/* ROOM TYPE */}
                <div id='roomInformationsPanels__div'>
                    <div id='roomInformationsLeftPanel__div'>
                        <FormControl>
                            <div id='roomType__div'>
                                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Room type</FormLabel>
                                <Select
                                    /* {...register('room_type')} */
                                    style={textFieldStyle}
                                >
                                    {roomTypes__array.map((item, index) => (
                                        <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </FormControl>
                            
                        {/* FLOOR */}
                        <FormControl>
                            <div id='floor__div'>
                                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Floor</FormLabel>
                                <TextField
                                    /* {...register('floor')} */
                                    placeholder='Floor'
                                    style={textFieldStyle}
                                    InputProps={{ 
                                        disableUnderline: true
                                    }}
                                />
                            </div>
                        </FormControl>
                    </div>

                    <div id='roomInformationsRightPanel__div'>
                        
                        {/* HOUSE NUMBER EXTENSION OF THE ROOM */}
                        <FormControl>
                            <div id='houseNumberExtensionOfTheRoom__div'>
                                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>House number extension of the room</FormLabel>
                                <TextField
                                    /* {...register('floor')} */
                                    placeholder='Room number extension'
                                    style={textFieldStyle}
                                    InputProps={{ 
                                        disableUnderline: true
                                    }}
                                />
                            </div>
                        </FormControl>
                        
                        {/* DIMENSION IN M2 */}
                        <FormControl>
                            <div id='dimensionInSquareMeters__div'>
                                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Dimension in m2</FormLabel>
                                <TextField
                                    /* {...register('dimension_in_squre_meters')} */
                                    placeholder='Dimension'
                                    style={textFieldStyle}
                                    InputProps={{ 
                                        disableUnderline: true
                                    }}
                                />
                            </div>
                        </FormControl>
                    </div>
                </div>

                {/* ROOMS FACILITY TYPES */}
                <FormGroup>
                    <div id='roomFacilities__div'>
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Facility types</FormLabel>
                        <div id='roomsFacilitiesTypes__div'>
                            <FormGroup>
                                {facilityTypes__array.map((item, index) => (
                                    <FormControlLabel key={index} /* {...register('residence_facility_types.' + item.value)} */ control={<Checkbox />}label={item.label} />
                                ))}
                            </FormGroup>
                        </div>
                    </div>
                </FormGroup>
            </div>
        </>
    )
}

const roomTypes__array = [
    {
        value: 'single_room',
        label: 'Single room'
    },
    {
        value: 'double_room',
        label: 'Double room'
    },
    {
        value: 'twin_room',
        label: 'Twin room'
    }
]

const facilityTypes__array = [
    {
        value: 'wardrobe',
        label: 'Wardrobe'
    },
    {
        value: 'fridge',
        label: 'Fridge'
    },
    {
        value: 'sink',
        label: 'Sink'
    },
    {
        value: 'builtIn_wardrobe',
        label: 'Built-in wardrobe'
    },
    {
        value: 'working_space',
        label: 'Working space'
    }
]

const textFieldStyle = {
    width: '300px',
    height: '40px',
    borderRadius: '5px',
    background: '#eee',
    paddingLeft: '15px',
    paddingTop: '5px'
}

export default RoomInformations