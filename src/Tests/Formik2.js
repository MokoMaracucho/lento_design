import React, { useState } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const stepOneValidationSchema = yup.object({
    name: yup.object({
        first_name: yup.string().required().label('First name'),
        last_name: yup.string().required().label('Last name')
    })
})

const stepTwoValidationSchema = yup.object({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().label('Password')
})

const Formik2 = () => {
    const [data, setData] = useState({
        name: {
            first_name: '',
            last_name: '',
        },
        email: '',
        password: ''
    })

    const [currentStep, setCurrentStep] = useState(0)

    const makeRequest = (formData) => {
        console.log('form is submitted', formData)
    }

    const handleNextStep = (newData, final = false) => {
        setData((prev) => ({ ...prev, ...newData }))

        if(final) {
            makeRequest(newData)
            return
        }

        setCurrentStep((prev) => prev + 1);
    }

    const handlePrevStep = (newData) => {
      setData((prev) => ({ ...prev, ...newData }))
      setCurrentStep((prev) => prev - 1);
    }
    
    console.log('data', data)

    const steps = [
        <StepOne next={handleNextStep} data={data} />, 
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />
    ]

    return (
        <>
            <div>
                {steps[currentStep]}
            </div>
        </>
    )
}

const StepOne = (props) => {

    const handleSubmit = (values) => {
        props.next(values)
    }

    return (
        <Formik
            validationSchema={stepOneValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
                {() => (
                    <Form>
                        <p>First name</p>
                        <Field name='name.first_name'/>
                        <ErrorMessage name='name.first_name' />

                        <p>Last name</p>
                        <Field name='last_name'/>
                        <ErrorMessage name='name.last_name' />

                        <button type='submit'>Next</button>
                    </Form>
                )}
        </Formik>
    )
}

const StepTwo = (props) => {

    const handleSubmit = (values) => {
        props.next(values, true)
    }

    return (
        <Formik
            validationSchema={stepTwoValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {({ values }) => (
                <Form>
                    <p>Email</p>
                    <Field name='email'/>
                    <ErrorMessage name='email' />

                    <p>Password</p>
                    <Field name='password'/>
                    <ErrorMessage name='password' />

                    <button type='button' onClick={() => props.prev(values)}>Back</button>
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default Formik2
