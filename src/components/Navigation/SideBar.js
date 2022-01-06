import React from 'react';
import { useState } from 'react/cjs/react.development';

const SideBar = () => {

    const [toggleNavigation, setToggleNavigation] = useState(false);

    const menuFonction = () => {
        setToggleNavigation(!toggleNavigation);
    };

    return (
        <>
            <button className={toggleNavigation ? 'openMenuOff' : 'openMenu'}
                    onClick={() => menuFonction()}>
                <img src="https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/menuTypeUn.png" alt="Menu latéral" />
            </button>
            <button className={toggleNavigation ? 'closeMenu' : 'closeMenuOff'}
                    onClick={() => menuFonction()}>
                X
            </button>
        </>
    );
};

export default SideBar;