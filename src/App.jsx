import { Route, Routes } from "react-router-dom";
import './styles/styles.scss'

import Nosotros from "./pages/Nosotros";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import NuestrosServicios from "./pages/NuestrosServicios";
import Layout from "./components/Layout";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
