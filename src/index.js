import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const ThemeContext = React.createContext();

function Main () {
return (
  <>
  { 
    <ThemeContext.Provider value={{tokennnContext:localStorage.getItem("myCat")}}>
    <App />
    </ThemeContext.Provider>
  }
  </>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);
