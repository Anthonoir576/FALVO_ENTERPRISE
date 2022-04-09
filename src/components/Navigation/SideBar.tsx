import React, { useState } from 'react';
import { NavLink }         from 'react-router-dom';
import DarkMode            from './DarkMode';


const SideBar = () => {

    const [toggleNavigation, setToggleNavigation] = useState(false);

    const menuFonction = () => {
        setToggleNavigation(!toggleNavigation);
    };

    return (
        <>
            <li className='menuIcon'>
                <button className={toggleNavigation ? 'openMenuOff' : 'openMenu'}
                        onClick={() => menuFonction()}
                        arria-label='ouvrir le menu'
                >
                    <img src="https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/menuTypeUn.png" alt="Menu latéral" />
                </button>
            </li>
            <div>
                {toggleNavigation ? (
                    <>
                        <nav className='menuDeNavigation'>
                            <ul>
                                <li className='closeMenu-container'>
                                    <button className={toggleNavigation ? 'closeMenu' : 'closeMenuOff'}
                                        onClick={() => menuFonction()}
                                        arria-label='fermer le menu'
                                    >
                                        <p>X</p>
                                    </button>
                                </li>
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
                                <DarkMode />
                            </ul>
                        </nav>
                    </>

                ) : (
                    <>
                    </>
                )}
            </div>
        </>
    );
};

export default SideBar;