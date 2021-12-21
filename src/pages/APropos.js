import React from "react";

const APropos = () => {
  return (
    <div class="about">
      <aside class="reveal-loaded reveal-L">
        <figure id="nav-link-1">
          <img src="image/blocPresentationrefonte.png" alt="Anthony FALVO" />
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
                : 269 rue du capitaine wazny
                <br /> Montigny-en-ostrevent,
                <br /> 59182, France
              </td>
            </tr>
            <tr>
              <td>
                &bull; <strong>Téléphone</strong>
              </td>
              <td>: 07.27.76.52.92</td>
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
                id="Nomarge2"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="reveal-loaded effectLight04"
                  src="image/gthb2.png"
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
                  class="reveal-loaded effectLight03"
                  src="image/cig.png"
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
                  class="reveal-loaded effectLight01"
                  src="image/f.png"
                  alt="reseaux sociaux"
                />
              </a>
            </div>
          </div>
        </div>
      </aside>

      <article class="reveal-loaded reveal-R ">
        <div class="aboutMe">
          <h2 class="reveal-loaded reveal-R--title">FALVO Anthony</h2>
          <h3>Développeur Front-end</h3>
          <p>
            Étudiant en développement front-end, basé sur les éléments : HTML 5,
            CSS 3, JavaScript ainsi que les connaissances basique sur la partie
            back -end, avec PHP, MySQL. Le programme comporte l’apprentissage et
            l’utilisation de GIT / GitHub dans les projets. La mise en place de
            l’environnement de travail, découpez et interprétez une maquette.
            Les langages essentiels cité ci-dessus, l’optimisation SEO, le
            responsive avec Bootstrap, Node.js, Express, MongoDB et Vue.js.
            Petit plus ! Je possède d’une expérience d’une quinzaine d’années
            dans l’audio, traitement, mixage, mastering. Concernant Photoshop,
            je l’utilise depuis 2008 environs, et quelque notion en traitement
            vidéo sous after effect depuis 2014.
          </p>
          <h4>Mes compétences</h4>

          <div class="skill-bars reveal-loaded invalide">
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
                <span class="nameskill">Adobe P.S / Adobe A.E / FL studio</span>
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
              <p>Télécharger C.V</p>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default APropos;
