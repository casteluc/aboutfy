import React, { useState, useEffect } from 'react'
import { getTopTracks } from '../../../services/apiServices'

import SingleTrack from './SingleTrack'

import './TopTracks.css'

export default props => {
    const [topTracks, setTopTracks] = useState([])
    var count = 0

    useEffect(() => {
        if (props.token) {
            getTopTracks(props.token, setTopTracks)
        }
    }, [props.token])

    return (
        <div className="top-tracks">
            <p>As 5 músicas que você mais escutou na quarentena:</p>

            {topTracks.map( track => {
                count += 1
                return (
                    <SingleTrack key={track.id} track={track} number={count}/>
                )
            })}
        </div>
    )
}