import AutosServicios from "../../../../assets/img/2.png";
const HomeSectionCaracteristicas = () => {
  return (
    <>
      <div className="contain-caracteristicas">
        {/* <img className="img-carretera" src={imgCarretera} alt="carretera" /> */}
        <img
          className="imagenAutos"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-out-sine"
          src={AutosServicios}
          alt="servicios"
        />
        <div className="fondo-1">
          <div className="parrafo-container">
            <h1 className="promo">
              CONTAMOS <span>CON UN AMPLIO</span>
              <span> PARQUE</span> AUTOMOTOR
            </h1>
          </div>
        </div>

        <div className="fondo2"></div>
        <div className="fondo3"></div>
      
      </div>
    </>
  );
};

export default HomeSectionCaracteristicas;
