import logo2 from "../../../../assets/img/logo.png";
// import coches from "../../../../assets/img/coches.png";
import abstractImg from "../../../../assets/img/abstract.svg";
import video from "../../../../assets/img/video-trans.mp4";
import HomeSectionCaracteristicas from "../HomeSecction/HomeSections";

const HomeBody = () => {
  return (
    <>
      <div className="home-container">
        <video className="videoBg" src={video} autoPlay loop muted />
        <img src={abstractImg} alt="" className="abstract" />

        <img className="home-logo2" src={logo2} alt="logo" />

        <div className="home-slogan">
          <h3 className="parrafo1"><span>TRANSDEP</span> ESPECIAL DE COLOMBIA S.A.S.</h3>
          {/* <img className="imgCoches" src={coches} alt="" /> */}
        </div>

        <div className="home-text">
          <h4>
            Somos una empresa colombiana de Transporte Terrestre Automotor de
            Servicio Especial.
          </h4>
        </div>
      </div>

      
      
    </>
  )
}

export default HomeBody
