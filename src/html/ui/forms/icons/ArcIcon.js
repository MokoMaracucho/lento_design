import React from 'react'

import './css/ArcIcon.scss'

const ArcIcon = (props) => {
    return (
        <>
            <svg width={props.width} height={props.height} /* width="23" height="24" */ viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 11.8343V24H17.3914V11.8343C17.3914 7.38461 15.0348 5.25444 11.5 5.25444C7.96516 5.25444 5.60861 7.38461 5.60861 11.8343V14.2704H9.88304V16.2731H5.60861V23.9927H0V11.8343C0 4.02367 4.61885 0 11.5 0C18.3811 0 23 3.97633 23 11.8343Z" fill={props.fill} /* fill="#EEEEEE" *//>
            </svg>
        </>
    )
}

export default ArcIcon