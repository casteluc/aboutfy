import React, { useState, useEffect } from 'react'

export default props => {
    const [profileImageURL, setProfileImageURL] = useState("")

    useEffect(() => {
        if (props.user.images) {
            setProfileImageURL(props.user.images[0].url)
        }
    }, [props.user])

    return (
        <div className="user-info">
            <img src={profileImageURL} alt="imagem do usuário do spotify"/>
            
            <div>
                <p className="user-name">{props.user.display_name}</p>
                <p className="user-id">{props.user.id}</p>
            </div>
        </div>
    )
}