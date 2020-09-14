import React, { useState, useEffect } from 'react'
import { getTopArtists } from '../../../services/apiServices'

import SingleArtist from './SingleArtist/index'

import './TopArtists.css'

export default props => {
    const [topArtists, setTopArtists] = useState([])
    var count = 0

    useEffect(() => {
        if (props.token) {
            getTopArtists(props.token, setTopArtists)
        }
    }, [props.token])

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
}