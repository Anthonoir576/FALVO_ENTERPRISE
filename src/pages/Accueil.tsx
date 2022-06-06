
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ######################################################## 
import React, { useEffect }               from 'react';
import { NavLink }                        from 'react-router-dom';
import NavBar                             from '../components/Navigation/NavBar';

//      <--------------- ANIMATION -------------------->
import { txtEffect }                      from '../components/Utils/EffectTxt';
// import { motion }                         from 'framer-motion';
// import { AnimatePresence }                from 'framer-motion';  

// // photo profile
// import { accueilAnimePictureProfile}      from '../components/Utils/AnimationMotion';

// // text
// import { accueilAnimeTxt01 }              from '../components/Utils/AnimationMotion';
// import { accueilAnimeTxt02 }              from '../components/Utils/AnimationMotion';
// import { accueilAnimeTxt03 }              from '../components/Utils/AnimationMotion';

// // navigation accueil
// import { accueilAnimeNavigation }         from "../components/Utils/AnimationMotion";

// // transition pages
// import { animeTransitionPages }           from '../components/Utils/AnimationMotion';
import ParticuleBackground               from '../components/Utils/ParticuleBackground';
//      <---------------------------------------------->
//- --------------------------------------------------------
//- ########################################################




//* ########################################################
//* --------------- Accueil + effet txt --------------------
//* ########################################################
const Accueil = () => {
 
    useEffect(() => {
        txtEffect();
    }, []);


    return (
      <>
        <ParticuleBackground />
        <div className="accueil">
          <NavBar />
          <div className="accueil-information">
            <div className="information-image">
              <img
                src={
                  "https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/photo-profil.png"
                }
                alt="le developpeur web"
              />
            </div>
            <div className="text-container">
              <div className="information-dev">
                <h1 className="text-effect">FALVO Anthony</h1>
                <h2>
                  Développeur React <span>&amp;</span> Node
                </h2>
              </div>
              <div className="information-contact">
                <NavLink to="/contact" aria-label="Contact developpeur web">
                  Contactez-moi
                </NavLink>
              </div>
            </div>
          </div>
          <div className="accueil-switch">
            <p>^</p>
          </div>
        </div>
      </>
    );
};
//* --------------------------------------------------------
//* ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################
export default Accueil;
//~ --------------------------------------------------------
//~ ########################################################