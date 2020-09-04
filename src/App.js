import React, { useEffect, useState } from 'react';

import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
      <Login />
    </BrowserRouter>
  );
}

export default App;
