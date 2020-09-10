import React, { useState } from 'react'

import "./TopInfo.css"
import Footer from '../../components/Footer/Footer'
import TopTracks from '../TopTracks/TopTracks'

export default props => {
    const [infoType, setInfoType] = useState("tracks")

    const changeInfoType = (e) => {
        setInfoType(e.target.infoType)    
    }

    return (
        <div className="top-info">
            <div className="top-info-container">
                <UserInfo user={props.user}/>
                
                <div>
                    <p>As músicas que eu mais escutei na quarentena:</p>

                    {() => {
                        switch (infoType) {
                            case "tracks":
                                return <TopTracks />
                            case "artists":
                                return <TopArtists />
                            case "genre":
                                return <TopGenres />
                            default: 
                        }
                    }}
                </div>

                <div className="info-type-buttons">
                    <button className="info-type-button" infoType="tracks" onClick={changeInfoType}>
                        Ver por músicas
                    </button>

                    <button className="info-type-button" infoType="artists" onClick={changeInfoType}>
                        Ver por artistas
                    </button>

                    <button className="info-type-button" infoType="genre" onClick={changeInfoType}>
                        Ver por gênero
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    )
}