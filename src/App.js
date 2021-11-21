import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';

import { getTokenFromUrl } from './Helpers/spotifyAuth';
import { useDataValue } from './Context/DataProvider';

//Components
import Login from './Components/Login/Login';
import Player from './Components/Player/Player';


const spotify = new SpotifyWebApi();

function App() {

  const [{ token }, dispatch ] = useDataValue();

  useEffect(() => {

    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

        spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });
      
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })

    }

  }, [dispatch])

  return (
    <div className="App">
      {
        token ? 
        
        <Player spotify={spotify} /> 
        
        : <Login />
      }
    </div>
  );
}

export default App;
