import React from 'react'

import './SingleArtist.css'

export default props => {
    const artistImageURL = props.artist.images[0].url
    const artistName = props.artist.name

    return (
        <div className="single-artist">
            <p>{props.number}</p>

            <img src={artistImageURL} alt=""/>

            <p>{artistName}</p>
        </div>
    )
}