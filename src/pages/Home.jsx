import React from "react";
import logo2 from "../assets/img/logo.png";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <section id="sect1" class="sect">
          <video
            src="https://videos.pexels.com/video-files/6331328/6331328-hd_1366_720_24fps.mp4"
            autoplay="true"
            muted="true"
            loop="true"
            poster=""
          ></video>
        </section>
        <img className="home-logo2" src={logo2} alt="" />
        <div className="home-slogan">
          <p><h3>TRANSDEP</h3> ESPECIAL DE COLOMBIA S.A.S.</p>
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
