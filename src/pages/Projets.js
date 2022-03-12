import React            from 'react';
import NavBar           from '../components/Navigation/NavBar';
import MenuSecondaire   from '../components/Projets/MenuSecondaire';
// import Maintenance      from '../components/Maintenance/Maintenance';

const Projets = () => {
    return (
        <div className='myProjets'>
            <NavBar />
            {/* <Maintenance /> */}
            <MenuSecondaire />
        </div>
    );
};

export default Projets;