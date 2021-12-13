import React, { useState } from 'react'

import TextInput from '../../ui/forms/inputs/TextInput'
import EmailInput from '../../ui/forms/inputs/EmailInput'
import PasswordInput from '../../ui/forms/inputs/PasswordInput'
import CheckBoxInput from '../../ui/forms/inputs/CheckBoxInput'
import ArcIcon from '../../ui/forms/icons/ArcIcon'
import ValidButton from '../../ui/forms/buttons/ValidButton'

import './css/CreateAccountForm.scss'

const CreateAccountForm = (props) => {

    const [firstName, setFirstName] = useState('')
    /* const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirmation, setEmailConfirmation] = useState('')
    const [userRole, setUserRole] = useState()
    const [rememberMe, setRememberMe] = useState(false)
    const [newsletter, setNewsletter] = useState(false)
    const [termsandConditions, setTermsAndConditions] = useState(false) */

    return (
        <>
            <div id='signUp-form-CONTAINER'>
                <h4>Sign up</h4>
                <p className='p-medium' style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '20px' }}>Fill in the information below to create your account.</p>
                <form>
                    <div id='signup-form-FIELDS'>
                        <div id='signup-fields-LEFTPANEL'>
                            <TextInput
                                name={'firstName'}
                                label={'First name'}
                                placeholder={'My first name'}
                                className={'textInput_version001 p-medium'}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <EmailInput
                                name={'email'}
                                label={'Email'}
                                placeholder={'My email'}
                                className={'textInput_version001 p-medium'}
                            />
                            <PasswordInput
                                name={'password'}
                                label={'Password'}
                                placeholder={'My password'}
                                className={'textInput_version001 p-medium'}
                                passwordRules_BOOLEAN={true}
                                passwordRules_TEXT={'Must be 8 charachters'}
                                passwordRules_CLASSNAME={'p-small'}
                            />
                        </div>
                        <div id='signup-fields-RIGHTPANEL'>
                            <TextInput
                                name={'lastname'}
                                label={'Last name'}
                                placeholder={'My last name'}
                                className={'textInput_version001 p-medium'}
                            />
                            <EmailInput
                                name={'confirm_email'}
                                label={'Confirm email'}
                                placeholder={'Confirm my email'}
                                className={'textInput_version001 p-medium'}
                            />
                            <PasswordInput
                                name={'confirm_password'}
                                label={'Confirm password'}
                                placeholder={'Confirm my password'}
                                className={'textInput_version001 p-medium'}
                            />
                        </div>
                    </div>
                    <h4>How are you planning to use Lento?</h4>
                    <p className='p-medium' style={{ marginTop: '20px', marginBottom: '20px' }}>You can always change your preferences later on.</p>
                    <div id='arc_divs_CONTAINER'>
                        <div className='arc_div_CLASSNAME'>
                            <ArcIcon
                                width={23}
                                height={24}
                                fill={'#eee'}
                            />
                            <div>
                                <p className='p-medium'>To rent</p>
                                <div className='p-small'>Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue.</div>
                            </div>
                        </div>
                        <div className='arc_div_CLASSNAME'>
                            <ArcIcon
                                width={23}
                                height={24}
                                fill={'#eee'}
                            />
                            <div>
                                <p className='p-medium'>To rent out</p>
                                <div className='p-small'>Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue.</div>
                            </div>
                        </div>
                        <div className='arc_div_CLASSNAME'>
                            <ArcIcon
                                width={23}
                                height={24}
                                fill={'#eee'}
                            />
                            <div>
                                <p className='p-medium'>As employer</p>
                                <div className='p-small'>Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue.</div>
                            </div>
                        </div>
                    </div>
                    <div id='checkboxes_DIV'>
                        <CheckBoxInput
                            name={'rememberme'}
                            label={'Remember me'}
                            /* checked={true} */
                            className={'checkboxInput_version001 p-medium'}
                        />
                        <CheckBoxInput
                            name={'newsletter'}
                            label={'Newsletter'}
                            /* checked={true} */
                            className={'checkboxInput_version001 p-medium'}
                        />
                        <CheckBoxInput
                            name={'termsandconditions'}
                            label={'I agree to all Terms and conditions'}
                            /* checked={true} */
                            className={'checkboxInput_version001 p-medium'}
                        />
                        <ValidButton
                            validButton_CLASSNAME={'validButton_CLASSNAME cursor-pointer'}
                            validButton_ID={'signup_VALIDBUTTON'}
                            span_text_CLASSNAME={'p-medium white_COLOR'}
                            validButton_TEXT={'Sign up'}
                            redirect_BOOLEAN={true}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateAccountForm