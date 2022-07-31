
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import React        from "react";
import Maintenance  from "../../components/Maintenance/Maintenance";
import NavBar       from "../../components/Navigation/NavBar";
import IconHtml     from "../../components/Icons/IconHtml";
import IconCss      from "../../components/Icons/IconCss";
import IconJs       from "../../components/Icons/IconJs";
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
        <IconHtml />
        <IconCss />
        <IconJs />
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
