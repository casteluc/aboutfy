import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
import axios from 'axios'

import './App.css';

function App() {
  const [playlists, setPlaylists] = useState("")
  const [token, setToken] = useState("")
  useEffect(() => {
    setToken(queryString.parse(window.location.search).access_token) 
  }, [])

  useEffect(() => {
    axios.get(
      "https://api.spotify.com/v1/me",
      { headers: { "Authorization": 'Bearer ' + token } }
      )
      .then(res => {
        console.log(res)
      })
  }, [token])

  return (
    <div className="App">
      <h1>{token}</h1>
    </div>
  );
}

export default App;
