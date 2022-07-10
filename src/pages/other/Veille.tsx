
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
    // console.log(dbVeille);
    

    return (
        <div className='veille'>
            <NavBar />
            <Test />
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
                            <p className="resume-card">{article.resume}</p>
                          </div>
                          <div className="footer-card">
                            <a href={article.link}>En savoir plus</a>
                            <p className="autor-card">
                              {article.auteur[0].nom} {article.auteur[0].prenom}
                            </p>
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