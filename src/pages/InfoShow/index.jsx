import React, { useState, useEffect } from 'react'

import Footer from '../../components/Footer/index'
import TopArtists from '../../components/InfoShow/TopArtists/index'
import TopTracks from '../../components/InfoShow/TopTracks/index'
import UserInfo from '../../components/InfoShow/UserInfo/index'

import "./InfoShow.css"

export default props => {
    const [infoType, setInfoType] = useState("tracks")

    const changeInfoType = (e) => {
        setInfoType(e.target.name)
    }

    return (
        <div className="top-info">
            <div className="top-info-container">
                <UserInfo token={props.token}/>

                {infoType === "tracks" ? <TopTracks token={props.token} /> : null}
                {infoType === "artists" ? <TopArtists token={props.token} /> : null}
                
                <div className="info-type-buttons">
                    <button className="info-type-button" name="tracks" onClick={changeInfoType}>
                        Ver por músicas
                    </button>

                    <button className="info-type-button" name="artists" onClick={changeInfoType}>
                        Ver por artistas
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    )
}