import React, { useState } from 'react'

import './SingleTrack.css'

export default function SingleTrack({track, number}) {
    const trackImageURL = track.album.images[0].url
    const trackName = track.name
    const trackArtist = track.artists[0].name
    
    return (
        <div className="single-track">
            <p>{number}</p>

            <img src={trackImageURL} alt=""/>

            <div>
                <p>{trackName}</p>
                <p>{trackArtist}</p>
            </div>
        </div>
    )
}