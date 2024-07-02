import fondoBlob from "../../../../assets/img/ilustracoines/wave.svg";

const Mision = () => {
  return (
    <>
      <div className="mision-container">
        
        <div className="container-fondos">
          <img className='ilustra01' src={fondoBlob} alt="empresa" />
        </div>

        <div className="mision-secciones">
          <div className="seccion-titulo-parrafo">
            <div className="mision-titulo"></div>
            <div className="mision-parrafo"></div>
          </div>
          <div className="seccion-imagen">
            <img src="" alt="img-mision" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mision;
