import React, { useState} from 'react'

import Footer from '../../components/Footer'
import TopArtists from '../../components/InfoShow/Artists/TopArtists'
import TopTracks from '../../components/InfoShow/Tracks/TopTracks'
import UserInfo from '../../components/InfoShow/UserInfo'
import CreatePlaylist from '../../components/InfoShow/CreatePlaylist'
import { Container, Content, Buttons, CreatePlaylistButton } from './InfoShowStyle'

export default function InfoShow({token}) {
    const [infoType, setInfoType] = useState("tracks")
    const [canShow, setCanShow] = useState(false)

    const showModal = () => setCanShow(true)
    const hideModal = () => setCanShow(false)
  
    const changeInfoType = (e) => {
        setInfoType(e.target.name)
    }

    return (
        <Container>
            <Content>
                <UserInfo token={token}/>

                {infoType === "tracks" ? <TopTracks token={token} /> : null}
                {infoType === "artists" ? <TopArtists token={token} /> : null}

                <CreatePlaylistButton onClick={showModal}>Criar playlist</CreatePlaylistButton>

                <CreatePlaylist canShow={canShow} hideModal={hideModal} token={token}/>
                
                <Buttons>
                    <button className={`info-type-button ${infoType === "tracks" ? "selected" : ""}`} name="tracks" onClick={changeInfoType}>
                        Ver por músicas
                    </button>

                    <button className={`info-type-button ${infoType === "artists" ? "selected" : ""}`} name="artists" onClick={changeInfoType}>
                        Ver por artistas
                    </button>
                </Buttons>
            </Content>

            <Footer />
        </Container>
    )
}