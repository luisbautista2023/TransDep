import { Route, Routes } from "react-router-dom";

import Nosotros from "./pages/Nosotros/Nosotros";
import Inicio from "./pages/Inicio/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import NuestrosServicios from "./pages/NuestrosServicios/NuestrosServicios";
import Layout from "./layouts/Layout";
import "./styles/RouteStyles.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nuestro servicio" element={<NuestrosServicios />} />
          <Route path="*" element={<h1> pagina 404 </h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
