import React, { useState }              from 'react';
import ProjetWeb                        from './Logiques projets/ProjetWeb';
import ProjetLogiciel                   from './Logiques projets/ProjetLogiciel';
import ProjetUnrealEngine               from './Logiques projets/ProjetUnrealEngine';
import { Menu, MenuItem, MenuButton }   from '@szhsin/react-menu';

import '@szhsin/react-menu/dist/index.css';




const MenuSecondaire = () => {

    const [logiciel, setLogiciel]  = useState(false);
    const [web, setWeb]            = useState(true);
    const [ue, setUe]              = useState(false);

    const isActive = () => {
        if (web === true) {
            setLogiciel(false);
            setUe(false);
        } else if (logiciel === true) {
            setWeb(false);
            setUe(false);
        } else if (ue === true) {
            setWeb(false);
            setLogiciel(false);
        }; 
    };


    return (
        <div className='menuSecondaire'>
            <nav>
                <ul>

                    <li>
                        <Menu menuButton={
                            <MenuButton className={web === true ? 'active-menuSecondaire szh-menu-button' : 'szh-menu-button'}
                                        aria-label='Mes projets de développement web'
                                        onClick={ () => { 
                                                        isActive();
                                                        setWeb(true);
                                                        setLogiciel(false);
                                                        setUe(false); 
                                                    }
                                                }
                            >
                                Projet Web
                            </MenuButton>}
                        >
                            <MenuItem>Projets d'études</MenuItem>
                            <MenuItem>Projets solo</MenuItem>
                            <MenuItem>Projets pro</MenuItem>
                        </Menu>

                    </li>

                    <li>
                        <Menu menuButton={
                            <MenuButton aria-label='Mes projets de développement logiciel'
                                        className={logiciel === true ? 'active-menuSecondaire szh-menu-button' : 'szh-menu-button'}
                                        onClick={ () => { 
                                                    isActive(); 
                                                    setLogiciel(true);
                                                    setWeb(false);
                                                    setUe(false); 
                                                }
                                                }
                            >
                                Projet Logiciel
                            </MenuButton>}
                              
                        >
                            <MenuItem>Projets d'études</MenuItem>
                            <MenuItem>Projets solo</MenuItem>
                            <MenuItem>Projets pro</MenuItem>
                        </Menu>                  
                    </li>

                    <li>
                        <Menu menuButton={
                            <MenuButton aria-label='Mes projets de développement sous unreal engine'
                                        className={ue === true ? 'active-menuSecondaire szh-menu-button' : 'szh-menu-button'}
                                        onClick={() => { 
                                                    isActive(); 
                                                    setUe(true);
                                                    setWeb(false);
                                                    setLogiciel(false); 
                                                }
                                                }
                            >
                                Projet Unreal engine
                            </MenuButton>}
                        >
                            <MenuItem>Projets d'études</MenuItem>
                            <MenuItem>Projets solo</MenuItem>
                            <MenuItem>Projets pro</MenuItem>
                        </Menu>
                    </li>

                </ul>
            </nav>
            <div className='affichage-option-projets'>
                {web === true ? (
                <ProjetWeb />
                ) : (
                    <></>
                )}

                {logiciel === true ? (
                <ProjetLogiciel />
                ) : (
                <></>
                )}

                {ue === true ? (
                    <ProjetUnrealEngine />
                ) : (
                    <></>
                )}

            </div>
        </div>
    );
};

export default MenuSecondaire;
