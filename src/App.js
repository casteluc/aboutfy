import React, { useEffect, useState } from 'react';
import queryString from 'query-string'

import Login from './pages/Login/Login';

import './App.css';
import { getCurrentUser, getTopTracks } from './services/apiServices';
import TopInfo from './pages/TopInfo/TopInfo';

function App() {
  const [token, setToken] = useState(false)
  const [user, setUser] = useState({})
  const [topTracks, setTopTracks] = useState([])

  useEffect(() => {
    let parsed = queryString.parse(window.location.search)
    setToken(parsed.access_token)
  }, [])

  return (
    <div className="app">
      {token ?  <TopInfo user={user} token={token} /> : <Login />}
    </div>    
  );
}

export default App;
