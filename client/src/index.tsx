import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
