import React, 
      { useState }           from 'react';
import { AiFillCaretDown }   from 'react-icons/ai';
import { AiFillCaretUp }     from 'react-icons/ai';


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
                            Terminal
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default CompetencePartie2;