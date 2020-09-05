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
            setUser(response.data)
        })
}