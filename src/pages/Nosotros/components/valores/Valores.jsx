import imgvalor from "../../../../assets/img/valores.jpg";
const Valores = () => {
  return (
    <>
      {/* CAJAS CON LAS TRES CARD DE TEXTOS Y TITULO */}

      <div className="valores-container">

        {/* CAJA CON DOS FONDOS */}
        <div className="valores-container-fondos">
          <div className="valores-img-titulo">
            <h1 className="valores-titulo">VALORES</h1>
            <img className="img-valores" src={imgvalor} alt="img-valores" />
          </div>
          <div className="deformarX caja-gris"></div>
          <div className="deformarX caja-verde"></div>
        </div>

        {/* CAJA DE CARDS CON TITULOS */}
        <div className="valores-textos-cards">
          <div className="valores-card">
            <h2 className="valores-sub-titulo">CALIDAD</h2>
            <p className="valores-parrafo">
              Compromiso con la excelencia en cada aspecto de nuestros
              servicios, desde la atención al cliente hasta la seguridad y
              comodidad en los traslados. Buscamos superar las expectativas de
              nuestros clientes y garantizar la máxima satisfacción en cada
              viaje
            </p>
          </div>
          <div className="valores-card">
            <h2 className="valores-sub-titulo">EFICIENCIA</h2>
            <p className="valores-parrafo">
              Explica Enfoque en la optimización de recursos y procesos para
              ofrecer soluciones de transporte rápidas, efectivas y confiables.
              Buscamos ser ágiles en nuestras operaciones, brindando servicios
              oportunos y cumpliendo con los plazos acordados.qué te diferencia
              de tus competidores.
            </p>
          </div>
          <div className="valores-card">
            <h2 className="valores-sub-titulo">INNOVACIÓN</h2>
            <p className="valores-parrafo">
              Explica qué te diferenConstante búsqueda de nuevas tecnologías y
              prácticas innovadoras que nos permitan mejorar la experiencia del
              cliente, aumentar la seguridad en nuestros servicios y contribuir
              al desarrollo sostenible del sector del transporte automotor
              especial en Santa Marta y la Costa Caribe.cia de tus competidores
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Valores;
