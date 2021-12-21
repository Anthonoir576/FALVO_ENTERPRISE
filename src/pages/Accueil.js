import React, { useEffect } from 'react';
import { NavLink }          from 'react-router-dom';
import { txtEffect }        from '../components/Utils/EffectTxt';
import NavBar               from '../components/Navigation/NavBar';


const Accueil = () => {

    // -- Effet animation texte --
    useEffect(() => {
        txtEffect();
    }, []);

    return (
        <div className='accueil'>
            <NavBar />
            <div className='accueil-information'>
                <div className='information-image'>
                    <img src="./image/photoHEADd.png" alt="le developpeur web" />
                </div>
                <div className='information-dev'>
                    <h1 className='text-effect'>FALVO Anthony</h1>
                    <h2>Développeur React / Node</h2>
                </div>
                <div className='information-contact'>
                    <NavLink exact to='/Contact' aria-label='Contact developpeur web'>
                        Contactez-moi
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Accueil;