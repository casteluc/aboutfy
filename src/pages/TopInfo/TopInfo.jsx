import React, { useState } from 'react'

import Footer from '../../components/Footer/Footer'
import TopArtists from '../../components/TopInfo/TopArtists/TopArtists'
import TopTracks from '../../components/TopInfo/TopTracks/TopTracks'
import TopGenres from '../../components/TopInfo/TopGenres/TopGenres'

import "./TopInfo.css"

export default props => {
    const [infoType, setInfoType] = useState("tracks")

    const changeInfoType = (e) => {
        setInfoType(e.target.infoType)    
    }

    return (
        <div className="top-info">
            <div className="top-info-container">
                {/* <UserInfo user={props.user}/> */}
                
                {() => {
                    switch (infoType) {
                        case "tracks":
                            return <TopTracks />
                        case "artists":
                            return <TopArtists />
                        case "genres":
                            return <TopGenres />
                        default: 
                    }
                }}
                
                <div className="info-type-buttons">
                    <button className="info-type-button" infoType="tracks" onClick={changeInfoType}>
                        Ver por músicas
                    </button>

                    <button className="info-type-button" infoType="artists" onClick={changeInfoType}>
                        Ver por artistas
                    </button>

                    <button className="info-type-button" infoType="genres" onClick={changeInfoType}>
                        Ver por gênero
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    )
}