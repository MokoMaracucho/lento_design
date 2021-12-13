import React, { Fragment } from 'react'

import { Formik, FieldArray } from 'formik'
import * as yup from 'yup'

import TextInput from './TextInput'

const formSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
    users: yup.array().of(yup.object().shape({
        name: yup.string().required()
    })).min(3).required()
})

const initialValues = {
  floorplan_informations: [
    {
      room: '',
      floor: '',
      area: '',
    },
  ],
};

const Formik1 = () => {

    return (
        <>
            <Formik
                initialValues={{initialValues}}
                validationSchema={formSchema}
                onSubmit={( data ) => console.log(data)}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched
                }) => {
                    console.log(values)
                    return (
                        <form onSubmit={handleSubmit}>

                            <TextInput
                                name={'email'}
                                placeholder={'Email...'}
                                label={'Email'}
                            />

                            <TextInput
                                name={'password'}
                                placeholder={'Password...'}
                                label={'Password'}
                            />

                            <FieldArray name={'users'}>
                                {({insert, push, remove}) => {
                                    return (
                                        <div>
                                            {values.users.map((user, index) => (
                                                <>
                                                    <Fragment key={index}>
                                                        <TextInput
                                                            name={`users.${index}.name`}
                                                            label={`Name - ${index}`}
                                                        />
                                                    </Fragment>

                                                    <button onClick={() => remove(index)}>Remove</button>
                                                </>
                                            ))}

                                            <button onClick={() => push({name: ''})}>Add new user</button>
                                            {errors.users && typeof errors.users === 'string' && <p className={'error'}>{errors.users}</p>}
                                        </div>
                                    )
                                }}
                            </FieldArray>

                            <button type={'submit'}>Submit</button>
                        </form>
                    )
                }}
            </Formik>
        </>
    )
}

export default Formik1
