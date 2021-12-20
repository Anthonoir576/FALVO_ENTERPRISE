import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul className='navigation'>
            <li>
                <NavLink exact to='/accueil' aria-label='En savoir plus sur le développeur web'>
                    En savoir plus...
                </NavLink>
            </li>
            <li>Compétence</li>
            <li>Projet</li>
            <li>Contact</li>
        </ul>
    );
};

export default NavBar;