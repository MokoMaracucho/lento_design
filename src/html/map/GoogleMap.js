import React, { useEffect } from 'react'

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

import CustomMarker  from './CustomMarker'

import mapStyle from './css/MapStyle'

import './css/GoogleMap.scss'

const GoogleMap = (props) => {
 
    const _mapLoaded = (mapProps, map) => {
        map.setOptions({
            styles: mapStyle
        })
    }

    /* const [mapStyle, setMapStyle] = useState([]) */

    /* const drawMarker = () => {
        const state = {
            cords: [
                {latitude: 51.54015818523244, longitude: 5.995251772262631}
            ]
        }

        return state.cords.map((store, i) => {
            return ( 
                <Marker
                    key={i}
                    id={i}
                    position={{
                        lat: store.latitude,
                        lng: store.longitude
                    }}
                    onClick={() => console.log("Event Hanlder Called")}
                >
                    TEST
                </Marker>
            )
        })
    } */

    useEffect(() => {
        /* drawMarker() */
    })

    const image = () => {
        return (
            <> 
                <div style={{width: '200px', height: '200px', backgroundColor: 'red'}}></div>
            </>
        )   
    }

    return (
        <>
            <div
                id='map'
                class={props.map_CLASSNAME}
            >
                <Map
                    style={{height: props.height}}
                    google={props.google}
                    onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
                    zoom={11}
                    initialCenter={{ 
                        lat: 51.54015818523244, 
                        lng: 5.995251772262631
                    }}
                    defaultOptions={{
                        mapId: 'dbb29a4f0be1f983',
                        disableDefaultUI: true, // disable default map UI
                        draggable: true, // make map draggable
                        keyboardShortcuts: false, // disable keyboard shortcuts
                        scaleControl: true, // allow scale controle
                        scrollwheel: true, // allow scroll wheel
                        /* styles: mapStyle // change default map styles */
                    }}
                >
                    <Marker
                        icon={image}
                        position={{
                            lat: 51.54015818523244, // latitude to position the marker
                            lng: 5.995251772262631 // longitude to position the marker
                        }}
                    >
                        <CustomMarker />
                    </Marker>
                    {/* {drawMarker()} */}
                </Map>
            </div>
        </>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_API
})(GoogleMap)