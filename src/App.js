import React, { useEffect, useState } from 'react';
import queryString from 'query-string'

import Login from './pages/Login/Login';

import './App.css';
import TopInfo from './pages/TopInfo/TopInfo';
import { getTopArtists } from './services/apiServices';

function App() {
  const [token, setToken] = useState(false)

  useEffect(() => {
    let parsed = queryString.parse(window.location.search)
    setToken(parsed.access_token)
  }, [])

  useEffect(() => {
    if (token) {
      getTopArtists(token)
    }
  }, [token])

  return (
    <div className="app">
      {token ?  <TopInfo token={token} /> : <Login />}
    </div>    
  );
}

export default App;
