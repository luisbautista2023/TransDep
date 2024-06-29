import { useEffect } from "react";
import { targetData } from "../../../../data/datosTarget";
import imgCarretera from '../../../../assets/img/img-carretera.jpg'
import Aos from "aos";

const HomeServicios = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="servicios-container">
        <img className="imgCarretera" src={imgCarretera} alt="carretera" />
        {targetData.map(({ texto, id, img }) => {
          return (
            <div className="target-servicio" key={id} data-aos="zoom-in-down" data-aos-duration='500'>
              <div className="target-header">
                <img src={img} alt="img-servicio" />
              </div>
              <div className="target-body">
                <h2> {texto} </h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeServicios;
