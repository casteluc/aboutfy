import React from 'react'

import { Button } from './LoginButtonStyle'

export default function LoginButton() {
    return (
        <Button href="https://aboutfy-backend.herokuapp.com/login">
            <img src={require('../../../img/spotify-logo.svg')} alt=""/>
            <h3>Logar com o Spotify</h3>
        </Button>
    )
}