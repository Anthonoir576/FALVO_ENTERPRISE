import React     from "react";
import NavBar    from "../components/Navigation/NavBar";
import{ init }   from 'emailjs-com';
import emailjs   from 'emailjs-com';
init("user_kFyT3rLA41sQVqH9BcaF5");


const Contact = () => {

  (function(){
    emailjs.init();
  })();

  return (
    <div className="contact">
      <NavBar />
      <div className="contact-container">
        <div className="contact-legend">
          <h2>
            Message&thinsp; <span>/</span>
            <em>Ecrire un petit mot ?</em>
          </h2>
          <h3>
            hésitez pas à m’envoyer un petit message
            <br /> de soutien, ou de suggestion. Merci :)
          </h3>
        </div>

        <div className="contact-form_contact">
          <form className="formulaire" action="app.js" method="post">
            <div className="spaceform">
              <input
                type="text"
                required
                id="name"
                name="user_name"
                minlength="2"
                maxlength="20"
                pattern="^[( )a-zA-Z]+$"
                placeholder="&ensp; Noms *"
              />
              <span>Veuillez entrer uniquement des lettres</span>
            </div>
            <div className="spaceform">
              <input
                type="email"
                required
                id="mail"
                name="user_mail"
                minlength="7"
                maxlength="45"
                placeholder="&ensp; E-mail *"
              />
              <span>Veuillez entrer un e-mail valide</span>
            </div>
            <div className="spaceform">
              <input
                type="text"
                required
                id="objet"
                name="user_objet"
                minlength="5"
                maxlength="40"
                pattern="^[( )a-zA-Z]+$"
                placeholder="&ensp; Objet *"
              />
              <span>Veuillez entrer uniquement des lettres</span>
            </div>
            <div className="spaceform">
              <textarea
                id="msg"
                required
                name="user_message"
                minlength="10"
                maxlength="500"
                placeholder="&ensp; Message *"
              ></textarea>
            </div>
            <div className="spaceform buttonsubmit">
              <button
                id="valid-formulaire"
                type="submit"
                onclick="return confirm ('En cours de MAINTENANCE ! Veuillez utiliser Anthony.falvo.pro@gmail.com pour tous contact, Merci.')"
              >
                VALIDER
              </button>
            </div>
          </form>

          <div className="contact-map">
            <iframe
              className="MAP"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20359.153255147678!2d3.165719540537278!3d50.36852805927621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2c6167184d777%3A0x40af13e81645fa0!2sMontigny-en-Ostrevent!5e0!3m2!1sfr!2sfr!4v1623908762042!5m2!1sfr!2sfr"
              title="map"
              width="500"
              height="500"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            {/* <iframe
              className="MAP-S"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20364.294020458543!2d3.1767013!3d50.356545149999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1624428366977!5m2!1sfr!2sfr"
              title="map small"
              width="300"
              height="300"
              allowfullscreen=""
              loading="lazy"
            ></iframe> */}
          </div>
        </div>
      </div>
      <div className="contact-text">
        <div className="icontxt icon1">
          <img src={"https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/01.png"} alt="adresse" />
          <p>
            269 Rue du capitaine wazny,
            <br /> Montigny-en-Ostrevent,
            <br /> 59182, France
          </p>
        </div>
        <div className="icontxt icon2">
          <img src={"https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/03.png"} alt="e-mail" />
          <p>anthony.falvo.pro@gmail.com</p>
        </div>
        <div className="icontxt icon3">
          <img src={"https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/02.png"} alt="telephone" />
          <p>07.27.76.52.92</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
