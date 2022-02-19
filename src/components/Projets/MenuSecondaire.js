import React, { useState } from 'react';



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
                        <p 
                           aria-label='Mes projets de développement web'
                           className={web === true ? 'active-menuSecondaire' : 'none'}
                           onClick={() => { 
                                            isActive();
                                            setWeb(true);
                                            setLogiciel(false);
                                            setUe(false); 
                                          }
                           }
                        > 
                            Projet Web    
                        </p>
                    </li>
                    
                    <li>
                        <p  
                           aria-label='Mes projets de développement logiciel'
                           className={logiciel === true ? 'active-menuSecondaire' : 'none'}
                           onClick={() => { 
                                            isActive(); 
                                            setLogiciel(true);
                                            setWeb(false);
                                            setUe(false); 
                                          }
                           }
                        >
                            Projet Logiciel    
                        </p>
                    </li>
                    <li>
                        <p
                           aria-label='Mes projets de développement sous unreal engine'
                           className={ue === true ? 'active-menuSecondaire' : 'none'}
                           onClick={() => { isActive(); 
                                            setUe(true);
                                            setWeb(false);
                                            setLogiciel(false); 
                                          }
                           }
                        >
                            Projet Unreal Engine    
                        </p>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MenuSecondaire;
