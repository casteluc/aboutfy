import React, { useState, useEffect } from 'react'

import Footer from '../../components/Footer/Footer'
import TopArtists from '../../components/TopInfo/TopArtists/TopArtists'
import TopTracks from '../../components/TopInfo/TopTracks/TopTracks'
import TopGenres from '../../components/TopInfo/TopGenres/TopGenres'
import UserInfo from '../../components/TopInfo/UserInfo/UserInfo'

import "./TopInfo.css"

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
                {infoType === "genres" ? <TopGenres token={props.token} /> : null}
                
                <div className="info-type-buttons">
                    <button className="info-type-button" name="tracks" onClick={changeInfoType}>
                        Ver por músicas
                    </button>

                    <button className="info-type-button" name="artists" onClick={changeInfoType}>
                        Ver por artistas
                    </button>

                    <button className="info-type-button" name="genres" onClick={changeInfoType}>
                        Ver por gênero
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    )
}