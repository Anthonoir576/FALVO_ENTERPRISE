import React   from 'react';
import NavBar  from '../../components/Navigation/NavBar';
import Cv      from '../../components/Curriculum-vitae/Cv';

const CurriculumVitae = () => {
    return (
        <div className='aPropos curriculumvitae'>
            <NavBar />
            <Cv />
        </div>
    );
};

export default CurriculumVitae;