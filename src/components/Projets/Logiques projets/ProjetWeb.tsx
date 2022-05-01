import React                   from "react";
import { baseDeDonneeproject } from "../../DB/DbProject";
import { alertContenuProjet }  from '../../Utils/Alerts';
 
const ProjetWeb = () => {


  const projetdetude = baseDeDonneeproject.web[0].studentProjects;

 
  return ( 
    <div className="project-cards-container">
      <div className="row">
        { projetdetude.map((projet?: any) => {

            //console.log(projet.date.split(' ')[0]);
            

            return (
              <div className="myCard2 card" key={projet.id}>
                <div className="wrapper">
                  <img src={projet.image} alt="test" />
                  <div className="date">
                    <span className="day">{ projet.date.split(' ')[0] }</span>
                    <span className="month">{ projet.date.split(' ')[1] }</span>
                    <span className="year">{ projet.date.split(' ')[2] }</span>
                  </div>
                  <div className="card-icon">
                  <a href={projet.github}>
                    <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                      ></path>
                    </svg>
                  </a>
                  <a href={projet.linkweb}>
                    <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"
                        ></path>
                        <path
                          d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  </div>
                  <div className="data">
                    <div className="content">
                      <p className="title">
                        <a href={projet.linkweb}> { projet.title } </a>
                      </p>
                      <p className="text">
                        { projet.resume }
                      </p>
                      <span className="author">{ projet.auteur[0].nom } { projet.auteur[0].prenom }</span>
                      <button className="btn-alert-card"
                              onClick={
                                () => {
                                  alertContenuProjet(projet.content, projet.title)
                                }
                              }
                      > 
                        Résumé du projet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }) 
        }
      </div>
    </div>
  );
};

export default ProjetWeb;

/*

    <div className="project-cards-container">
      <div className="row">
        <div className="myCard2 card">
          <div className="wrapper">
            <img src="https://via.placeholder.com/150" alt="test" />
            <div className="date">
              <span className="day">18</span>
              <span className="month">Avr</span>
              <span className="year">2022</span>
            </div>
            <div className="card-icon">
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                ></path>
              </svg>
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"
                  ></path>
                  <path
                    d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">Auteur</span>
                <p className="title">
                  <a href="https://www.google.com/">mon titre</a>
                </p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione perspiciatis sequi quasi veritatis fuga facere,
                  accusantium odit obcaecati reprehenderit molestiae incidunt
                  amet asperiores saepe tenetur minus aut aspernatur facilis sit
                  rem commodi voluptates ipsa illo earum consequatur. Atque, hic
                  sit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="myCard2 card">
          <div className="wrapper">
            <img src="https://via.placeholder.com/150" alt="test" />
            <div className="date">
              <span className="day">18</span>
              <span className="month">Avr</span>
              <span className="year">2022</span>
            </div>
            <div className="card-icon">
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                ></path>
              </svg>
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"
                  ></path>
                  <path
                    d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">Auteur</span>
                <p className="title">
                  <a href="https://www.google.com/">mon titre</a>
                </p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione perspiciatis sequi quasi veritatis fuga facere,
                  accusantium odit obcaecati reprehenderit molestiae incidunt
                  amet asperiores saepe tenetur minus aut aspernatur facilis sit
                  rem commodi voluptates ipsa illo earum consequatur. Atque, hic
                  sit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="myCard2 card">
          <div className="wrapper">
            <img src="https://via.placeholder.com/150" alt="test" />
            <div className="date">
              <span className="day">18</span>
              <span className="month">Avr</span>
              <span className="year">2022</span>
            </div>
            <div className="card-icon">
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                ></path>
              </svg>
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"
                  ></path>
                  <path
                    d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">Auteur</span>
                <p className="title">
                  <a href="https://www.google.com/">mon titre</a>
                </p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione perspiciatis sequi quasi veritatis fuga facere,
                  accusantium odit obcaecati reprehenderit molestiae incidunt
                  amet asperiores saepe tenetur minus aut aspernatur facilis sit
                  rem commodi voluptates ipsa illo earum consequatur. Atque, hic
                  sit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="myCard2 card">
          <div className="wrapper">
            <img src="https://via.placeholder.com/150" alt="test" />
            <div className="date">
              <span className="day">18</span>
              <span className="month">Avr</span>
              <span className="year">2022</span>
            </div>
            <div className="card-icon">
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                ></path>
              </svg>
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"
                  ></path>
                  <path
                    d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">Auteur</span>
                <p className="title">
                  <a href="https://www.google.com/">mon titre</a>
                </p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione perspiciatis sequi quasi veritatis fuga facere,
                  accusantium odit obcaecati reprehenderit molestiae incidunt
                  amet asperiores saepe tenetur minus aut aspernatur facilis sit
                  rem commodi voluptates ipsa illo earum consequatur. Atque, hic
                  sit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="myCard2 card">
          <div className="wrapper">
            <img src="https://via.placeholder.com/150" alt="test" />
            <div className="date">
              <span className="day">18</span>
              <span className="month">Avr</span>
              <span className="year">2022</span>
            </div>
            <div className="card-icon">
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                ></path>
              </svg>
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"
                  ></path>
                  <path
                    d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">Auteur</span>
                <p className="title">
                  <a href="https://www.google.com/">mon titre</a>
                </p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione perspiciatis sequi quasi veritatis fuga facere,
                  accusantium odit obcaecati reprehenderit molestiae incidunt
                  amet asperiores saepe tenetur minus aut aspernatur facilis sit
                  rem commodi voluptates ipsa illo earum consequatur. Atque, hic
                  sit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="myCard2 card">
          <div className="wrapper">
            <img src="https://via.placeholder.com/150" alt="test" />
            <div className="date">
              <span className="day">18</span>
              <span className="month">Avr</span>
              <span className="year">2022</span>
            </div>
            <div className="card-icon">
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                ></path>
              </svg>
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"
                  ></path>
                  <path
                    d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">Auteur</span>
                <p className="title">
                  <a href="https://www.google.com/">mon titre</a>
                </p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione perspiciatis sequi quasi veritatis fuga facere,
                  accusantium odit obcaecati reprehenderit molestiae incidunt
                  amet asperiores saepe tenetur minus aut aspernatur facilis sit
                  rem commodi voluptates ipsa illo earum consequatur. Atque, hic
                  sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

*/
