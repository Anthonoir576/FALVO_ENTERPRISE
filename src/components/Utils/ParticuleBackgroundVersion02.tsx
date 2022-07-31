//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ######################################################## 
import React         from 'react';
import Particles     from "react-tsparticles";
import { loadFull }  from "tsparticles";
//- --------------------------------------------------------
//- ########################################################





//* ########################################################
//* --------------- Accueil + effet txt --------------------
//* ########################################################
const ParticuleBackgroundVersion02 = () => {

  const particlesInit = async (main?: any) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles-v2"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparents",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 0,
            },
            repulse: {
              distance: 45,
              duration: 1.5,
            },
          },
        },
        particles: {
          color: {
            value: "#6cb0f6",
          },
          links: {
            color: "#6cb0f6",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
//* --------------------------------------------------------
//* ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################
export default ParticuleBackgroundVersion02;
//~ --------------------------------------------------------
//~ ########################################################

