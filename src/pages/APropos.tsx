
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import React                        from "react";
import NavBar                       from "../components/Navigation/NavBar";
import { NavLink }                  from "react-router-dom";
import ParticuleBackgroundVersion02 from "../components/Utils/ParticuleBackgroundVersion02";
//- --------------------------------------------------------
//- ########################################################




//* ########################################################
//* ---------------------- A propos ------------------------
//* ########################################################
const APropos = () => {
  return (
    <div className="aPropos">
      <NavBar />
      {/* <ParticuleBackgroundVersion02 /> */}
      <div className="about">
        <aside>
          <figure>
            <img
              src={
                "https://github.com/Anthonoir576/FALVO_ENTERPRISE/blob/gh-pages/assets/images/photo-profil_about2.jpg?raw=true"
              }
              alt="Le développeur web"
            />
          </figure>
          <div className="about-text_networks">
            <table className="about-text">
              <tbody>
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
                  <td>: 06.27.76.52.92</td>
                </tr>
                <tr>
                  <td>
                    &bull; <strong>E-mail</strong>
                  </td>
                  <td>: anthony.falvo.pro@gmail.com</td>
                </tr>
              </tbody>
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
                    src={
                      "https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/linkedin.png"
                    }
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
                  <img
                    src={
                      "https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/github.png"
                    }
                    alt="reseaux sociaux"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.codingame.com/profile/a9c5e02664b6550338f3d8ae2f918aad7843064"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={
                      "https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/codeingame.png"
                    }
                    alt="reseaux sociaux"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/anthony.falvo.399/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={
                      "https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/facebook.png"
                    }
                    alt="reseaux sociaux"
                  />
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
              3, Sass et JavaScript, React, et Redux, Typescript ainsi que les connaissances
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
              Autodidacte pendant 1 an dans le développement, j'ai suivi, et
              réussi ma formation développeur web chez OpenClassRooms en 2 mois
              et demi.
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
                  <span className="nameskill">REACT / REDUX / TS</span>
                </div>
                <div className="progress-line js">
                  <span></span>
                </div>
              </div>
              <div className="bar">
                <div className="info">
                  <span className="nameskill">NODE.JS</span>
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
              <NavLink
                to="/accueil"
                aria-label="Accueil du site Falvo Enterprise"
              >
                Voir le profil du développeur
              </NavLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
//* --------------------------------------------------------
//* ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################
export default APropos;
//~ --------------------------------------------------------
//~ ########################################################