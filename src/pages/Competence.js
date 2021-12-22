import React from "react";
import NavBar from "../components/Navigation/NavBar";

const Competence = () => {
  return (
    <div className="competence">
      <NavBar />
      <div className="EXP">
        <div className="EXP-legend">
          <h2>
            Résumé <span>/</span>&nbsp;
            <em className="reveal-loaded reveal-L">
              Experience professionnelle :
            </em>
          </h2>
          <h3 className="reveal-loaded reveal-POP">
            Experience globale dans le monde du travail.
          </h3>
        </div>
        <div id="EXP-list">
          <div className="EXP-list-L reveal-loaded reveal-L">
            <h4 className="reveal-loaded reveal-L--title">
              &bull; Experience :
            </h4>
            <div className="EXP-items">
              <img src="image/icon01.png" alt="icon book" />
              <p>
                <strong>2019 - 2021</strong>
                <br />
                Pilote de ligne, Gestion de l’équipe, et de la production.
              </p>
            </div>
            <div className="EXP-items">
              <img src="image/icon02.png" alt="icon check list" />
              <p>
                <strong>2015 - 2018</strong>
                <br />
                Agent de sécurité privé.
              </p>
            </div>
            <div className="EXP-items">
              <img src="image/icon03.png" alt="diploma" />
              <p>
                <strong>2011 - 2015</strong>
                <br />
                Armée de terre, BTP, et logistique.
              </p>
            </div>
          </div>
          <div className="EXP-list-R reveal-loaded reveal-R">
            <h4 className="reveal-loaded reveal-R--title">
              &bull; Formation :
            </h4>
            <div className="EXP-items">
              <img src="image/icon01.png" alt="icon book" />
              <p>
                <strong>2021 - Développeur web</strong>
                <br />
                Formation de développeur web en autodidacte
              </p>
            </div>
            <div className="EXP-items">
              <img src="image/icon02.png" alt="icon check list" />
              <p>
                <strong>2019 - R-408</strong>
                <br />
                Formation montage-démontage d’un echafaudage fixe.
              </p>
            </div>
            <div className="EXP-items">
              <img src="image/icon03.png" alt="diploma" />
              <p>
                <strong>2010 - Fin de scolarité </strong>
                <br />
                Fin de scolarité, avec pour seul diplome le brevet des collèges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competence;
