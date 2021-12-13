import React from 'react'

import './css/WhatOurCustomerAreSaying.scss'

const WhatOurCustomerAreSaying = (props) => {
    return (
        <>
            <div id='quote-panel'>
                <div>
                    <svg id='coma_SVG' width="37" height="25" viewBox="0 0 37 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.168 24.416L9.96 0.799995H18.312L13.128 24.416H0.168ZM18.696 24.416L28.488 0.799995H36.84L31.56 24.416H18.696Z" fill={props.coma_COLOR}/>
                    </svg>
                </div>
                <div>
                    <h4 className={props.title_COLOR}>
                        What Our Customer<br/>
                        are Saying
                    </h4>
                    <p className='p-medium margin-top-large'>
                        Great services with goof quality apartments
                    </p>
                    <h4 id='client-quote' class='p-small margin-top-large grey_COLOR'>
                        Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam 
                    </h4>
                    <div className='client-quote-card margin-top-large'>
                        <img id='photo-quote' src="/assets/images/bitmap/jpg/user_saying.jpg" alt="" />
                        <div id='photo-label'>
                            <p className='p-medium client-infos' id='nameSurname'>
                                Name Surname
                            </p>
                            <span className='p-medium client-infos grey_COLOR'>
                                client
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatOurCustomerAreSaying