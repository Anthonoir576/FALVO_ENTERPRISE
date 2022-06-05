
// - -------------------------------------------------------
// - -------------------- IMPORT ---------------------------
// - ------------------------------------------------------- 
import React                         from 'react';
import ReactDOM                      from 'react-dom';
import App                           from './App';
import { TerminalContextProvider }   from 'react-terminal';
 
import './styles/css/style.css';
// - -------------------------------------------------------




//* --------------------------------------------------------
//* --- INDEX DE L'APP => rendu injecter dans l'id #root ---
//* --------------------------------------------------------
ReactDOM.render(
  <React.StrictMode>
    <TerminalContextProvider>
      <App />
    </TerminalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
//* --------------------------------------------------------