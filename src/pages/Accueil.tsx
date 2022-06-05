
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ######################################################## 
import React, { useEffect }               from 'react';
import { NavLink }                        from 'react-router-dom';
import NavBar                             from '../components/Navigation/NavBar';

//      <--------------- ANIMATION -------------------->
import { txtEffect }                      from '../components/Utils/EffectTxt';
import { motion }                         from 'framer-motion';

// photo profile
import { accueilAnimePictureProfile}      from '../components/Utils/AnimationMotion';

// text
import { accueilAnimeTxt01 }              from '../components/Utils/AnimationMotion';
import { accueilAnimeTxt02 }              from '../components/Utils/AnimationMotion';
import { accueilAnimeTxt03 }              from '../components/Utils/AnimationMotion';
//      <---------------------------------------------->

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
        <motion.div className='accueil'
            // animate={{y : 0}}
            // initial={{y: -2500}}
            // transition={{duration :1.5}}
        >
            <NavBar />
            <div className='accueil-information'>
                <motion.div className='information-image' 
                            animate={ accueilAnimePictureProfile[0] }
                            initial={ accueilAnimePictureProfile[1] }
                            // transition={accueilAnimePictureProfile[2]}
                >
                    <img src={"https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/photo-profil.png"} alt="le developpeur web" />
                </motion.div>
                <div className="text-container">
                    <div className='information-dev'>
                        <motion.h1 className='text-effect'
                                   animate={    accueilAnimeTxt01[0]  }
                                   initial={    accueilAnimeTxt01[1]  }
                                   transition={ accueilAnimeTxt01[2] }
                        >
                            FALVO Anthony
                        </motion.h1>
                        <motion.h2 animate={    accueilAnimeTxt02[0] }
                                   initial={    accueilAnimeTxt02[1] }
                                   transition={ accueilAnimeTxt02[2] }
                        
                        >
                            Développeur React <span>&amp;</span> Node
                        </motion.h2>
                    </div>
                    <motion.div className='information-contact'
                                animate={    accueilAnimeTxt03[0] }
                                initial={    accueilAnimeTxt03[1] }
                                transition={ accueilAnimeTxt03[2] }
                    >
                        <NavLink to='/contact' aria-label='Contact developpeur web'>
                            Contactez-moi
                        </NavLink>
                    </motion.div>
                </div>
            </div>
            <div className="accueil-switch">
                <p>^</p>
            </div>
        </motion.div>
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