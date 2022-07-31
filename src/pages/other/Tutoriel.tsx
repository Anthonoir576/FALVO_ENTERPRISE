//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import React       from "react";
import Maintenance from "../../components/Maintenance/Maintenance";
import NavBar      from "../../components/Navigation/NavBar";
import IconHtml    from "../../components/Icons/IconHtml";
import IconCss     from "../../components/Icons/IconCss";
import IconJs      from "../../components/Icons/IconJs";
import IconNode    from "../../components/Icons/IconNode";
import IconReact   from '../../components/Icons/IconReact';
import Start       from "../../components/Icons/Start";
import ProProjet from "../../components/Icons/ProProjet";
import IconDb from '../../components/Icons/IconDb';
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
        <p className="tuto-base">LES BASES</p>
        <div className="tuto-base-container">
          <Start />  
          <IconHtml />
          <IconCss />
          <IconJs />
        </div>
        <p className="tuto-avancer">LA SPÉCIALISATION </p>
        <div className="tuto-avancer-container icon-tutoriel">
          <div className="">
            <p>BACK-END</p>
            <IconNode />
          </div>  
          <div>
            <p>FRONT-END</p>
            <IconReact />
          </div>
        </div>
        <div>
        <div>
            <IconDb />    
        </div>    
        </div>
        <div className="tuto-pro-container">
            <p className="tuto-pro"> PROJET PRO</p>
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
