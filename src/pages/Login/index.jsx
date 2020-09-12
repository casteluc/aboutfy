import React from 'react'

import LoginText from '../../components/Login/LoginText/index'
import LoginButton from '../../components/Login/LoginButton/index'
import Footer from '../../components/Footer/index'

import "./Login.css"

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