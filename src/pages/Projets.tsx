
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import React                        from 'react';
import NavBar                       from '../components/Navigation/NavBar';
import MenuSecondaire               from '../components/Projets/MenuSecondaire';
import ParticuleBackgroundVersion02 from '../components/Utils/ParticuleBackgroundVersion02';
//- --------------------------------------------------------
//- ########################################################




//* ########################################################
//* --------------------- Projets --------------------------
//* ########################################################
const Projets = () => {
    return (
        <div className='myProjets'>
            {/* <ParticuleBackgroundVersion02 /> */}
            <NavBar />
            <MenuSecondaire />
        </div>
    );
};
//* --------------------------------------------------------
//* ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################
export default Projets;
//~ --------------------------------------------------------
//~ ########################################################