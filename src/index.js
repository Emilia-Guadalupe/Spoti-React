import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { DataContextProvider } from './Context/DataProvider';
import { initialState } from './reducer';
import reducer from './reducer';



ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider initialState={initialState} reducer={reducer}>
    <App />
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

