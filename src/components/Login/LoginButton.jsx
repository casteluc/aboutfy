import React from 'react'

export default props => {

    return (
        <a className="login-button" href="http://localhost:8888/login">
            <img src={require('../../img/spotify-logo.svg')} alt=""/>
            <h3>Logar com o Spotify</h3>
        </a>
    )
}