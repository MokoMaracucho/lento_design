import React from 'react'

import { TextField, Select, MenuItem, FormGroup } from '@material-ui/core'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import '../Styles/Components/LivingPlaceInformations.scss'

const LivingPlaceInformations = () => {

    return (
        <>
            <div id='livingPlaceInformations_div'>
            
                <div id='livingPlacesInformationsPanels__div'>

                    <div id='livingPlacesInformationsTopPanel__div'>

                        {/* MAXIMUM STAY DURATION */}
                        <FormControl>
                            <div id='maximumStayDuration__div'>
                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Maximum stay duration</FormLabel>
                                <Select
                                    /* {...register('living_place_informations.maximum_stay_duration')} */
                                    style={textFieldStyle}
                                >
                                    {maximumStayDuration__array.map((item, index) => (
                                        <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </FormControl>

                        {/* RENTAL PRICE TERM */}
                        <FormControl>
                            <div id='rentalPriceTerm__div'>
                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Rental price term.</FormLabel>
                                <Select
                                    /* {...register('living_place_informations.rental_price_term')} */
                                    style={textFieldStyle}
                                >
                                    {rentalPriceTerm__array.map((item, index) => (
                                        <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </FormControl>
                    </div>

                    {/* DESCRIPTION */}
                    <FormControl>
                        <div id='description__div'>
                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Description</FormLabel>
                            <TextField
                                /* {...register('living_place_informations.description')} */
                                placeholder='Description'
                                style={descriptionFieldStyle}
                                InputProps={{ 
                                    disableUnderline: true
                                }}
                            />
                        </div>
                    </FormControl>

                    <div id='livingPlacesInformationsBottomPanel__div'>

                        <div id='livingPlacesInformationsLeftPanel__div'>

                            {/* CHANGE OVERTIME */}
                            <FormControl>
                                <div id='changeOvertime__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Change overtime</FormLabel>
                                    <TextField
                                        /* {...register('living_place_informations.change_overtime')} */
                                        placeholder='Change overtime'
                                        style={textFieldStyle}
                                        InputProps={{ 
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                            </FormControl>

                            {/* STATUS AT POINT OF REGESTERING */}
                            <FormControl>
                                <div id='statusAtPointpointOfRegistering__div'>
                                <FormLabel component='legend' style={{ color: 'black', marginTop: '10px', marginBottom: '10px'}}>Status at point of registering</FormLabel>
                                    <Select
                                        /* {...register('living_place_informations.status_at_point_of_registering')} */
                                        id='status_at_point_of_registering'
                                        style={textFieldStyle}
                                    >
                                        {statusAtPointOfRegestering__array.map((item, index) => (
                                            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </FormControl>
                        </div>

                        <div id='livingPlacesInformationsRightPanel__div'>
                            <div id='livingPlacesInformationsRightLeftPanel__div'>

                                {/* B2B DEPOSIT */}
                                <FormControl>
                                    <div id='b2bDeposit__div'>
                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>B2B Deposit</FormLabel>
                                        <TextField
                                            /* {...register('living_place_informations.b2b_deposit')} */
                                            placeholder='e.g. €100'
                                            style={smallTextFieldStyle}
                                            InputProps={{ 
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </FormControl>

                                {/* B2C DEPOSIT */}
                                <FormControl>
                                    <div id='b2cDeposit__div'>
                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>B2C Deposit</FormLabel>
                                        <TextField
                                            /* S */
                                            placeholder='e.g. €100'
                                            style={smallTextFieldStyle}
                                            InputProps={{ 
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </FormControl>

                                {/* SERVICE COST */}
                                <FormControl>
                                    <div id='serviceCost__div'>
                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Service cost</FormLabel>
                                        <TextField
                                            /* {...register('living_place_informations.service_cost')} */
                                            placeholder='e.g. €100'
                                            style={smallTextFieldStyle}
                                            InputProps={{ 
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </FormControl>
                            </div>

                            <div id='livingPlacesInformationsRightRightPanel__div'>

                                {/* B2B RENTAL PRICE */}
                                <FormControl>
                                    <div id='b2bRentalPrice__div'>
                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>B2B Rental price</FormLabel>
                                        <TextField
                                            /* {...register('living_place_informations.b2b_rental_price')} */
                                            placeholder='e.g. €100'
                                            style={smallTextFieldStyle}
                                            InputProps={{ 
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </FormControl>

                                {/* B2C RENTAL PRICE */}
                                <FormControl>
                                    <div id='b2cRentalPrice__div'>
                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>B2C Rental price</FormLabel>
                                        <TextField
                                            /* {...register('living_place_informations.b2c_rental_price')} */
                                            placeholder='e.g. €100'
                                            style={smallTextFieldStyle}
                                            InputProps={{ 
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </FormControl>

                                {/* SERVICE COST TERM */}
                                <FormControl>
                                    <div id='serviceCostTerm__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Service cost term.</FormLabel>
                                        <Select
                                            /* {...register('living_place_informations.service_cost_term')} */
                                            id='service_cost_term'
                                            style={smallTextFieldStyle}
                                        >
                                            {serviceCostTerm__array.map((item, index) => (
                                                <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ROOMS FACILITY TYPES */}
                <div id='livingPlacesFacilities__div'>
                    <FormGroup>
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Facility types</FormLabel>
                        <div id='livingPlacesFacilitiesTypes__div'>
                            <FormGroup>
                                {facilityTypes__array.map((item, index) => (
                                    <FormControlLabel key={index} /* {...register('living_place_informations.residence_facility_types.' + item.value)} */ control={<Checkbox />}label={item.label} />
                                ))}
                            </FormGroup>
                        </div>
                    </FormGroup>    
                </div>
            </div>
        </>
    )
}

const textFieldStyle = {
    width: '290px',
    height: '40px',
    borderRadius: '5px',
    background: '#eee',
    paddingLeft: '15px',
    paddingTop: '5px'
}

const descriptionFieldStyle = {
    width: '600px',
    height: '120px',
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

const maximumStayDuration__array = [
    {
        value: 'short_stay',
        label: 'Short stay'
    },
    {
        value: 'long_stay',
        label: 'Long stay'
    }
]

const rentalPriceTerm__array = [
    {
        value: 'weekly',
        label: 'Weekly'
    },
    {
        value: 'weekly',
        label: 'Weekly'
    },
    {
        value: 'every_two_weeks',
        label: 'Every 2 weeks'
    },
    {
        value: 'every_four_weeks',
        label: 'Every 4 weeks'
    },
    {
        value: 'monthly',
        label: 'Monthly'
    }
]

const statusAtPointOfRegestering__array = [
    {
        value: 'in_process',
        label: 'In process'
    },
    {
        value: 'reserved',
        label: 'Reserved'
    },
    {
        value: 'inactive',
        label: 'Inactive'
    },
    {
        value: 'rented_out',
        label: 'Rented out'
    },
    {
        value: 'available',
        label: 'Available'
    },
    {
        value: 'waiting_list',
        label: 'Waiting list'
    },
    {
        value: 'option_to_prolongate',
        label: 'Option to prolongate'
    },
    {
        value: 'option_to_prolongate_at_fifty_percent',
        label: 'Option to prolongate at 50%'
    },
    {
        value: 'rented_out_not_occupied',
        label: 'Rented out - Not occupied'
    }
]

const serviceCostTerm__array = [
    {
        value: 'weekly',
        label: 'Weekly'
    },
    {
        value: 'weekly',
        label: 'Weekly'
    },
    {
        value: 'every_two_weeks',
        label: 'Every 2 weeks'
    },
    {
        value: 'every_four_weeks',
        label: 'Every 4 weeks'
    },
    {
        value: 'monthly',
        label: 'Monthly'
    }
]

const facilityTypes__array = [
    {
        value: 'welcome_pack',
        label: 'Welcome pack'
    },
    {
        value: 'towels',
        label: 'Towels'
    },
    {
        value: 'weekly_cleaning',
        label: 'Weekly cleaning'
    },
    {
        value: 'kitchen_supplies',
        label: 'Kitchen supplies'
    },
    {
        value: 'bed_sheets',
        label: 'Bed sheets'
    },
    {
        value: 'bike',
        label: 'Bike'
    },
    {
        value: 'final_cleaning',
        label: 'Final cleaning'
    },
    {
        value: 'wifi',
        label: 'Wifi'
    },
    {
        value: 'wifi_television',
        label: 'Wifi & television'
    }
]

export default LivingPlaceInformations