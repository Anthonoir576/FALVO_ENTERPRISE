import React              from 'react';
import { ReactTerminal }  from 'react-terminal';
import { commands }       from './TerminalLogic';


const Terminal = () => {

    return (
        
        <ReactTerminal commands={commands} theme="dracula" 
                       welcomeMessage={commands.welcome}
                       errorMessage={commands.error}
        />

    );
};

export default Terminal;