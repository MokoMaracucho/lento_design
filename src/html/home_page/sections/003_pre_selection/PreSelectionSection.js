import React from 'react'

import PreSelectionIntroduction from './PreSelectionIntroduction'
import PreSelectionVhes from './PreSelectionVhes'

import './css/PreSelectionSection.scss'
import '../css/Sections.scss'

const PreSelectionSection = (props) => {
    return (
        <>
            <section
                id='section003_SECTION'
            >
                <div
                    id='section003_CONTAINER'
                >
                    <PreSelectionIntroduction />
                    <PreSelectionVhes />
                </div>
            </section>
        </>
    )
}

export default PreSelectionSection