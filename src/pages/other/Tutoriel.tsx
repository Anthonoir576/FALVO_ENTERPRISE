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
        <div className="tuto-base">
          <IconHtml />
          <IconCss />
          <IconJs />
        </div>
        <div className="tuto-avancer-container">
          <IconNode />
          <IconReact />
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
