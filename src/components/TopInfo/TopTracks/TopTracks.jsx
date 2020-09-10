import React, { useState, useEffect } from 'react'

import './TopTracks.css'
import { getTopTracks } from '../../../services/apiServices'

export default props => {
    const [topTracks, setTopTracks] = useState([])

    useEffect(() => {
        if (props.user && props.token) {
            getTopTracks(props.token, setTopTracks)
        }
    }, [props.user])

    return (
        <div className="top-tracks">
            <p>As 5 músicas que você mais escutou na quarentena</p>
        </div>
    )
}