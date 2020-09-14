import React, { useState, useEffect } from 'react'
import { getTopTracks } from '../../../services/apiServices'

import SingleTrack from './SingleTrack/index'

import './TopTracks.css'

export default props => {
    const [topTracks, setTopTracks] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    var count = 0

    useEffect(() => {
        if (props.token) {
            getTopTracks(props.token, setTopTracks)
            setIsLoaded(true)
        }
    }, [props.token])

    if (isLoaded) {
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
    } else {
        return (
            <div className="loading tracks-loading">
                <img src={require('../../../img/loading.svg')} alt=""/>
            </div>
        )
    }
}