import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const SideBar = () => {

    const [toggleNavigation, setToggleNavigation] = useState(false);

    const menuFonction = () => {
        setToggleNavigation(!toggleNavigation);
    };

    return (
        <>
            <button className={toggleNavigation ? 'openMenuOff' : 'openMenu'}
                    onClick={() => menuFonction()}>
                <img src="https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/menuTypeUn.png" alt="Menu latéral" />
            </button>
            <button className={toggleNavigation ? 'closeMenu' : 'closeMenuOff'}
                    onClick={() => menuFonction()}>
                <p>X</p>
            </button>
            {toggleNavigation ? (
                <nav className='menuDeNavigation'>
                    <ul>
                        <li>
                            <NavLink to='/accueil' aria-label="Retour à l'accueil du site web">
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/a_propos' aria-label='En savoir plus sur le développeur web'>
                                En savoir plus...
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/competence' aria-label='Compétence du développeur web'>
                                Compétence
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/projets' aria-label='Les projets du développeur web'>
                                Projets web
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' aria-label='Contact avec le développeur web'>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            ) : (
                <>
                </>
            )}
        </>
    );
};

export default SideBar;