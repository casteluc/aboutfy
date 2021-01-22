import axios from 'axios'

const app = axios.create({
    baseURL: "https://api.spotify.com/v1/"
})

export function getCurrentUser(token, setUser) {
    let axiosConfig = {
        "headers": {
            "Authorization": 'Bearer ' + token
        }
    }

    app.get("/me", axiosConfig)
        .then( response => {
            setUser(response.data)
        })
}

export function getTopTracks(token, setTopTracks) {
    let axiosConfig = {
        "headers": {
            "Authorization": 'Bearer ' + token
        }
    }

    let timeRange = "long_term"
    let limit = 5

    app.get(`/me/top/tracks?time_range=${timeRange}&limit=${limit}`, axiosConfig)
        .then( response => {
            setTopTracks(response.data.items)
    })
}

export function getTopArtists(token, setTopArtists) {
    let axiosConfig = {
        "headers": {
            "Authorization": 'Bearer ' + token
        }
    }

    let timeRange = "long_term"
    let limit = 5

    app.get(`/me/top/artists?time_range=${timeRange}&limit=${limit}`, axiosConfig)
        .then( response => {
            setTopArtists(response.data.items)
    })
}

export function getAllTracks(token, setAllTracks) {
    let axiosConfig = {
        "headers": {
            "Authorization": 'Bearer ' + token
        }
    }

    let timeRange = "long_term"
    let limit = 5

    app.get(`/me/top/tracks?time_range=${timeRange}&limit=${limit}`, axiosConfig)
        .then( response => {
            setAllTracks(response.data.items)
            console.log(response.data.items)
    })
}

export async function createPlaylist(token, setLoading, setReady) {
    setLoading(true)

    let axiosConfig = {
        "headers": {
            "Authorization": 'Bearer ' + token
        }
    }

    let tracks = []
    let userId
    let playlistId

    await app.get("/me", axiosConfig)
        .then( response => {
            userId = response.data.id
        })

    await app.get(`/me/top/tracks?time_range=long_term&limit=50`, axiosConfig)
        .then( response => {
            response.data.items.forEach( track => {
                tracks.push(track.uri)
            })
        })
    
    let playlistBody = {
        "name": "Mais Escutadas da Quarentena",
        "description": "Playlists com as minhas músicas mais escutadas durante a quarentena",
        "public": true
    }

    await app.post(`/users/${userId}/playlists`, playlistBody, axiosConfig)
        .then( response => {
            playlistId = response.data.id
        })
    
    let addTrackBody = {
        "uris": tracks
    }

    await app.post(`/playlists/${playlistId}/tracks`, addTrackBody, axiosConfig)
        .then( response => {
        })

    setReady(true)
}