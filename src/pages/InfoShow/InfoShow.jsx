import React, { useState, useEffect } from 'react'

import Footer from '../../components/Footer/index'
import TopArtists from '../../components/InfoShow/TopArtists'
import TopTracks from '../../components/InfoShow/TopTracks'
import UserInfo from '../../components/InfoShow/UserInfo'
import CreatePlaylist from '../../components/InfoShow/CreatePlaylist'
import "./InfoShow.css"

export default props => {
    const [infoType, setInfoType] = useState("tracks")
    const [canShow, setCanShow] = useState(false)

    const showModal = () => setCanShow(true)
    const hideModal = () => setCanShow(false)
  
    const changeInfoType = (e) => {
        setInfoType(e.target.name)
    }

    return (
        <div className="top-info">
            <div className="top-info-container">
                <UserInfo token={props.token}/>

                {infoType === "tracks" ? <TopTracks token={props.token} /> : null}
                {infoType === "artists" ? <TopArtists token={props.token} /> : null}

                <button className="create-playlist" onClick={showModal}>Criar playlist</button>

                <CreatePlaylist canShow={canShow} hideModal={hideModal} token={props.token}/>
                
                <div className="info-type-buttons">
                    <button className={`info-type-button ${infoType === "tracks" ? "selected" : ""}`} name="tracks" onClick={changeInfoType}>
                        Ver por músicas
                    </button>

                    <button className={`info-type-button ${infoType === "artists" ? "selected" : ""}`} name="artists" onClick={changeInfoType}>
                        Ver por artistas
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    )
}