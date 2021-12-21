import React from "react";
import NavBar from '../components/Navigation/NavBar'

const APropos = () => {
  return (
    <div className="aPropos">
    <NavBar />
      <div class="about">
        <aside>
          <figure>
            <img
              src="image/blocPresentationrefonte.png"
              alt="Le développeur web"
            />
          </figure>
          <div class="about-text_networks">
            <table class="about-text">
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
            <div class="about-networks">
              <div>
                <a
                  href="https://www.linkedin.com/in/anthony-falvo-25657020a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    class="reveal-loaded effectLight02"
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
          <div class="aboutMe">
            <h2>FALVO Anthony</h2>
            <h3>Développeur React <em>&amp;</em> Node</h3>
            <p>
              Étudiant en développement front-end, basé sur les éléments : HTML
              5, CSS 3, JavaScript ainsi que les connaissances basique sur la
              partie back -end, avec PHP, MySQL. Le programme comporte
              l’apprentissage et l’utilisation de GIT / GitHub dans les projets.
              La mise en place de l’environnement de travail, découpez et
              interprétez une maquette. Les langages essentiels cité ci-dessus,
              l’optimisation SEO, le responsive avec Bootstrap, Node.js,
              Express, MongoDB et Vue.js. Petit plus ! Je possède d’une
              expérience d’une quinzaine d’années dans l’audio, traitement,
              mixage, mastering. Concernant Photoshop, je l’utilise depuis 2008
              environs, et quelque notion en traitement vidéo sous after effect
              depuis 2014.
            </p>
            <h4>Mes compétences</h4>

            <div class="skill-bars invalide">
              <div class="bar">
                <div class="info">
                  <span class="nameskill">HTML 5 / CSS 3 / Animation CSS</span>
                </div>
                <div class="progress-line htmlcss">
                  <span></span>
                </div>
              </div>
              <div class="bar">
                <div class="info">
                  <span class="nameskill">JavaScript</span>
                </div>
                <div class="progress-line js">
                  <span></span>
                </div>
              </div>
              <div class="bar">
                <div class="info">
                  <span class="nameskill">SQL / PHP</span>
                </div>
                <div class="progress-line sql">
                  <span></span>
                </div>
              </div>
              <div class="bar">
                <div class="info">
                  <span class="nameskill">
                    Adobe P.S / Adobe A.E / FL studio
                  </span>
                </div>
                <div class="progress-line design">
                  <span></span>
                </div>
              </div>
            </div>

            <div class="aboutMe-downloadcv">
              <a
                href="/accueil"
                onclick="return confirm ('En cours de maintenance')"
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
