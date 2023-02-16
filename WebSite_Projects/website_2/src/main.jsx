// Deps
import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import App from './App';
// Data
import DataProvider from "./context/DataProvider";

//----------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataProvider>
);