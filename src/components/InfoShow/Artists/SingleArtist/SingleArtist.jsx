import React from 'react'

import './SingleArtist.css'

export default function SingleArtist({artist, number}) {
    const artistImageURL = artist.images[0].url
    const artistName = artist.name

    return (
        <div className="single-artist">
            <p>{number}</p>

            <img src={artistImageURL} alt=""/>

            <p>{artistName}</p>
        </div>
    )
}