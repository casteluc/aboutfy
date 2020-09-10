import axios from 'axios'

const app = axios.create({
    baseURL: "https://api.spotify.com/v1/"
})

export function getCurrentUser(setUser, token) {
    let axiosConfig = {
        "headers": {
            "Authorization": 'Bearer ' + token
        }
    }

    app.get("/me", axiosConfig)
        .then( response => {
            // console.log(response.data)
            setUser(response.data)
        })
}

export function getTopSongs(user, token, setTopSongs) {
    let axiosConfig = {
        "headers": {
            "Authorization": 'Bearer ' + token
        }
    }

    app.get("/me/top/tracks", axiosConfig)
        .then( response => {
            // console.log(response.data)
            setTopSongs(response.data)
    })
}