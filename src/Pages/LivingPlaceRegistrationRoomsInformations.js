import React from 'react'

import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button } from '@material-ui/core'
import { Info } from '@material-ui/icons'

import {
    LivingPlaceRegistrationTimeline,
    RoomInformations
} from '../Components/Registration/index'

import { useData } from '../Context/DataContext'

import '../Styles/Pages/LivingPlaceRegistrationRoomsInformations.scss'

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

const LivingPlaceRegistrationStep5 = () => {

    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const { setValues, data } = useData()

    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            rooms_informations: []
        },
        mode: 'onBlur',
        /* resolver: yupResolver(schema) */
    })

    const navigate = useNavigate()

    const onSubmit = (data) => {
        navigate('/living_place_registration/living_places_informations')
        setValues(data)
        console.log(data)
    }

    const previewStep = (data) => {
        navigate('/living_place_registration/floorplan_informations')
        setValues(data)
        console.log(data)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='timelineFrom__container'
            >
                <LivingPlaceRegistrationTimeline />
                <h5>Rooms informations</h5>
            
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' centered>
                            <Tab label='Item One' {...a11yProps(0)} />
                            <Tab label='Item Two' {...a11yProps(1)} />
                            <Tab label='Item Three' {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <RoomInformations />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <RoomInformations />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <RoomInformations />
                    </TabPanel>
                </Box>

                <div id='roomsInformationsButtons__div'>
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
                    <div id='roomsInformationsNextButton__div'>
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

export default LivingPlaceRegistrationStep5
