import React       from 'react';
import NavBar      from '../../components/Navigation/NavBar';
import Maintenance from '../../components/Maintenance/Maintenance';

const Veille = () => {
    return (
        <div className='veille'>
            <NavBar />
            ma veille techno
            <Maintenance /> 
        </div>
    );
};

export default Veille;