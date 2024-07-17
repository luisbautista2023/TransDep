const NuestrosServicios = () => {
  return (
    <>
      <div className="n-servi-container">
        <span className="fondo-curvo"></span>
        <h1 className="n-servi-titulo">NUESTROS SERVICIOS</h1>
        <div className="n-servi-cards">
          <div className="n-servi-card">
            <h3 className="card-texto">Transporte Empresarial</h3>
            <img
              className="card-fondo"
              src="https://images.pexels.com/photos/977213/pexels-photo-977213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="empreserial"
            />
          </div>

          <div className="n-servi-card">
            <h3 className="card-texto"> Transporte Escolar</h3>
            <img
              className="card-fondo"
              src="https://cdn.pixabay.com/photo/2014/06/04/16/43/passenger-362169_1280.jpg"
              alt="escolar"
            />
          </div>

          <div className="n-servi-card">
            <h3 className="card-texto"> Transporte Usuarios de la Salud</h3>
            <img
              className="card-fondo"
              src="https://cdn.pixabay.com/photo/2019/04/09/10/40/dlrg-4114112_1280.jpg"
              alt="escolar"
            />
          </div>

          <div className="n-servi-card">
            <h3 className="card-texto">Transporte Turístico</h3>
            <img
              className="card-fondo"
              src="https://images.pexels.com/photos/9354752/pexels-photo-9354752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="escolar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NuestrosServicios;
