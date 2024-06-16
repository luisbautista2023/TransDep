import React from "react";
import logo2 from "../assets/img/logo.png";
import video from "../assets/img/video-trans.mp4";


const Home = () => {
  return (
    <>
      <div className="home-container">
        <video className="videoBg" src={video} autoPlay loop muted />

        <section id="sect1" className="sect"></section>

        <img className="home-logo2" src={logo2} alt="logo" />

        <div className="home-slogan">
          <h3 className="parrafo1">TRANSDEP ESPECIAL DE COLOMBIA S.A.S.</h3>
        </div>
        <div className="home-text">
          <p>
            Somos una empresa colombiana de Transporte Terrestre Automotor de
            Servicio Especial.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
