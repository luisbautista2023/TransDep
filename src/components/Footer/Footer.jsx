import logoTodo from "../../assets/img/Logo_Act.jpg";
import face from "../../assets/img/redes/facebook.png";
import x from "../../assets/img/redes/x.png";
import instagram from "../../assets/img/redes/instagram.png";
import youtube from "../../assets/img/redes/youtube.png";
import { BsSignpostSplit, BsFillCloudSunFill, BsFillTelephoneFill  } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterAct = () => {
  return (
    <>
      <div className="footer-container">
        <div className="section-card-texto">
          <img
            className="img-card"
            src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="section-cards">
            <img className="logo-cmpleto" src={logoTodo} alt="logoCompleto" />
            <h3 className="direccion"><BsSignpostSplit/> Calle 47 #30A - 48 Urb Curinca</h3>
            <h3 className="direccion"><BsFillCloudSunFill /> SANTA MARTA COLOMBIA</h3>
            <h3 className="contact-telefono">
              <span   className="contact"> <BsFillTelephoneFill/> CONTACTO ➡</span>310 5120491
            </h3>
          </div>
        </div>
        
        {/* SECCION ACCESO A PAGINAS */}
        <div className="list-paginas">
          <Link className="link-footer" to="nosotros">
            Nosotros
          </Link>
          <Link className="link-footer" to="contacto">
            Contacto
          </Link>
          <Link className="link-footer" to="nuestro servicio">
            Nuestro Servicio
          </Link>
        </div>

        {/* SECCION REDES SOCIALES */}
        <div className="section-redes">
          <div className="iconos-redes">
            <a
              href="https://www.facebook.com/profile.php?id=61557129962159"
              target="_blank"
            >
              <img className="logo-redes" src={face} alt="face" />
            </a>
            <img className="logo-redes" src={x} alt="face" />
            <a
              href="https://www.instagram.com/transdep_oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <img className="logo-redes" src={instagram} alt="face" />
            </a>
            <img className="logo-redes" src={youtube} alt="face" />
          </div>
        </div>
        <h2 className="copyrigth">
          Copyright&copy; 2024 Derechos reservados por TransDep.
        </h2>
      </div>
    </>
  );
};

export default FooterAct;
