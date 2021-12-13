import React from 'react'

import LogoBlack from '../ui/logo/LogoBlackSVG'

import './css/FooterNav.scss'

const FooterNav = (props) => {
    return (
        <>
            <div id='footerNav_DIV'>
                <div id='logo_pivracyPolicy_DIV'>
                    <LogoBlack
                        width={200}
                        height={50}
                    />
                    <p className='p-medium'>Privacy policy</p>
                </div>
                <div id='company_DIV' className='nav-column p-medium'>
                    <p className='text-bold'>Company</p>
                    <p  className='grey_COLOR'>Our focus</p>
                    <p  className='grey_COLOR'>Services</p>
                    <p  className='grey_COLOR'>Sign up</p>
                    <p  className='grey_COLOR'>Contact</p>
                </div>
                <div id='contact_DIV' className='nav-column p-medium'>
                    <p className='text-bold'>Contact</p>
                    <p  className='grey_COLOR'>Our focus</p>
                    <p  className='grey_COLOR'>Services</p>
                    <p  className='grey_COLOR'>Sign up</p>
                    <p  className='grey_COLOR'>Contact</p>
                </div>
            </div>
        </>
    )
}

export default FooterNav