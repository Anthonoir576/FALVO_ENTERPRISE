
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import React         from 'react';
import { NavLink }   from 'react-router-dom';
import IonHome       from '../Icons/IonHome';
import SideBar       from './SideBar';
//- --------------------------------------------------------
//- ########################################################




//* ########################################################
//* ----------------- Navigation bar -----------------------
//* ########################################################
const NavBar = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li className="raccourciMenu">
                    <NavLink to='/a_propos' aria-label='En savoir plus sur le développeur web'>
                        En savoir plus...
                    </NavLink>
                </li>
                <li className="raccourciMenu">
                    <NavLink to='/competence' aria-label='Compétence du développeur web'>
                        Compétence
                    </NavLink>
                </li>
                <li className="raccourciMenu">
                    <NavLink to='/projets' aria-label='Les projets du développeur web'>
                        Projets web
                    </NavLink>
                </li>
                <li className="raccourciMenu">
                    <NavLink to='/contact' aria-label='Contact avec le développeur web'>
                        Contact
                    </NavLink>
                </li>
                <li className='homePageIcon'>
                    <NavLink to='/accueil' aria-label="Retour à l'accueil du site web">
                        <IonHome />
                    </NavLink>
                </li>
                <SideBar />
            </ul>
            <div className="navigation--modifier"></div>
        </nav>
    );
};
//* --------------------------------------------------------
//* ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################
export default NavBar;
//~ --------------------------------------------------------
//~ ########################################################