import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingP.module.css'
import dogImage from './dogmain.jpg'



const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image">
       <img src={dogImage} alt="dog-landing" /> 
      </div>
      <button>
        <Link to="/home">Ingresar</Link>
      </button>
    </div>
  );
};

;
export default LandingPage;