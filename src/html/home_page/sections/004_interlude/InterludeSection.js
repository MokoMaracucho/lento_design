import React from 'react'

import Quote from './Quote'
import ArcSection004 from './ArcSection004'

import './css/InterludeSection.scss'
/* import '../css/Sections.scss' */

const InterludeSection = (props) => {
    return (
        <>
            <section
                id='section004_SECTION'
            >
                {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2370.28 1908.78">
                    <defs>
                        <clipPath id="clip-path" transform="translate(146.49 150.83)">
                            <rect class="cls-1" x="-22.63" y="-37.37" width="1502.09" height="1017.25"/>
                        </clipPath>
                        <linearGradient id="linear-gradient" x1="11.22" y1="768.41" x2="467.45" y2="768.41" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#fff"/>
                            <stop offset="1" stop-color="#fff" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="linear-gradient-2" x1="534.69" y1="437.47" x2="1024.54" y2="437.47" gradientTransform="translate(1304.19 540.47) rotate(180)" />
                        <linearGradient id="linear-gradient-3" x1="834.41" y1="1037.98" x2="2223.79" y2="1037.98" />
                        <linearGradient id="linear-gradient-4" x1="747.57" y1="964" x2="1921.71" y2="964" gradientTransform="matrix(-1, 0, 0, 1, 1775.22, 0)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#fff"/><stop offset="0.44" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                    <g class="cls-2">
                        <rect class="cls-3" x="123.86" y="113.46" width="1502.09" height="1017.25"/>
                        <path class="cls-4" d="M467,765.15v239.16h-111V765.15c0-87.48-46.65-129.35-116.61-129.35s-116.6,41.87-116.6,129.35V813h84.6v39.37h-84.6v151.76h-111v-239c0-153.55,91.41-232.65,227.61-232.65S467,610.67,467,765.15Z" transform="translate(146.49 150.83)"/>
                        <path class="cls-5" d="M280.15,106.49V-150.33H399.36V106.49c0,93.94,50.09,138.91,125.22,138.91s125.21-45,125.21-138.91V55.07H558.94V12.79h90.85v-163H769V106.49c0,164.89-98.17,249.83-244.42,249.83S280.15,272.38,280.15,106.49Z" transform="translate(146.49 150.83)"/>
                        <path class="cls-6" d="M2223.29,1028.05v729.4H1884.73v-729.4c0-266.78-142.26-394.5-355.64-394.5s-355.62,127.72-355.62,394.5v146.06h258v120.06h-258V1757H834.91v-729c0-468.29,278.81-709.53,694.18-709.53S2223.29,556.92,2223.29,1028.05Z" transform="translate(146.49 150.83)"/>
                        <path class="cls-7" d="M-146,955.61v616.32H140.08V955.61c0-225.43,120.21-333.35,300.5-333.35S741.07,730.18,741.07,955.61V1079h-218v101.45h218v391.09h286.07V955.61c0-395.7-235.58-599.54-586.56-599.54S-146,557.51-146,955.61Z" transform="translate(146.49 150.83)"/>
                    </g>
                </svg> */}
                <div id='test_background_DIV'></div>
                <svg id="background_SVG" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 964"><defs><clipPath id="clip-path"><rect class="cls-1" x="-22.63" y="-37.37" width="1502.09" height="1017.25"/></clipPath><linearGradient id="linear-gradient" x1="11.22" y1="768.41" x2="467.45" y2="768.41" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="linear-gradient-2" x1="534.69" y1="437.47" x2="1024.54" y2="437.47" gradientTransform="translate(1304.19 540.47) rotate(180)" /><linearGradient id="linear-gradient-3" x1="834.41" y1="1037.98" x2="2223.79" y2="1037.98" /><linearGradient id="linear-gradient-4" x1="747.57" y1="964" x2="1921.71" y2="964" gradientTransform="matrix(-1, 0, 0, 1, 1775.22, 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="0.44" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><g class="cls-2"><rect class="cls-3" x="-22.63" y="-37.37" width="1502.09" height="1017.25"/><path class="cls-4" d="M467,765.15v239.16h-111V765.15c0-87.48-46.65-129.35-116.61-129.35s-116.6,41.87-116.6,129.35V813h84.6v39.37h-84.6v151.76h-111v-239c0-153.55,91.41-232.65,227.61-232.65S467,610.67,467,765.15Z"/><path class="cls-5" d="M280.15,106.49V-150.33H399.36V106.49c0,93.94,50.09,138.91,125.22,138.91s125.21-45,125.21-138.91V55.07H558.94V12.79h90.85v-163H769V106.49c0,164.89-98.17,249.83-244.42,249.83S280.15,272.38,280.15,106.49Z"/><path class="cls-6" d="M2223.29,1028.05v729.4H1884.73v-729.4c0-266.78-142.26-394.5-355.64-394.5s-355.62,127.72-355.62,394.5v146.06h258v120.06h-258V1757H834.91v-729c0-468.29,278.81-709.53,694.18-709.53S2223.29,556.92,2223.29,1028.05Z"/><path class="cls-7" d="M-146,955.61v616.32H140.08V955.61c0-225.43,120.21-333.35,300.5-333.35S741.07,730.18,741.07,955.61V1079h-218v101.45h218v391.09h286.07V955.61c0-395.7-235.58-599.54-586.56-599.54S-146,557.51-146,955.61Z"/></g></svg>
                <div
                    id='section004_CONTAINER'
                >
                    <Quote />
                    <div id='arcSection004_DIV'>
                        <ArcSection004 />
                    </div>
                </div>
                    <img id='image_001' src='/assets/images/bitmap/jpg/QuoteImage1.jpg' alt='QuoteImage1' />
                    <img id='image_002' src='/assets/images/bitmap/jpg/QuoteImage2.jpg' alt='QuoteImage2' />
            </section>
        </>
    )
}

export default InterludeSection