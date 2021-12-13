import React, { useState } from 'react'

import TextInput from '../../ui/forms/inputs/TextInput'
import NumberInput from '../../ui/forms/inputs/NumberInput'
import SelectInput from '../../ui/forms/inputs/SelectInput'
import EmailInput from '../../ui/forms/inputs/EmailInput'
import PictureInput from '../../ui/forms/inputs/PictureInput'
import ValidButton from '../../ui/forms/buttons/ValidButton'

/* import './css/ComplexForm.scss' */

const ComplexForm = (props) => {

    const [complexName, setComplexName] = useState('')
    const [street, setStreet] = useState('')
    const [houseNumber, setHouseNumber] = useState('')
    const [houseNumberExtension, setHouseNumberExtension] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [phoneNumberLandcode, setPhoneNumberLandcode] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [facilitytype, setFacilitytype] = useState('')

    const country_ARRAY = [
        {
            value: 'BE',
            label: 'Belgium'
        },
        {
            value: 'BG',
            label: 'Bulgaria'
        },
        {
            value: 'CZ',
            label: 'Czech Republic'
        },
        {
            value: 'DK',
            label: 'Denmark'
        },
        {
            value: 'DE',
            label: 'Germany'
        },
        {
            value: 'EE',
            label: 'Estonia'
        },
        {
            value: 'IE',
            label: 'Ireland'
        },
        {
            value: 'EL',
            label: 'Greece'
        },
        {
            value: 'ES',
            label: 'SPAIN'
        },
        {
            value: 'FR',
            label: 'France'
        },
        {
            value: 'HR',
            label: 'Croatia'
        },
        {
            value: 'IT',
            label: 'Italy'
        },
        {
            value: 'CY',
            label: 'Cyprus'
        },
        {
            value: 'LV',
            label: 'Latvia'
        },
        {
            value: 'LT',
            label: 'Lithuania'
        },
        {
            value: 'LU',
            label: 'Luxembourg'
        },
        {
            value: 'HU',
            label: 'Hungary'
        },
        {
            value: 'MT',
            label: 'Malta'
        },
        {
            value: 'NL',
            label: 'The Nederlands'
        },
        {
            value: 'AT',
            label: 'Austria'
        },
        {
            value: 'PL',
            label: 'Poland'
        },
        {
            value: 'PT',
            label: 'Portugal'
        },
        {
            value: 'RO',
            label: 'Romania'
        },
        {
            value: 'Si',
            label: 'Slovania'
        },
        {
            value: 'SK',
            label: 'Slovakia'
        },
        {
            value: 'FI',
            label: 'Finland'
        },
        {
            value: 'SE',
            label: 'Sweden'
        },
        {
            value: 'UK',
            label: 'United Kingdom'
        },
        {
            value: 'ME',
            label: 'Montenegro'
        },
        {
            value: 'IS',
            label: 'Iceland'
        },
        {
            value: 'MK',
            label: 'Macedonia'
        },
        {
            value: 'AL',
            label: 'Albania'
        },
        {
            value: 'RS',
            label: 'Serbia'
        },
        {
            value: 'TR',
            label: 'Turkey'
        },
        {
            value: 'MD',
            label: 'Moldavia'
        },
        {
            value: 'AM',
            label: 'Armenia'
        },
        {
            value: 'BY',
            label: 'Belarus'
        },
        {
            value: 'AD',
            label: 'Andorra'
        },
        {
            value: 'MC',
            label: 'Monaco'
        },
        {
            value: 'SM',
            label: 'San Marino'
        },
        {
            value: 'VA',
            label: 'Vatican City'
        },
        {
            value: 'UA',
            label: 'Ukraine'
        },
        {
            value: 'XK',
            label: 'Kosovo'
        },
        {
            value: 'BA',
            label: 'Bosnia and Herzegovina'
        },
        {
            value: 'CH',
            label: 'Switzerland'
        },
        {
            value: 'LI',
            label: 'Liechtenstein'
        },
        {
            value: 'NO',
            label: 'Norway'
        }
    ]

    const phone_number_landcode_ARRAY = [
        {
            value: 'BE',
            label: 'Belgium, +32'
        },
        {
            value: 'BG',
            label: 'Bulgaria, +359'
        },
        {
            value: 'CZ',
            label: 'Czech Republic, +420'
        },
        {
            value: 'DK',
            label: 'Denmark, +45'
        },
        {
            value: 'DE',
            label: 'Germany, +49'
        },
        {
            value: 'EE',
            label: 'Estonia, +372'
        },
        {
            value: 'IE',
            label: 'Ireland, +353'
        },
        {
            value: 'EL',
            label: 'Greece, +30'
        },
        {
            value: 'ES',
            label: 'Spain, +34'
        },
        {
            value: 'FR',
            label: 'France, +33'
        },
        {
            value: 'HR',
            label: 'Croatia, +385'
        },
        {
            value: 'IT',
            label: 'Italy, +39'
        },
        {
            value: 'CY',
            label: 'Cyprus, +357'
        },
        {
            value: 'LV',
            label: 'Latvia, +371'
        },
        {
            value: 'LT',
            label: 'Lithuania, +370'
        },
        {
            value: 'LU',
            label: 'Luxembourg, +352'
        },
        {
            value: 'HU',
            label: 'Hungary, +36'
        },
        {
            value: 'MT',
            label: 'Malta, +356'
        },
        {
            value: 'NL',
            label: 'The Nederlands, +31'
        },
        {
            value: 'AT',
            label: 'Austria, +43'
        },
        {
            value: 'PL',
            label: 'Poland, +48'
        },
        {
            value: 'PT',
            label: 'Portugal, +351'
        },
        {
            value: 'RO',
            label: 'Romania, +40'
        },
        {
            value: 'Si',
            label: 'Slovania, +386'
        },
        {
            value: 'SK',
            label: 'Slovakia, +421'
        },
        {
            value: 'FI',
            label: 'Finland, +358'
        },
        {
            value: 'SE',
            label: 'Sweden, +46'
        },
        {
            value: 'UK',
            label: 'United Kingdom, +44'
        },
        {
            value: 'ME',
            label: 'Montenegro, +382'
        },
        {
            value: 'IS',
            label: 'Iceland, +354'
        },
        {
            value: 'MK',
            label: 'Macedonia, +389'
        },
        {
            value: 'AL',
            label: 'Albania, +355'
        },
        {
            value: 'RS',
            label: 'Serbia, +381'
        },
        {
            value: 'TR',
            label: 'Turkey, +90'
        },
        {
            value: 'MD',
            label: 'Moldavia, +373'
        },
        {
            value: 'AM',
            label: 'Armenia, +374'
        },
        {
            value: 'BY',
            label: 'Belarus, +375'
        },
        {
            value: 'AD',
            label: 'Andorra, +376'
        },
        {
            value: 'MC',
            label: 'Monaco, +377'
        },
        {
            value: 'SM',
            label: 'San Marino, +378'
        },
        {
            value: 'VA',
            label: 'Vatican City, +379'
        },
        {
            value: 'UA',
            label: 'Ukraine, +380'
        },
        {
            value: 'XK',
            label: 'Kosovo, +383'
        },
        {
            value: 'BA',
            label: 'Bosnia and Herzegovina, +387'
        },
        {
            value: 'CH',
            label: 'Switzerland, +41'
        },
        {
            value: 'LI',
            label: 'Liechtenstein, +423'
        },
        {
            value: 'NO',
            label: 'Norway, +47'
        }
    ]

    const facility_type_ARRAY = [
        {
            value: 'kitchen',
            label: 'Kitchen'
        },
        {
            value: 'bathroom',
            label: 'Bathroom'
        },
        {
            value: 'supermarket',
            label: 'Supermarket'
        },
        {
            value: 'fitness',
            label: 'Fitness'
        },
        {
            value: 'common_room',
            label: 'Common room'
        },
        {
            value: 'reception_office',
            label: 'Reception / Office'
        },
        {
            value: 'laundry',
            label: 'Laundry'
        },
        {
            value: 'relax',
            label: 'Relax'
        }
    ]

    return (
        <>
            <form>
                <TextInput
                    label={'Complex name'}
                    name={'complex_name'}
                    placeholder={'Complex name'}
                    className={'textInput_version001 p-medium'}
                    onChange={(e) => setComplexName(e.target.value)}
                />
                <TextInput
                    label={'Street'}
                    name={'street'}
                    placeholder={'Street'}
                    className={'textInput_version001 p-medium'}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <NumberInput
                    label={'House number'}
                    name={'house_number'}
                    onChange={(e) => setHouseNumber(e.target.value)}
                />
                <TextInput
                    label={'House number extension'}
                    name={'house_number_extension'}
                    className={'textInput_version001 p-medium'}
                    onChange={(e) => setHouseNumberExtension(e.target.value)}
                />
                <TextInput
                    label={'City'}
                    name={'city'}
                    className={'textInput_version001 p-medium'}
                    onChange={(e) => setCity(e.target.value)}
                />
                <SelectInput
                    text={'Country'}
                    name={'country'}
                    items={country_ARRAY}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <NumberInput
                    label={'Postal code'}
                    name={'postal_code'}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
                <SelectInput
                    text={'Phone number landcode'}
                    name={'phone_number_landcode'}
                    items={phone_number_landcode_ARRAY}
                    onChange={(e) => setPhoneNumberLandcode(e.target.value)}
                />
                <NumberInput
                    label={'Phone number'}
                    name={'phone_number'}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <EmailInput
                    label={'Email'}
                    name={'email'}
                    placeholder={'My email'}
                    className={'textInput_version001 p-medium'}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* Opening hours */}
                <SelectInput
                    text={'Facility type'}
                    name={'facility_type'}
                    items={facility_type_ARRAY}
                    onChange={(e) => setFacilitytype(e.target.value)}
                />
                <PictureInput
                />
                <ValidButton
                    validButton_CLASSNAME={'validButton_CLASSNAME cursor-pointer'}
                    validButton_ID={'signup_VALIDBUTTON'}
                    span_text_CLASSNAME={'p-medium white_COLOR'}
                    validButton_TEXT={'Sign up'}
                    redirect_BOOLEAN={true}
                />
            </form>
        </>
    )
}

export default ComplexForm