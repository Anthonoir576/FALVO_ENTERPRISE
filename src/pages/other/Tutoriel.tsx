//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import React          from "react";
import { NavLink }    from 'react-router-dom';
import Maintenance    from "../../components/Maintenance/Maintenance";
import NavBar         from "../../components/Navigation/NavBar";
import IconHtml       from "../../components/Icons/IconHtml";
import IconCss        from "../../components/Icons/IconCss";
import IconJs         from "../../components/Icons/IconJs";
import IconNode       from "../../components/Icons/IconNode";
import IconReact      from "../../components/Icons/IconReact";
import Start          from "../../components/Icons/Start";
import ProProjet      from "../../components/Icons/ProProjet";
import IconDb         from "../../components/Icons/IconDb";
//- --------------------------------------------------------
//- ########################################################




//* ########################################################
//* --------------------- Tutoriel -------------------------
//* ########################################################
const Tutoriel = () => {
  return (
    <div className="tutoriel">
      <NavBar />
      <div className="tutoriel-icons">
        <p className="tuto-base lvl1">LES BASES <em>Niveau Facile</em></p>
        <div className="tuto-base-container">
          
          <NavLink to='/tutoriel/start' aria-label="En savoir plus sur le démarrage de l'apprentissage du web">
            <Start />
          </NavLink>
          

          <NavLink to='/tutoriel/html' aria-label='En savoir plus sur le HTML'>
            <IconHtml />
          </NavLink>
          
          <IconCss />
          <IconJs />
        </div>
        <p className="tuto-avancer lvl2">LA SPÉCIALISATION <em>Niveau Intermediaire</em></p>
        <div className="tuto-avancer-container icon-tutoriel">
          <div>
            <p className="intituler2">BACK-END</p>
            <IconNode />
          </div>
          <div>
            <p className="intituler2">FRONT-END</p>
            <IconReact />
          </div>
        </div>
        <div className="tuto-avancer-container2">
          <div>
            <IconDb />
          </div>
        </div>
        <div className="tuto-pro-container lvl3">
          <p className="tuto-pro lvl3"> PROJET PRO <em>Niveau Professionnel</em></p>
          <ProProjet />
        </div>
      </div>
    </div>
  );
};
//* --------------------------------------------------------
//* ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################
export default Tutoriel;
//~ --------------------------------------------------------
//~ ########################################################
