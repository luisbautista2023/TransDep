import HomeBody from "./components/HomeBody/HomeBody";
import HomeSectionCaracteristicas from "./components/HomeSecction/HomeSections";
import HomeServicios from "./components/HomeServicioEspecial/HomeServicios";
import HVentajasCompetitivas from "./components/HomeVentajasCompetitivas/HVentajasCompetitivas";

const Inicio = () => {
  return (
    <>
    <div className="container-inicio">
      <HomeBody className="home"/>
      <HomeSectionCaracteristicas className="home" />
      <HomeServicios className="home"/>;
      <HVentajasCompetitivas className="home"/>

    </div>
    </>
  );
};

export default Inicio;
