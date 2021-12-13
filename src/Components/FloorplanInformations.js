import React, { forwardRef } from 'react'

import { TextField } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const FloorplanInformations = forwardRef((props, ref) => {

    return (
        <>
            <div
                ref={ref}
                {...props}
                className='floorplanInformationsPanels__div'
            >
                <div className='floorplanInformationsLeftPanel__div'>

                    {/* ROOM */}
                    <FormControl>
                        <div className='room__div'>
                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Room</FormLabel>
                            <TextField
                                /* {...register('floorplan_informations[' + roomList.length + 1 + '].room')} */
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
                                /* {...register('floorplan_informations[' + roomList.length + 1 + '].floor')} */
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
                                /* {...register('floorplan_informations[' + roomList.length + 1 + '].area')} */
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
        </>
    )
})

const textFieldStyle = {
    width: '300px',
    height: '40px',
    borderRadius: '5px',
    background: '#eee',
    paddingLeft: '15px',
    paddingTop: '5px'
}

export default FloorplanInformations
