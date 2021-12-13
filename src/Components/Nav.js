import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { ButtonBase } from '@mui/material'
import List from '@mui/icons-material/List'

import '../Styles/Components/Nav.scss'

const Nav = () => {

    const navigate = useNavigate()

    const addLivingPlace = () => {
        navigate('/living_place_registration/some_questions')
    }

    return (
        <>
            <nav>
                <ul>
                    <Button
                        variant='outlined'
                        style={{
                            borderRadius: 50,
                            fontFamily: 'DMSansMedium'
                        }}
                        endIcon={
                            <KeyboardArrowDownIcon
                                fontSize="small"
                            />
                        }
                    >
                        EN
                    </Button>
                    <ButtonBase>About us</ButtonBase>
                    <ButtonBase>Sign up</ButtonBase>
                    <ButtonBase>Log in</ButtonBase>
                    <ButtonBase
                        onClick={addLivingPlace}
                    >
                        Add living place
                    </ButtonBase>
                    <Button
                        variant='contained'
                        style={{
                            backgroundColor: '#5398D4',
                            borderRadius: 50,
                            fontFamily: 'DMSansMedium',
                            boxShadow: 'unset'
                        }}
                    >
                        Services
                    </Button>
                    <ButtonBase
                        style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: '#5398D4',
                            borderRadius: 50,
                            fontFamily: 'DMSansMedium',
                            boxShadow: 'unset'
                        }}
                    >
                        <List />
                    </ButtonBase>
                </ul>
            </nav>
        </>
    )
}

export default Nav
