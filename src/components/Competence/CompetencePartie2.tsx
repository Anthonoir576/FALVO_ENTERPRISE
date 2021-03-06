
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import React, 
       { useState }          from 'react';
import { AiFillCaretDown }   from 'react-icons/ai';
import { AiFillCaretUp }     from 'react-icons/ai';
import Terminal              from './Terminal';
//- --------------------------------------------------------
//- ########################################################





//* ########################################################
//* ----------- competence partie terminal -----------------
//* ########################################################
const CompetencePartie2 = () => {

    const [btnOpen, setBtnOpen] = useState(false);

    return (
        <div className='EXP-about'>
            {!btnOpen ? (
                    <button className='btn-exp-about'
                            onClick={() => setBtnOpen(!btnOpen)}> <AiFillCaretDown /> 
                    </button>
                ) : (
                    <>
                        <button className='btn-exp-about'
                            onClick={() => setBtnOpen(!btnOpen)}> <AiFillCaretUp /> 
                        </button>
                        <div className='About-terminal'>
                            <Terminal />
                        </div>
                    </>
                )
            }
        </div>
    );
};
//* --------------------------------------------------------
//* ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################
export default CompetencePartie2;
//~ --------------------------------------------------------
//~ ########################################################