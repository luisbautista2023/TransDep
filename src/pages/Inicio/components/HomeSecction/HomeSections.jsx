import AutosServicios from "../../../../assets/img/2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeSectionCaracteristicas = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="contain-caracteristicas">
        <div className="todos-background">
          <div className="fondo-1"></div>
          <div className="fondo2"></div>
          <div
            className="fondo3"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
            data-aos-duratiom="3000"
          ></div>
        </div>

        <div className="parrafo-container">
          <h1
            className="promo"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duratiom="1000"
          >
            CONTAMOS CON UN <span>AMPLIO</span> PARQUE AUTOMOTOR
          </h1>

          <div className="tarjeta" data-aos="flip-left" data-aos-offset="300">
            <img
              className="img-turismo"
              src="https://images.pexels.com/photos/33488/navigation-car-drive-road.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h2 className="text-tarjeta">ESTAMOS LISTOS PARA SU VIAJE</h2>
          </div>
        </div>

        <div className="imagen-container">
          <img
            src={AutosServicios}
            alt="servicios"
            className="imagenAutos"
            data-aos="fade-left"
            data-aos-offset="800"
            data-aos-easing="ease-in-sine"
            data-aos-duratiom="3000"
          />
        </div>
      </div>
    </>
  );
};

export default HomeSectionCaracteristicas;
