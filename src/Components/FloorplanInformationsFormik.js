import React, { Fragment } from 'react'

import axios from 'axios'

import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik'

const FloorplanInformationsFormik = (props) => {

    return (
        <>
            <Formik
                initialValues={{
                    floorplan_informations: [
                        {
                            room: '',
                            floor: '',
                            area: ''
                        }
                    ]
                }}
                onSubmit={( data ) => {
                    console.log(data)
                    props.next(data)
                }}
            >
            {({
                values,
                handleChange,
                handleBlur
            }) => (
                <Form>
                    <FieldArray name={'floorplan_informations'}>
                        {({ insert, push, remove}) => {
                            return (
                                <div>
                                    {values.floorplan_informations.length > 0 && values.floorplan_informations.map((room, index) => (
                                        <>
                                            <Fragment>
                                                <div className='row' key={index}>
                                                    <label htmlFor={`floorplan_informations.${index}.room`}>Room</label>
                                                    <Field name={`floorplan_informations.${index}.room`} />

                                                    <label htmlFor={`floorplan_informations.${index}.floor`}>Floor</label>
                                                    <Field name={`floorplan_informations.${index}.floor`} />

                                                    <label htmlFor={`floorplan_informations.${index}.area`}>Area</label>
                                                    <Field name={`floorplan_informations.${index}.area`} />
                                                </div>
                                            </Fragment>

                                            <div className='col'>
                                                <button type='button' className='secondary' onClick={() => remove(index)} >X</button>
                                            </div>
                                        </>
                                    ))}
                                    <button onClick={() => push({room: '', floor: '', area: ''})}>Add room</button>
                                    {/* {errors.users && typeof errors.users === 'string' && <p className={'error'}>{errors.users}</p>} */}
                                </div>
                            )
                        }}
                    </FieldArray>

                    {/* <FieldArray name='friends'>
                        {({ remove, push }) => (
                        <div>
                            {values.friends.length > 0 && values.friends.map((friend, index) => (
                                <div className='row' key={index}>
                                <div className='col'>
                                    <label htmlFor={`friends.${index}.name`}>Name</label>
                                    <Field name={`friends.${index}.name`} placeholder='Jane Doe' type='text' />
                                    <ErrorMessage name={`friends.${index}.name`} component='div' className='field-error' />
                                </div>
                                <div className='col'>
                                    <label htmlFor={`friends.${index}.email`}>Email</label>
                                    <Field name={`friends.${index}.email`} placeholder='jane@acme.com' type='email' />
                                    <ErrorMessage name={`friends.${index}.name`} component='div' className='field-error' />
                                </div>
                                <div className='col'>
                                    <button type='button' className='secondary' onClick={() => remove(index)} >X</button>
                                </div>
                                  </div>
                                ))}
                              <button type='button' className='secondary' onClick={() => push({ name: '', email: '' })}>Add Friend</button>
                            </div>
                          )}
                        </FieldArray> */}

                    <button type='submit'>Submit</button>
                </Form>
            )}
            </Formik>
        </>
    )
}

export default FloorplanInformationsFormik

/* import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'

const initialValues = {
    friends: [
        {
            name: '',
            email: ''
        },
    ]
}

const FloorplanInformationsFormik = () => (

    <div>
        <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500))
                alert(JSON.stringify(values, null, 2))
            }}
        >
        {({ values }) => (
            <Form>
                <FieldArray name='friends'>
                    {({ insert, remove, push }) => (
                        <div>
                            {values.friends.length > 0 && values.friends.map((friend, index) => (
                                <div className='row' key={index}>
                                    <div className='col'>
                                        <label htmlFor={`friends.${index}.name`}>Name</label>
                                        <Field name={`friends.${index}.name`} placeholder='Jane Doe' type='text' />
                                        <ErrorMessage name={`friends.${index}.name`} component='div' className='field-error' />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor={`friends.${index}.email`}>Email</label>
                                        <Field name={`friends.${index}.email`} placeholder='jane@acme.com' type='email' />
                                        <ErrorMessage name={`friends.${index}.name`} component='div' className='field-error' />
                                    </div>
                                    <div className='col'>
                                        <button type='button' className='secondary' onClick={() => remove(index)}>X</button>
                                    </div>
                                </div>
                            ))}
                            <button type='button' className='secondary' onClick={() => push({ name: '', email: '' })}> Add Friend</button>
                        </div>
                    )}
                </FieldArray>
                <button type='submit'>Invite</button>
            </Form>
        )}
    </Formik>
  </div>
)

export default FloorplanInformationsFormik */
