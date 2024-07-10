import { Link } from "react-router-dom";
import { BsList, BsFillHouseFill } from "react-icons/bs";
import logoTrasnDep from "../../assets/img/Logo_Act.jpg";
import { useState } from "react";
import BtnBurger from "./components/BtnBurger";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [close, setClose] = useState(true);
  const [modal, setModal] = useState(true)

  const handleClick = () => {
    setClicked(!clicked);
    setClose(!close);
    console.log("estado clicked: ", close)
  };
  
  const clickCerrarModal = () => {
    setModal(modal);
    console.log("estado modal= " + modal)

  }

  return (
    <>
      <div className={`nav-container ${clicked ? "open"  : "" &&  `${modal ? "modalClose" : ""}`}`}>
        <div className="nav-logo">
          <Link className="logo-inicio" to="/">
            <img src={logoTrasnDep} alt="Logo" />
          </Link>
        </div>

        {/* MENU HAMBURGUESA */}
        <BtnBurger
          clicked={clicked}
          close={close}
          handleClick={handleClick}
        />

        {/* ******************************************************** */}

        <div className="nav-link">
          <Link className="link" onClick={clickCerrarModal} to="/">
            <BsFillHouseFill /> Inicio
          </Link>
          <Link className="link" onClick={clickCerrarModal} to="nosotros">
            Nosotros
          </Link>
          <Link className="link" onClick={clickCerrarModal} to="contacto">
            Contacto
          </Link>
          <Link className="link" onClick={clickCerrarModal} to="nuestro servicio">
            Nuestro Servicio
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
