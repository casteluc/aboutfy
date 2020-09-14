import React, { useState, useEffect } from 'react'
import { getCurrentUser } from '../../../services/apiServices'

import './UserInfo.css'

export default props => {
    const [profileImageURL, setProfileImageURL] = useState("")
    const [user, setUser] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (user.images) {
            setProfileImageURL(user.images[0].url)
            setIsLoaded(true)
        }
    }, [user])

    useEffect(() => {
        if (props.token) {
          getCurrentUser(props.token, setUser)
        }
    }, [props.token])

    if (isLoaded) {
        return (
            <div className="user-info">
                <img src={profileImageURL} alt="imagem do usuário do spotify"/>
                
                <div>
                    <p className="user-name">{user.display_name}</p>
                    <p className="user-id">@{user.id}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="loading">
                <img src={require('../../../img/loading.svg')} alt=""/>
            </div>
        )
    }
}