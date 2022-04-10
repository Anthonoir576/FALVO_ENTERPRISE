import React, { useState }              from 'react';
import ProjetWeb                        from './Logiques projets/ProjetWeb';
import ProjetLogiciel                   from './Logiques projets/ProjetLogiciel';
import ProjetUnrealEngine               from './Logiques projets/ProjetUnrealEngine';
import { Menu, MenuItem, MenuButton }   from '@szhsin/react-menu';

import '@szhsin/react-menu/dist/index.css';
import ProjetWebEtudes from './Logiques projets/Web-etudes/ProjetWebEtudes';
import ProjetWebSolo from './Logiques projets/Web-solo/ProjetWebSolo';
import ProjetWebPro from './Logiques projets/Web-pro/ProjetWebPro';




const MenuSecondaire = () => {

    const [logiciel, setLogiciel]                          = useState(false);
    const [web, setWeb]                                    = useState(true);
    const [ue, setUe]                                      = useState(false);
    
    const [webProjetEtudes, setWebProjetEtudes]            = useState(false); 
    const [webProjetSolo, setWebProjetSolo]                = useState(false); 
    const [webProjetPro, setWebProjetPro]                  = useState(false); 

    const [logicielProjetEtudes, setLogicielProjetEtudes]  = useState(false); 
    const [logicielProjetSolo, setLogicielProjetSolo]      = useState(false); 
    const [logicielProjetPro, setLogicielProjetPro]        = useState(false); 

    const [gameProjetEtudes, setGameProjetEtudes]          = useState(false);
    const [gameProjetSolo, setGameProjetSolo]              = useState(false);
    const [gameProjetPro, setGameProjetPro]                = useState(false);


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
                            <MenuButton className={ web === true || webProjetEtudes === true || webProjetPro === true || webProjetSolo === true ?
                                        'active-menuSecondaire szh-menu-button' : 'szh-menu-button'}
                                        aria-label='Mes projets de développement web'
                                        onClick={ () => {
                                                    if (webProjetEtudes === false && webProjetPro === false && webProjetSolo === false) {
                                                        isActive();
                                                        setWeb(true);
                                                        setLogiciel(false);
                                                        setUe(false); 
                                                    } else {          
                                                        isActive();
                                                        setWeb(true);
                                                        setLogiciel(false);
                                                        setUe(false);
                                                    }
                                                }
                                        }
                            >
                                Projet Web
                            </MenuButton>}
                        >
                            <MenuItem 
                                onClick={ () => { 
                                                    isActive(); 
                                                    setWeb(false);
                                                    setWebProjetEtudes(true);
                                                    setWebProjetSolo(false);
                                                    setWebProjetPro(false);
                                                    setLogicielProjetEtudes(false); 
                                                    setLogicielProjetSolo(false); 
                                                    setLogicielProjetPro(false); 
                                                    setGameProjetEtudes(false);
                                                    setGameProjetSolo(false);
                                                    setGameProjetPro(false);
                                                    setLogiciel(false);
                                                    setUe(false); 
                                                }
                                        }
                            >
                                Projets d'études
                            </MenuItem>
                            <MenuItem
                                onClick={ () => { 
                                                    isActive(); 
                                                    setWeb(false);
                                                    setWebProjetEtudes(false);
                                                    setWebProjetSolo(true);
                                                    setWebProjetPro(false);
                                                    setLogicielProjetEtudes(false); 
                                                    setLogicielProjetSolo(false); 
                                                    setLogicielProjetPro(false); 
                                                    setGameProjetEtudes(false);
                                                    setGameProjetSolo(false);
                                                    setGameProjetPro(false);
                                                    setLogiciel(false);
                                                    setUe(false); 
                                                }
                                        }
                            >
                                Projets solo
                            </MenuItem>
                            <MenuItem
                                onClick={ () => { 
                                                    isActive(); 
                                                    setWeb(false);
                                                    setWebProjetEtudes(false);
                                                    setWebProjetSolo(false);
                                                    setWebProjetPro(true);
                                                    setLogicielProjetEtudes(false); 
                                                    setLogicielProjetSolo(false); 
                                                    setLogicielProjetPro(false); 
                                                    setGameProjetEtudes(false);
                                                    setGameProjetSolo(false);
                                                    setGameProjetPro(false);
                                                    setLogiciel(false);
                                                    setUe(false); 
                                                }
                                        }
                            > 
                                Projets pro
                            </MenuItem>
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
                ) : web === false && webProjetEtudes === true ? (
                    <ProjetWebEtudes />
                ) : web === false && webProjetEtudes === false && webProjetPro === false && webProjetSolo === true ? (
                    <ProjetWebSolo />
                ) : web === false && webProjetEtudes === false && webProjetPro === true && webProjetSolo === false ? (
                    <ProjetWebPro />
                ) : (<></>)}

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
