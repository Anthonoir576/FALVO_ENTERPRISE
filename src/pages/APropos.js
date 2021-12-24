import React from "react";
import NavBar from "../components/Navigation/NavBar";

const APropos = () => {
  return (
    <div className="aPropos">
      <NavBar />
      <div className="about">
        <aside>
          <figure>
            <img
              src="image/blocPresentationrefonte.png"
              alt="Le développeur web"
            />
          </figure>
          <div className="about-text_networks">
            <table className="about-text">
              <tr>
                <td>
                  &bull; <strong> Nom / Prénom</strong>
                </td>
                <td>: FALVO Anthony</td>
              </tr>
              <tr>
                <td>
                  &bull; <strong>Date de naissance</strong>
                </td>
                <td>: 25 Juin 1993</td>
              </tr>
              <tr>
                <td>
                  &bull; <strong>Adresse</strong>
                </td>
                <td>
                  : xxx rue du capitaine wazny
                  <br /> Montigny-en-ostrevent,
                  <br /> 59182, France
                </td>
              </tr>
              <tr>
                <td>
                  &bull; <strong>Téléphone</strong>
                </td>
                <td>: 06.xx.xx.52.92</td>
              </tr>
              <tr>
                <td>
                  &bull; <strong>E-mail</strong>
                </td>
                <td>: anthony.falvo.pro@gmail.com</td>
              </tr>
            </table>
            <hr />
            <div className="about-networks">
              <div>
                <a
                  href="https://www.linkedin.com/in/anthony-falvo-25657020a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="reveal-loaded effectLight02"
                    src="image/lkn.png"
                    alt="reseaux sociaux"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Anthonoir576"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="image/gthb2.png" alt="reseaux sociaux" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.codingame.com/profile/a9c5e02664b6550338f3d8ae2f918aad7843064"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="image/cig.png" alt="reseaux sociaux" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/anthony.falvo.399/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="image/f.png" alt="reseaux sociaux" />
                </a>
              </div>
            </div>
          </div>
        </aside>

        <article>
          <div className="aboutMe">
            <h2>FALVO Anthony</h2>
            <h3>
              Développeur React <em>&amp;</em> Node
            </h3>
            <p>
              Développeur React et Node.js, basé sur les éléments : HTML 5, CSS
              3, Sass et JavaScript, React, et Redux ainsi que les connaissances
              basique sur la partie back-end, avec node.js , Express, Mongoose,
              MongoDB, MySql et Sequelize. Le programme comporte l’apprentissage
              et l’utilisation de GIT / GitHub dans les projets comme vous
              pouvez le voir sur mon Github. La mise en place de l’environnement
              de travail, découpez et interprétez une maquette. Les langages
              essentiels cité ci-dessus, l’optimisation SEO, l'accessibilité
              web, et un peu de responsive avec Bootstrap. Petit plus ! Je
              possède une expérience d’une quinzaine d’années dans l’audio,
              traitement, mixage, mastering sous Fl Studio. Concernant Photoshop
              / Gimp, je l’utilise depuis 2008 environs, et quelque notion en
              traitement vidéo sous after effect / shotcut depuis 2014.
              Autodidacte pendant 1 an dans le développement, j'ai suivi, et réussi ma
              formation développeur web chez OpenClassRooms en 2 mois et demi. 
            </p>
            <h4>Mes compétences</h4>

            <div className="skill-bars invalide">
              <div className="bar">
                <div className="info">
                  <span className="nameskill">HTML 5 / CSS 3 / SASS</span>
                </div>
                <div className="progress-line htmlcss">
                  <span></span>
                </div>
              </div>
              <div className="bar">
                <div className="info">
                  <span className="nameskill">REACT / REDUX</span>
                </div>
                <div className="progress-line js">
                  <span></span>
                </div>
              </div>
              <div className="bar">
                <div className="info">
                  <span className="nameskill">BACK-END</span>
                </div>
                <div className="progress-line sql">
                  <span></span>
                </div>
              </div>
              <div className="bar">
                <div className="info">
                  <span className="nameskill">
                    AUDIO / TRAITEMENT IMAGE &amp; VIDEO
                  </span>
                </div>
                <div className="progress-line design">
                  <span></span>
                </div>
              </div>
            </div>

            <div className="aboutMe-downloadcv">
              <a
                href="/"
              >
                Voir le profil du développeur
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default APropos;
