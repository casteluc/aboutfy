import React, { useState, useEffect } from 'react'
import { getCurrentUser } from '../../../services/apiServices'

import './UserInfo.css'

export default props => {
    const [profileImageURL, setProfileImageURL] = useState("")
    const [user, setUser] = useState({})

    useEffect(() => {
        if (user.images) {
            setProfileImageURL(user.images[0].url)
        }
    }, [user])

    useEffect(() => {
        if (props.token) {
          getCurrentUser(props.token, setUser)
        }
    }, [props.token])

    return (
        <div className="user-info">
            <img src={profileImageURL} alt="imagem do usuário do spotify"/>
            
            <div>
                <p className="user-name">{user.display_name}</p>
                <p className="user-id">@{user.id}</p>
            </div>
        </div>
    )
}