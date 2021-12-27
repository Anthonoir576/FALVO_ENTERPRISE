import React             from "react";
import { useState }      from "react";
import NavBar            from "../components/Navigation/NavBar";
import { init }          from "emailjs-com";
import { regexNom,
         regexEmail,
         regexMessage,
         regexObjet }    from '../components/Utils/Regex';


init("user_kFyT3rLA41sQVqH9BcaF5");


const Contact = () => {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [object, setObject]   = useState("");
  const [message, setMessage] = useState("");
  const [error, setError]     = useState(false);
  const [msgErr, setMsgErr]  = useState('');

 
  const sendToMail = (e) => {
    e.preventDefault();

    if (regexEmail(email) &&
        regexObjet(object) &&
        regexMessage(message) && 
        regexNom(name)) {

      const sendEmailJs = (templateId, variables) => {
        window.emailjs
          .send('service_s8v4a09', templateId, variables)
          .then((resultat) => {
            console.log('succès !');
            setName('');
            setObject('');
            setEmail('');
            setMessage('');
            setError(false);
            setMsgErr('');
          })
          .catch(
            (erreur) =>
              (document.querySelector(".formulaire").innerHTML =
                "Une erreur s'est produite, veuillez réessayer.")
          );
      };
  
      sendEmailJs("template_ljp5ax8", {
        name : name.trim(),
        email : email.trim(),
        object : object.trim(),
        message : message.trim(),
      });

    } else if (!regexNom(name)) {
 
      setError(true);
      setMsgErr('Votre nom doit contenir entre 2 et 30 caractères...');

    } else if (!regexEmail(email)) {

      setError(true);
      setMsgErr('Votre e-mail comporte une erreur...');

    } else if (!regexObjet(object)) {

      setError(true);
      setMsgErr('Votre objet doit contenir entre 5 et 40 caractères...');

    } else if (!regexMessage(message)) {

      setError(true);
      setMsgErr('Votre message doit contenir entre 5 et 500 caractères...');
    };


  };

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
          <form className="formulaire">
            <div className="spaceform">
              <input
                type="text"
                required
                id="name"
                name="name"
                placeholder="&ensp; Noms *"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {/* <span>Veuillez entrer uniquement des lettres</span> */}
            </div>
            <div className="spaceform">
              <input
                type="email"
                required
                id="mail"
                name="email"
                placeholder="&ensp; E-mail *"
                autoComplete="off"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {/* <span>Veuillez entrer un e-mail valide</span> */}
            </div>
            <div className="spaceform">
              <input
                type="text"
                required
                id="objet"
                name="object"
                placeholder="&ensp; Objet *"
                onChange={(e) => {
                  setObject(e.target.value);
                }}
              />
              {/* <span>Veuillez entrer uniquement des lettres</span> */}
            </div>
            <div className="spaceform">
              <textarea
                id="msg"
                required
                name="message"
                placeholder="&ensp; Message *"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="spaceform buttonsubmit">
              <button id="valid-formulaire" type="button" onClick={(e) => sendToMail(e)}>
                VALIDER
              </button>
            </div>
            {error === true && (
              <div className="spaceForm error-form">
                <span className="errorFormulaire">{msgErr}</span>
              </div>
            )}
          </form>

          <div className="contact-map">
            <iframe
              className="MAP"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20359.153255147678!2d3.165719540537278!3d50.36852805927621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2c6167184d777%3A0x40af13e81645fa0!2sMontigny-en-Ostrevent!5e0!3m2!1sfr!2sfr!4v1623908762042!5m2!1sfr!2sfr"
              title="map"
              width="500"
              height="500"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="contact-text">
        <div className="icontxt icon1">
          <img
            src={
              "https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/01.png"
            }
            alt="adresse"
          />
          <p>
            269 Rue du capitaine wazny,
            <br /> Montigny-en-Ostrevent,
            <br /> 59182, France
          </p>
        </div>
        <div className="icontxt icon2">
          <img
            src={
              "https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/03.png"
            }
            alt="e-mail"
          />
          <p>anthony.falvo.pro@gmail.com</p>
        </div>
        <div className="icontxt icon3">
          <img
            src={
              "https://raw.githubusercontent.com/Anthonoir576/FALVO_ENTERPRISE/gh-pages/assets/images/02.png"
            }
            alt="telephone"
          />
          <p>07.27.76.52.92</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
