import React  from 'react';
import NavBar from '../components/Navigation/NavBar';
import MenuSecondaire from '../components/Projets/MenuSecondaire';

const Projets = () => {
    return (
        <div className='myProjets'>
            <NavBar />
            {/* <div className='standBy'>
                <p className='standByP1'>En cours de développement... </p>
                <p className='standByP2'> <i className="fas fa-spinner"></i> </p>
            </div> */}
            <MenuSecondaire />
        </div>
    );
};

export default Projets;