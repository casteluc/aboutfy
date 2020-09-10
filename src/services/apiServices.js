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

    console.log(token)
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

    app.get("/me/top/tracks", axiosConfig)
        .then( response => {
            console.log(response.data)
            setTopTracks(response.data)
    })
}