import React  from 'react';
import NavBar from '../components/Navigation/NavBar';
import Carousel from '../components/Projets/Carousel';

const Projets = () => {
    return (
        <div className='myProjets'>
            <NavBar />
            <div className='standBy'>
                <p className='standByP1'>En cours de développement... </p>
                <p className='standByP2'> <i className="fas fa-spinner"></i> </p>
            </div>
            <Carousel />
        </div>
    );
};

export default Projets;