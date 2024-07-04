import { Link } from "react-router-dom";
import { BsList, BsFillHouseFill } from "react-icons/bs";
import logoTrasnDep from "../../assets/img/Logo_Act.jpg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(true);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);
  return (
    <>
      <div className={`nav-container ${isOpen && "open"} `}>
        <div className="nav-logo">
          <Link className="logo-inicio" to="/">
            <img src={logoTrasnDep} alt="Logo" />
          </Link>
        </div>

        {/* LABEL PARA MENU HAMBURGUESA */}
        <label className="label-burguer" onClick={openMenu}>
          <BsList className={`btn-burguer ${isOpen && "burgerX"}`} />
        </label>

        {/* ******************************************************** */}

        <div className="nav-link">
          <Link
            onClick={() => {
              setIsClose(!isClose);
            }}
            className={`link ${isClose && "close"}`}
            to="/"
          >
            <BsFillHouseFill /> Inicio
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
