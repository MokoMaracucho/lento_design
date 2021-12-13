import React from 'react'

import RoundedButton from '../../../ui/buttons/RoundedButton'

import './css/MapSearchForm.scss'

const MapSearchForm = (props) => {
    return (
        <>
            <form
                id='map_FORM'
                className='p-medium'
            >
                <div id='numberResult_location_search_DIV'>
                    <div id='numberResult_location_DIV'>
                        <h4>138 Results in</h4>
                        <h4 id='search-place' className='grey_COLOR' >Oostrum, NL</h4>
                    </div>
                    <RoundedButton
                        button_CLASSNAME={'blue_ROUNDEDBUTTON extra_large_ROUNDEDBUTTON cursor-pointer'}
                        button_ID={'services_header_BUTTON'}
                        span_text_CLASSNAME={'p-medium white_COLOR'}
                        button_TEXT={'Search'}
                        Arrow002={false}
                        redirect_BOOLEAN={false}
                    />
                </div>
                <div id='map_form_DIV'>
                    <div className='border-left'>
                        <label for='propertyType'>
                            <span>Property type</span>
                        </label>
                        <br/>
                        <input type='text' id='propertyType' className='grey_COLOR' name='propertyType' placeholder='Room' />
                    </div>
                    <div className='border-left padding-left'>
                        <label for='range'>
                            <span>Range</span>
                        </label>
                        <br/>
                        <input type='text' id='range' className='grey_COLOR' name='range' placeholder='$1000 - $2700' />
                    </div>
                    <div className=' padding-left'>
                        <label for='date'>
                            <span>Date</span>
                        </label>
                        <br/>
                    <div id='datePickers_map_DIV'>
                    </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default MapSearchForm