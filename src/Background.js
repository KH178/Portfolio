import Particles from "react-particles-js";
import React, { useState, useEffect, useContext } from 'react';
import {ThemeContext} from './contexts/Theme.context';
import './Background.css'

const particlesOptions = isDarkMode => {
  return {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": false
        }
      },
      "color": {
        "value": isDarkMode ? '#fff' : '#000'
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "speed": 60,
          "size_min": 0.3
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "random": true,
        "speed": 5,
        "direction": "top",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        }
      },
      "modes": {
        "bubble": {
          "distance": 250,
          "duration": 2,
          "size": 0,
          "opacity": 0
        },
        "repulse": {
          "distance": 100,
          "duration": 1
        }
      },
      "detect_on": "canvas",

    }
  }
};

function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
}


export default function Background() {
   const { isDarkMode} = useContext(ThemeContext);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Particles className="particles"
    params = {
      particlesOptions(isDarkMode)
      }
      // height={windowDimensions.height}
      // width={windowDimensions.width}
      height='100%'
      width= '100%'
    />
    )
}