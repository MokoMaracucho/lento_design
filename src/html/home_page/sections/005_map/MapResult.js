import React from 'react'

import MapSearchForm from './MapSearchForm'
/* import FilterMapSearch from './FilterMapSearch' */
/* import ContactUsForMore from './ContactUsForMore' */
import VhesManager from '../../../vhes/VhesManager'
/* import DiscoverMore from './DiscoverMore' */

import './css/MapResult.scss'

const MapResult = (props) => {
    return (
        <>
            <MapSearchForm />
            <VhesManager
                card_CLASSNAME={'square_card_CLASSNAME p-small'}
                rounded_card_BOOLEAN={false}
                display_list_CLASSNAME={'wrap_list_CONTAINER'}
            />
        </>
    )
}

export default MapResult