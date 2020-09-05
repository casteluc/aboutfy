import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
import './App.css';
import Login from './pages/Login/Login';

function App() {
  const [accessToken, setAccessToken] = useState(false)
  useEffect(() => {
    let parsed = queryString.parse(window.location.search)
    setAccessToken(parsed.access_token)
  }, [])

  return (
    <div className="app">
      {accessToken ?  <h1>Teste</h1> : <Login />}
    </div>    
  );
}

export default App;
