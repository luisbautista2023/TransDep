import HomeBody from "./components/HomeBody/HomeBody";
import HomeSectionCaracteristicas from "./components/HomeSecction/HomeSections";
import HomeServicios from "./components/HomeServicioEspecial/HomeServicios";
import HVentajasCompetitivas from "./components/HomeVentajasCompetitivas/HVentajasCompetitivas";

const Inicio = () => {
  return (
    <>
      <HomeBody />
      <HomeSectionCaracteristicas />
      <HomeServicios />;
      <HVentajasCompetitivas/>
    </>
  );
};

export default Inicio;
