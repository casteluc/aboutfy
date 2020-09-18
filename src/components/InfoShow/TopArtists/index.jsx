import React, { useState, useEffect } from 'react'
import { getTopArtists, createPlaylist } from '../../../services/apiServices'

import SingleArtist from './SingleArtist/index'

import './TopArtists.css'

export default props => {
    const [topArtists, setTopArtists] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    var count = 0

    useEffect(() => {
        if (props.token) {
            getTopArtists(props.token, setTopArtists)
            setIsLoaded(true)
        }
    }, [props.token])

    const handleCreatePlaylist = () => {
        createPlaylist(props.token)
    }

    if (isLoaded) {
        return (
            <div className="top-artists">
                <p>Os 5 artistas que você mais escutou na quarentena:</p>
    
                {topArtists.map( artist => {
                    count += 1
                    return (
                        <SingleArtist key={artist.id} artist={artist} number={count}/>
                    )
                })}

                <button className="create-playlist" onClick={handleCreatePlaylist}>Criar playlist</button>
            </div>
        )
    } else {
        return (
            <div className="loading artists-loading">
                <img src={require('../../../img/loading.svg')} alt=""/>
            </div>
        )
    }
}