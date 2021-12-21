import React       from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navigation'>
            <ul>
                <li>
                    <NavLink exact to='/A_propos' aria-label='En savoir plus sur le développeur web'>
                        En savoir plus...
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/Competence' aria-label='Compétence du développeur web'>
                        Compétence
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/Projets' aria-label='Les projets du développeur web'>
                        Projets web
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/Contact' aria-label='Contact avec le développeur web'>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div className="navigation--modifier"></div>
        </div>
    );
};

export default NavBar;