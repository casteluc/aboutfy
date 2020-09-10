import React, { useState } from 'react'

export default props => {
    const trackImageURL = props.track.album.images[0].url
    const trackName = props.track.name
    const trackArtist = props.track.artists[0].name
    return (
        <div className="single-track">
            <p>{props.number}</p>

            <img src={trackImageURL} alt=""/>

            <div>
                <p>{trackName}</p>
                <p>{trackArtist}</p>
            </div>
        </div>
    )
}