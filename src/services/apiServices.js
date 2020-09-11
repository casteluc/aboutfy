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

    let timeRange = "medium_term"
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

    let timeRange = "medium_term"
    let limit = 5

    app.get(`/me/top/artists?time_range=${timeRange}&limit=${limit}`, axiosConfig)
        .then( response => {
            setTopArtists(response.data.items)
            console.log(response.data.items)
    })
}

export function getAllTracks(token, setAllTracks) {
    let axiosConfig = {
        "headers": {
            "Authorization": 'Bearer ' + token
        }
    }

    let timeRange = "medium_term"
    let limit = 50

    app.get(`/me/top/tracks?time_range=${timeRange}&limit=${limit}`, axiosConfig)
        .then( response => {
            setAllTracks(response.data.items)
            console.log(response.data.items)
    })
}