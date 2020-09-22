import React from 'react'

import LoginButton from '../../components/Login/LoginButton/index'
import Footer from '../../components/Footer/index'

import "./Login.css"

export default props => {

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-text">
                    <h2>Descubra o que você mais escutou durante a quarentena!</h2>
                    <p>
                        Compartilhe com os seus amigos quais foram as suas músicas mais 
                        ouvidas durante esse período de isolamento e apoie os artistas que você admira.
                    </p>
                </div>

                <LoginButton />
            </div>

            <Footer />
        </div>
    )
}