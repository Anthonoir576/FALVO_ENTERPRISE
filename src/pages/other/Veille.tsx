
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import React                   from 'react';
import NavBar                  from '../../components/Navigation/NavBar';
import Maintenance             from '../../components/Maintenance/Maintenance';
import { baseDeDonneeVeille }  from '../../components/DB/DbVeille';
import Test                    from '../../components/Maintenance/Test';
//- --------------------------------------------------------
//- ########################################################




//* ########################################################
//* --------------------- Veille --------------------------
//* ########################################################
const Veille = () => {

    const dbVeille = baseDeDonneeVeille.article;
    console.log(dbVeille);
    

    return (
        <div className='veille'>
            <NavBar />
            <div className="article-cards-container">
                <div className="row">
                    {dbVeille.map((article? :any) => {
                      return (
                        <div className="article-card" key={article.id}>
                          <div className="header-card">
                            <p className="title-card">{article.title}</p>
                            <p className="date-card">{article.date}</p>
                          </div>
                          <div className="main-card">
                            <img src={article.img} alt={article.title} />
                          </div>
                        </div>
                      );  
                    })}
                </div>
            </div>
        </div>
    );
};
//* --------------------------------------------------------
//* ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################
export default Veille;
//~ --------------------------------------------------------
//~ ########################################################