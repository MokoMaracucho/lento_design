import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import { TextField, Button } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Add, Info } from '@material-ui/icons'

import { LivingPlaceRegistrationTimeline } from '../Components/Registration/index'

import { useData } from '../Context/DataContext'
import LivingPlaceRegistrationTimelineState from '../Context/LivingPlaceRegistrationTimelineState'

import '../Styles/Pages/LivingPlaceRegistrationFloorplanInformations.scss'

const LivingPlaceRegistrationFloorplanInformations = () => {

    LivingPlaceRegistrationTimelineState.maxStep = 4

    const [roomList, setRoomList] = useState([])

    const addRoom = (e) => {
        setRoomList(roomList.concat(
            <div className='floorplanInformationsPanels__div'>

                <div className='floorplanInformationsLeftPanel__div'>

                    {/* ROOM */}
                    <FormControl>
                        <div className='room__div'>
                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Room</FormLabel>
                            <TextField
                                {...register('floorplan_informations[' + roomList.length + 1 + '].room')}
                                placeholder='Room'
                                style={textFieldStyle}
                                InputProps={{ 
                                    disableUnderline: true
                                }}
                            />
                        </div>
                    </FormControl>
                
                    {/* FLOOR */}
                    <FormControl>
                        <div className='floor__div'>
                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Floor</FormLabel>
                            <TextField
                                {...register('floorplan_informations[' + roomList.length + 1 + '].floor')}
                                placeholder='Floor'
                                style={textFieldStyle}
                                InputProps={{ 
                                    disableUnderline: true
                                }}
                            />
                        </div>
                    </FormControl>
                </div>

                <div className='floorplanInformationsRightPanel__div'>
    
                    {/* AREA */}
                    <FormControl>
                        <div className='area__div'>
                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Area</FormLabel>
                            <TextField
                                {...register('floorplan_informations[' + roomList.length + 1 + '].area')}
                                placeholder='Area'
                                style={textFieldStyle}
                                InputProps={{ 
                                    disableUnderline: true
                                }}
                            />
                        </div>
                    </FormControl>
                </div>
            </div>
        ))
    }

    const { setValues, data } = useData()

    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            floorplan_informations: []
        },
        mode: 'onBlur',
        /* resolver: yupResolver(schema) */
    })

    const navigate = useNavigate()

    const onSubmit = (data) => {
        navigate('/living_place_registration/rooms_informations')
        setValues(data)
        console.log(data)
    }

    const previewStep = (data) => {
        navigate('/living_place_registration/residence_informations')
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
                <h5>Floorplan informations</h5>

                <div id='residenceInfos__div'>
                    <p className='p-large blue_COLOR' style={{marginTop: '20px'}}>Residence A</p>
                    <p className='p-medium' style={{marginTop: '-10px'}}>Van Koetsveldstraat 25, 3532 ES Utrecht (NL)</p>
                </div>

                <div id='floorPlanInformations__container'>

                    {/* {data.residence_informations.number_of_rooms.forEach((index) => { */}
            
                        <div className='floorplanInformationsPanels__div'>

                            <div className='floorplanInformationsLeftPanel__div'>

                                {/* ROOM */}
                                <FormControl>
                                    <div className='room__div'>
                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Room</FormLabel>
                                        <TextField
                                            {...register('floorplan_informations[0].room')}
                                            placeholder='Room'
                                            style={textFieldStyle}
                                            InputProps={{ 
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </FormControl>
                            
                                {/* FLOOR */}
                                <FormControl>
                                    <div className='floor__div'>
                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Floor</FormLabel>
                                        <TextField
                                            {...register('floorplan_informations[0].floor')}
                                            placeholder='Floor'
                                            style={textFieldStyle}
                                            InputProps={{ 
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </FormControl>
                            </div>

                            <div className='floorplanInformationsRightPanel__div'>
                
                                {/* AREA */}
                                <FormControl>
                                    <div className='area__div'>
                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Area</FormLabel>
                                        <TextField
                                            {...register('floorplan_informations[0].area')}
                                            placeholder='Area'
                                            style={textFieldStyle}
                                            InputProps={{ 
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </FormControl>
                            </div>
                        </div>
                    {/* })} */}
                    
                    {roomList}

                    <div
                        id='addRoom__div'
                        onClick={addRoom}
                    >
                        <div className='p-large'>Add room</div>
                        <div className='circleAddRoom__div white_COLOR'>
                            <Add />
                        </div>
                    </div>
                </div>


                <div id='floorplanInformationsButtons__div'>
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
                    <div id='floorplanInformationsNextButton__div'>
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

export default LivingPlaceRegistrationFloorplanInformations
