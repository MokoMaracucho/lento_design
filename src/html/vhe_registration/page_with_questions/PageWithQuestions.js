import React from 'react'

import Header from '../../header/Header'
import PageWithQuestionsContent from './PageWithQuestionsContent'
import Footer from '../../footer/Footer'

const PageWithQuestions = (props) => {
    return (
        <>
            <Header />
            <PageWithQuestionsContent />
            <Footer />
        </>
    )
}

export default PageWithQuestions