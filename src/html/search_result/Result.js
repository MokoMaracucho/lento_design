import React from 'react'

import GoogleMap from '../map/GoogleMap'
import ListResult from './ListResult'

import './css/Result.scss'

const Result = (props) => {
    return (
        <>
            <section
                id='searchResult_SECTION'
            >
                <div id='left_searchResult_DIV'>
                    <GoogleMap 
                        height={'130vh'}
                        map_CLASSNAME={'map_searchResult_CLASSNAME'}
                    />
                </div>
                <div id='right_searchResult_DIV'>
                    <div id='numberResult_location_SearchResult_DIV'>
                        <h4>138 Results in</h4>
                        <h4 id='search-place' className='grey_COLOR' >Oostrum, NL</h4>
                    </div>
                    <ListResult />
                </div>
            </section>
        </>
    )
}

export default Result