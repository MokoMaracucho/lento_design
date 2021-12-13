import React from 'react'

/* import axios from 'axios' */

/* import { Redirect, useHistory } from 'react-router-dom' */

import RoundedButton from '../../../ui/buttons/RoundedButton'

import './css/SearchForm.scss'

const SearchForm = (props) => {

    let form_STATE ={
        location: null,
        property_type: null,
        range_min: 0,
        range_max: 2000
    }

    const handleChange = (event) => {
        console.log(event.target.id)
        console.log(event.target.value)
        if(event.target.id === 'location') {
            form_STATE.location = event.target.value
            console.log(form_STATE.location)
        }
    }

    return (
        <>
            <form
                id='search_home_FORM'
                className='p-medium'
            >
                <div id='filters_DIV'>
                    <div className='filterType_DIVS border-left'>
                        <label for='location'>
                            <span>Location</span>
                        </label>
                        <input type='text' id='location' className='grey_COLOR' name='location' placeholder='Oostrum'
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    <div className='filterType_DIVS border-left padding-left'>
                        <label for='propertyType'>
                            <span>Property type</span>
                        </label>
                        <input type='text' id='propertyType' className='grey_COLOR' name='propertyType' placeholder='Room' />
                    </div>
                    <div className='filterType_DIVS border-left padding-left'>
                        <label for='range'>
                            <span>Range / weeek</span>
                        </label>
                        <div id='range_INPUTS'>
                            <input type='text' id='min-range' className='grey_COLOR' name='min-range' placeholder='1000€' />
                            <span id='range_SPAN' className='grey_COLOR'> - </span>
                            <input type='text' id='min-range' className='grey_COLOR' name='max-range' placeholder='2700€' />
                        </div>
                    </div>
                    <div className='filterType_DIVS padding-left'>
                        <label for='date'>
                            <span>Date</span>
                        </label>
                        <div id='datePickers_home_DIV'>
                        </div>
                    </div>
                </div>
                <RoundedButton
                    button_CLASSNAME={'blue_ROUNDEDBUTTON extra_large_ROUNDEDBUTTON cursor-pointer'}
                    button_ID={'services_header_BUTTON'}
                    span_text_CLASSNAME={'p-medium white_COLOR'}
                    button_TEXT={'Search'}
                    Arrow002={false}
                    redirect_BOOLEAN={true}
                    form_STATE={form_STATE}
                />
            </form>
        </>
    )
}

export default SearchForm