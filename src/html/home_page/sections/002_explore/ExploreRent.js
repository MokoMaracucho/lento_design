import React from 'react'

import './css/ExploreRent.scss'

const ExploreRent = (props) => {
    return (
        <>
            <div id='rent_DIV'>
                <svg width="42" height="45" viewBox="0 0 42 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41 43.569H41.5V43.069V21.7441C41.5 14.7596 39.4613 9.43209 35.8392 5.85119C32.2187 2.27182 27.0792 0.5 21 0.5C14.9193 0.5 9.78006 2.29345 6.16024 5.88283C2.53908 9.47354 0.5 14.8004 0.5 21.7441V43.0562V43.5562H1H10.7541H11.2541V43.0562V30.0247H18.1879H18.6879V29.5247V26.0142V25.5142H18.1879H11.2541V21.7441C11.2541 17.9279 12.256 15.1829 13.9361 13.3947C15.6126 11.6103 18.0283 10.7104 21 10.7104C23.9717 10.7104 26.3874 11.6103 28.0639 13.3947C29.744 15.1829 30.7459 17.9279 30.7459 21.7441V43.069V43.569H31.2459H41Z" fill="#5398D4" stroke="black"/>
                </svg>
                <p className='p-large-white'>
                    Rent.
                </p>
                <div id='rent_FOOTER'>
                    <p className='p-medium white_COLOR'>
                        Explore
                    </p>
                    <svg width="59" height="31" viewBox="0 0 59 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="58" height="30" rx="15" stroke="#EEEEEE"/>
                        <path d="M35.4794 12.9795L34.7222 13.7368L35.95 14.9645L18.0001 14.9645V16.0355L35.95 16.0355L34.7222 17.2633L35.4794 18.0206L38 15.5L35.4794 12.9795Z" fill="white"/>
                        <path d="M35.4794 12.9795L34.7221 13.7368L35.9499 14.9645L18 14.9645V16.0355L35.9499 16.0355L34.7221 17.2633L35.4794 18.0206L37.9999 15.5L35.4794 12.9795Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default ExploreRent