import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';
import dogImage from './dogmain.jpg';

const LandingPage = () => {
  return (
    <div className={style.landing}>
      <div className={style.imageContainer}>
        <img src={dogImage} alt="dog-landing" />
        <div className={style.overlay}></div>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button}>
          <Link to="/home">Ingresar</Link>
        </button>
      </div>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Dogs: Look and Create Your Own Dog</h1>
      </div>
    </div>
  );
};

export default LandingPage;
