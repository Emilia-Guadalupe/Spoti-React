import React, { useEffect, useState } from 'react';
import './App.css';

import { getTokenFromUrl } from './Helpers/spotifyAuth';

//Components
import Login from './Components/Login/Login'

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {

    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token) {
      setToken(_token);
    }

  }, [])

  return (
    <div className="App">
      {
        token ? (<h1>Soy el repro de música</h1>) : <Login />
      }
    </div>
  );
}

export default App;
