import React from 'react'

import FacebookSVG from '../icons/social_networks/FacebookSVG'
import InstagramSVG from '../icons/social_networks/InstagramSVG'
import LinkedInSVG from '../icons/social_networks/LinkedInSVG'
import TwitterSVG from '../icons/social_networks/TwitterSVG'

import './css/SocialNetworks.scss'

const SocialNetworks = (props) => {
    return (
        <>
            <div className={props.socialNetworks_CLASSNAME}>
                <div className='socialNetwork_DIV'>
                    <FacebookSVG
                        width={13}
                        height={20}
                        color={props.color}
                    />
                </div>
                <div className='socialNetwork_DIV'>
                    <InstagramSVG
                        width={20}
                        height={20}
                        color={props.color}
                    />
                </div>
                <div className='socialNetwork_DIV'>
                    <LinkedInSVG
                        width={20}
                        height={20}
                        color={props.color}
                    />
                </div>
                <div className='socialNetwork_DIV'>
                    <TwitterSVG
                        width={20}
                        height={20}
                        color={props.color}
                    />
                </div>
            </div>
        </>
    )
}

export default SocialNetworks