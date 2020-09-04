import React from 'react'

import LoginText from '../../components/Login/LoginText'
import LoginButton from '../../components/Login/LoginButton'

import "./Login.css"

export default props => {

    return (
        <div className="login">
            <LoginText />
            <LoginButton />
        </div>
    )
}