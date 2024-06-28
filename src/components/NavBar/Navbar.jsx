import { Link } from "react-router-dom";
import logoTrasnDep from "../../assets/img/Logo_Act.jpg";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <Link className="logo-inicio" to="/">
            <img src={logoTrasnDep} alt="Logo" />
          </Link>
        </div>
        
        <div className="nav-link">
          <Link className="link" to="/">
            <i className="bi bi-house-door"></i> Inicio
          </Link>
          <Link className="link" to="nosotros">
            Nosotros
          </Link>
          <Link className="link" to="contacto">
            Contacto
          </Link>
          <Link className="link" to="nuestro servicio">
            Nuestro Servicio
          </Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;
