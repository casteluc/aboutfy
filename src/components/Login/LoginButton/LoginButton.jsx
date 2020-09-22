import React from 'react'

export default function LoginButton() {

    return (
        <a className="login-button" href="https://aboutfy-backend.herokuapp.com/login">
            <img src={require('../../../img/spotify-logo.svg')} alt=""/>
            <h3>Logar com o Spotify</h3>
        </a>
    )
}