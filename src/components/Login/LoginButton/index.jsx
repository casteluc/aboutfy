import React from 'react'

export default props => {

    return (
        <a className="login-button" href="https://aboutfy-backend.herokuapp.com/login">
            <img src={require('../../../img/spotify-logo.svg')} alt=""/>
            <h3>Logar com o Spotify</h3>
        </a>
    )
}