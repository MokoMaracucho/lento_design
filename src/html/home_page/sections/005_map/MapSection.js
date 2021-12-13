import React from 'react'

import GoogleMap from '../../../map/GoogleMap'
import WhatOurCustomerAreSaying from './WhatOurCustomerAreSaying'
import MapResult from './MapResult'

import './css/MapSection.scss'
import '../css/Sections.scss'

const MapSection = (props) => {
    return (
        <>
            <section
                id='section005_SECTION'
            >
                <div id='left_mapSection_DIV'>
                    <div id='map_DIV'>
                        <GoogleMap
                            map_CLASSNAME={'map_home_CLASSNAME'}
                            height={'800px'}
                        />
                    </div>
                    <div id='whatOurCustomerAreSaying_left_DIV'>
                        <WhatOurCustomerAreSaying
                            coma_COLOR={'black_COLOR'}
                            title_COLOR={'black_COLOR'}
                            />
                    </div>
                </div>
                <div id='right_mapSection_DIV'>
                    <div id='map_result_DIV'>
                        <MapResult />
                    </div>
                    <div id='whatOurCustomerAreSaying_right_DIV'>
                        <WhatOurCustomerAreSaying
                            coma_COLOR={'white_COLOR'}
                            title_COLOR={'white_COLOR'}
                        />
                    </div>
                    {/* <div id='map_result_DIV'>
                        <MapResult />
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default MapSection