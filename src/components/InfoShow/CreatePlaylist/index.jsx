import React from 'react'

import { createPlaylist } from '../../../services/apiServices'
import './CreatePlaylist.css'

export default function CreatePlaylist(props) {
    const toggleClass = props.canShow ? "create-playlist-modal display-block" : "create-playlist-modal display-none";
    
    const handleCreatePlaylist = () => {
        createPlaylist(props.token)
    }

    return (
        <div className={toggleClass}>
            <div className="modal-main">
                <p>Você deseja criar a playlist "Mais Escutdas da Quarentena" na sua conta do Spotify?</p>

                <button className="create-playlist" onClick={handleCreatePlaylist}>Criar playlist</button>
                <button className="cancel" onClick={props.hideModal}>Cancelar</button>
            </div>
        </div>
    )
}