import React, { useState, useEffect } from 'react'
import { getTopArtists} from '../../../../services/apiServices'

import SingleArtist from '../SingleArtist'

import './TopArtists.css'

export default function TopArtists({token}) {
    const [topArtists, setTopArtists] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    var count = 0

    useEffect(() => {
        if (token) {
            getTopArtists(token, setTopArtists)
            setIsLoaded(true)
        }
    }, [token])
    
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