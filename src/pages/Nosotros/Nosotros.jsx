import Valores from "./components/valores/Valores";

import fondoNosotros from "../../assets/img/nosotros.jpg";
import logo from "../../assets/img/logo.png";

function Nosotros() {
  return (
    <>
      <div className="nosotros-container">
        <div className="nosotros-imgen-container">
          <img
            className="img-nosotros"
            src={fondoNosotros}
            alt="img-nosotros"
          />
        </div>
        <div className="nosotros-container-parrafo">
          <h1 className="nosotros-titulo">NOSOTROS</h1>
          <div className="nosotros-texto">
            <p>TRANSDEP ESPECIAL DE COLOMBIA S.A.S</p> Somos una empresa
            especializada en transporte de personal comprometida con la
            seguridad, comodidad y eficiencia. Nuestra misión es proporcionar
            soluciones de movilidad confiables y adaptadas a las necesidades
            específicas de nuestros clientes. Con un equipo capacitado y
            experimentado, garantizamos un servicio puntual y de calidad,
            orientado a optimizar la experiencia de transporte para cada uno de
            nuestros pasajeros.
          </div>
          <img src={logo} alt="" className="logo-verde" />
        </div>
      </div>

      {/* COMPONENTES DE VALORES */}
      <Valores />

      {/* COMPONENTES DE MISION Y VISION */}
    </>
  );
}

export default Nosotros;
