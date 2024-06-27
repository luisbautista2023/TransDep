import Navbar from "../components/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      {/* Aqui en ( outlet ) se renderizan todos los componentes */}
      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
