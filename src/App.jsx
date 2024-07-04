import { Route, Routes } from "react-router-dom";

import Nosotros from "./pages/Nosotros/Nosotros";
import Inicio from "./pages/Inicio/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import NuestrosServicios from "./pages/NuestrosServicios/NuestrosServicios";
import Layout from "./layouts/Layout";
import "./styles/RouteStyles.scss";
import Pagina404 from "./pages/404/Pagina404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nuestro servicio" element={<NuestrosServicios />} />
          <Route path="*" element={<Pagina404/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
