import imgContact from "../../assets/img/contacto.jpg";
import {
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsEnvelopeAt,
} from "react-icons/bs";

const Contacto = () => {
  return (
    <>
      <div className="contact-container">
        <div className="img-titulo-container">
          <h1 className="contact-title">CONTACTO</h1>
          <img className="img-fondo" src={imgContact} alt="contacto" />
        </div>
        <div className="texto-contacto-direccion">
          <p className="parrafo-contacto">
            Si deseas consultar mayor información sobre nuestros servicios o
            tienes alguna duda al respecto, no dudes en solicitar una
            consultoría gratuita y uno de nuestros asesores te contactará a la
            brevedad.
          </p>
          <p className="contact-telefono-correo">
            Contáctanos vía WhatsApp <BsFillTelephoneFill /> 310 512 04 91
          </p>
          <p className="contact-telefono-correo">
            <BsEnvelopeAt /> transdep3@gmail.com
          </p>
          <span className="contact-icono-direccion">
            <BsFillGeoAltFill />
          </span>
          <p className="contact-direccion">
            Calle 47 No. 30A - 48 Urb. Curinca
          </p>
        </div>
      </div>
    </>
  );
};

export default Contacto;
