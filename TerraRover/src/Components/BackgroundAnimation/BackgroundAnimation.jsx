// src/Components/BackgroundAnimation/BackgroundAnimation.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles"; // React component
import { loadFull } from "tsparticles";     // Core engine loader

const BackgroundAnimation = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load all features (needed for default config)
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: { value: "#000000" } },
    particles: {
      number: {
        value: window.innerWidth <= 600 ? 40 : 140
      },
      color: { value: "#ff0000" },
      shape: { type: "triangle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        random: true,
        bounce: true
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true
      }
    },
    detectRetina: true
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
    />
  );
};

export default BackgroundAnimation;
