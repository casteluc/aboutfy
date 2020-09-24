import React from 'react'

import LoginButton from '../../components/Login/LoginButton'
import LoginText from '../../components/Login/LoginText'
import Footer from '../../components/Footer'

import "./Login.css"

export default function Login() {

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