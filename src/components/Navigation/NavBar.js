import React       from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navigation'>
            <ul>
                <li>
                    <NavLink exact to='/FALVO_ENTERPRISE/a_propos' aria-label='En savoir plus sur le développeur web'>
                        En savoir plus...
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/FALVO_ENTERPRISE/competence' aria-label='Compétence du développeur web'>
                        Compétence
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/FALVO_ENTERPRISE/projets' aria-label='Les projets du développeur web'>
                        Projets web
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/FALVO_ENTERPRISE/contact' aria-label='Contact avec le développeur web'>
                        Contact
                    </NavLink>
                </li>
                <li className='homePageIcon'>
                    <NavLink exact to='/FALVO_ENTERPRISE/accueil' aria-label="Retour à l'accueil du site web">
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