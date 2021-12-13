import React from 'react'

import ExploreRent from './ExploreRent'
import ExploreRentOut from './ExploreRentOut'
import Statistics from './Statistics'

import './css/ExploreSection.scss'
import '../css/Sections.scss'

const ExploreSection = (props) => {
    return (
        <>
            <section
                id='section002_SECTION'
            >
                <div
                    id='section002_CONTAINER'
                >
                    <div id='scroll_DIV'>
                        <svg id='scrollArrow_SVG' width='7' height='20' viewBox='0 0 7 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M6.02051 17.4794L5.26324 16.7221L4.03547 17.9499L4.03547 0L2.96452 -4.68126e-08L2.96452 17.9499L1.73671 16.7221L0.97944 17.4794L3.49999 19.9999L6.02051 17.4794Z' fill='black'/>
                        </svg>
                        <div className='p-medium'>
                            scroll
                        </div>
                    </div>
                    <div id='rent_rentOut_DIV'>
                        <ExploreRent />
                        <ExploreRentOut />
                    </div>
                    <div id='statistics_DIV' className='p-large'>
                        <Statistics />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreSection