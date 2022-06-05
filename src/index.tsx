/** DOCUMENTATION ET CORRECTION A APPLIQUER *
 * 
 * *****************  MAJEUR  ***********************
 * > ATTENTION ! => les url des images dependent du chemin master, et url github directement. A corriger lors du déployement.
 * > Les routes sur la page App risque de posé des problèmes par la suite. 
 * **************************************************
 *  
 * ******************  MOYEN  ***********************
 * - Verifier le .env si toute est correct et mettre à jour .env.example au fur et a mesure.
 * **************************************************
 * 
 * *****************  MINEUR  ***********************
 * ~ Librairie d'animation a exploité, afin d'améliorer l'expérience utilisateur.
 * **************************************************
 */


//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ######################################################## 
import React                         from 'react';
import ReactDOM                      from 'react-dom';
import App                           from './App';
import { TerminalContextProvider }   from 'react-terminal';
 
import './styles/css/style.css';
//- --------------------------------------------------------
//- ########################################################




//* ########################################################
//* --- INDEX DE L'APP => rendu injecté dans l'id #root ---
//* ########################################################
ReactDOM.render(
  <React.StrictMode>
    <TerminalContextProvider>
      <App />
    </TerminalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
//* --------------------------------------------------------
//* ########################################################