import React from 'react'

import LoginText from '../../components/Login/LoginText'
import LoginButton from '../../components/Login/LoginButton'

import "./Login.css"
import Footer from '../../components/Footer/Footer'

export default props => {

    return (
        <div className="login">
            <div className="login-container">
                <LoginText />
                <LoginButton />
            </div>

            <Footer />
        </div>
    )
}