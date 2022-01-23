import React from 'react';
import { ReactTerminal } from 'react-terminal';

const Terminal = () => {

    const commands = {
        nom: "FALVO",
        cd: (directory) => `changed path to ${directory}`,
        welcome: `saisissez la commande " help " pour en savoir plus...
                  Le terminal est en cours de développement...   `,
        help: "En savoir plus sur mon profil ?",
        error: 'Commande introuvable !'
    };

    return (
        
        <ReactTerminal commands={commands} theme="dracula" 
                       welcomeMessage={commands.welcome}
                       errorMessage={commands.error}
        />

    );
};

export default Terminal;