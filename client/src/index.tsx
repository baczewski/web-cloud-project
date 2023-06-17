import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import { AppContextProvider } from './context/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
