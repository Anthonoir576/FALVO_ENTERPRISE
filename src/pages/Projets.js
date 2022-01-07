import React  from 'react';
import NavBar from '../components/Navigation/NavBar';

const Projets = () => {
    return (
        <div className='myProjets'>
            <NavBar />
            <div className='standBy'>
                <p className='standByP1'>En cours de développement... </p>
                <p className='standByP2'> <i className="fas fa-spinner"></i> </p>
            </div>
        </div>
    );
};

export default Projets;