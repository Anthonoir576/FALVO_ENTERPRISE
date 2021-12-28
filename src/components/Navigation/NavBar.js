import React       from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navigation'>
            <ul>
                <li>
                    <NavLink exact to='/a_propos' aria-label='En savoir plus sur le développeur web'>
                        En savoir plus...
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/competence' aria-label='Compétence du développeur web'>
                        Compétence
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/projets' aria-label='Les projets du développeur web'>
                        Projets web
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/contact' aria-label='Contact avec le développeur web'>
                        Contact
                    </NavLink>
                    <img src="./assets/images/home.png" alt="retour à l'accueil" />
                </li>
            </ul>
            <div className="navigation--modifier"></div>
        </div>
    );
};

export default NavBar;