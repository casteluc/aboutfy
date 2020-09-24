import React, { useState } from 'react'

import { createPlaylist } from '../../../services/apiServices'

import './CreatePlaylist.css'

export default function CreatePlaylist({token, canShow}) {
    const toggleClass = canShow ? "create-playlist-modal display-block" : "create-playlist-modal display-none";
    const [loading, setLoading] = useState(false)
    const [ready, setReady] = useState(false)

    const handleCreatePlaylist = async () => {
        createPlaylist(token, setLoading, setReady)
    }

    const handleClose = () => {
        props.hideModal()
        setLoading(false)
        setReady(false)
    }

    const notLoadingComponent = <> 
        <p>Você deseja criar a playlist "Mais Escutadas da Quarentena" na sua conta do Spotify?</p>
        <button className="create-playlist" onClick={handleCreatePlaylist}>Criar playlist</button>
        <button className="cancel" onClick={handleClose}>Cancelar</button>
    </>

    const loadingComponent = <>
        <div className="loading">
            {ready ?
            <>
                <p>Playlist criada com sucesso!</p>
                <button className="cancel" onClick={handleClose}>Fechar</button>
            </>
                :
            <> 
                <p>Criando playlist...</p>
                <img src={require('../../../img/loading.svg')} alt=""/>
            </>
            }
        </div>
    </>

    return (
        <div className={toggleClass}>
            <div className="modal-main">
                {loading ? loadingComponent : notLoadingComponent}
            </div>
        </div>
    )
}