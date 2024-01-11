import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

export const ThemeContext = React.createContext();

function Main () {
const [tokennnContext, setTokennnContext] = useState();
// useEffect(() => {
// axios.get('').then((ahaa) => {
// if((ahaa.data || "").length > 0){
// setTokennnContext(ahaa.data); 
// }
// })
// }, []);
return (
<ThemeContext.Provider value={{tokennnContext}}>
<App />
</ThemeContext.Provider>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);
