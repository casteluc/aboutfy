import React, { useEffect, useState } from 'react';
import queryString from 'query-string'

import Login from './pages/Login/index';
import InfoShow from './pages/InfoShow/index';

import './App.css';

function App() {
    const [token, setToken] = useState(false)
            
    useEffect(() => {
        let parsed = queryString.parse(window.location.search)
        setToken(parsed.access_token)
    }, [])

    return (
        <div className="app">
            {token ?  <InfoShow token={token} /> : <Login />}
        </div>    
    );
}

export default App;
