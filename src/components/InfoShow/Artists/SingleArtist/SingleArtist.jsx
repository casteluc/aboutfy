import React from 'react'

import { Container } from './SingleArtistStyle'

export default function SingleArtist({artist, number}) {
    const artistImageURL = artist.images[0].url
    const artistName = artist.name

    return (
        <Container>
            <p>{number}</p>
            <img src={artistImageURL} alt=""/>
            <p>{artistName}</p>
        </Container>
    )
}