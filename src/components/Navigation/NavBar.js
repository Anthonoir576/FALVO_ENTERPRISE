import React       from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navigation'>
            <ul>
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
                <li className='homePageIcon'>
                    <NavLink to='/accueil' aria-label="Retour à l'accueil du site web">
                        <img src="https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/home.png" 
                            alt="retour à l'accueil"
                            className='homeIcon'
                        />
                </NavLink>
                </li>
            </ul>
            <div className="navigation--modifier"></div>
        </div>
    );
};

export default NavBar;