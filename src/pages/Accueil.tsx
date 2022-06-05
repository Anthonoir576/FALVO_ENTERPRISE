
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ######################################################## 
import React, { useEffect }               from 'react';
import { NavLink }                        from 'react-router-dom';
import { txtEffect }                      from '../components/Utils/EffectTxt';
import NavBar                             from '../components/Navigation/NavBar';

// ANIMATION
import { motion }                         from 'framer-motion';
import { accueilAnimationPictureProfile } from '../components/Utils/AnimationMotion';
//- --------------------------------------------------------
//- ########################################################




//* ########################################################
//* --------------- Accueil + effet txt --------------------
//* ########################################################
const Accueil = () => {

    // Effet animation texte 
    useEffect(() => {
        txtEffect();
    }, []);


    return (
        <div className='accueil'>
            <NavBar />
            <div className='accueil-information'>
                <motion.div animate={accueilAnimationPictureProfile[0]}
                            initial={accueilAnimationPictureProfile[1]}
                            className='information-image'>
                    <img src={"https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/photo-profil.png"} alt="le developpeur web" />
                </motion.div>
                <div className="text-container">
                    <div className='information-dev'>
                        <h1 className='text-effect'>FALVO Anthony</h1>
                        <h2>Développeur React <span>&amp;</span> Node</h2>
                    </div>
                    <div className='information-contact'>
                        <NavLink to='/contact' aria-label='Contact developpeur web'>
                            Contactez-moi
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="accueil-switch">
                <p>^</p>
            </div>
        </div>
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