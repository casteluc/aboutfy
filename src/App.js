import React, { useEffect, useState } from 'react';
import queryString from 'query-string'

import Login from './pages/Login/Login';

import './App.css';
import { getCurrentUser, getTopSongs } from './services/apiServices';
import TopInfo from './pages/TopInfo/TopInfo';

function App() {
  const [token, setToken] = useState(false)
  const [user, setUser] = useState({})
  const [topSongs, setTopSongs] = useState([])

  useEffect(() => {
    let parsed = queryString.parse(window.location.search)
    setToken(parsed.access_token)
  }, [])

  useEffect(() => {
    if (token) {
      getCurrentUser(setUser, token)
    }
  }, [token])

  useEffect(() => {
    if (user && token) {
      getTopSongs(user, token, setTopSongs)
    }
  }, [user])

  return (
    <div className="app">
      {token ?  <TopInfo user={user} token={token} /> : <Login />}
    </div>    
  );
}

export default App;
