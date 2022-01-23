import React from 'react';
import { ReactTerminal } from 'react-terminal';

const Terminal = () => {

    const commands = {
        nom: "FALVO",
        cd: (directory) => `changed path to ${directory}`,
        welcome: `saisissez la commande " help " pour en savoir plus  `,
        help: "En savoir plus sur mon profil ?"
    };

    return (
        
        <ReactTerminal commands={commands} theme="dracula" 
                       welcomeMessage={commands.welcome}
        />

    );
};

export default Terminal;