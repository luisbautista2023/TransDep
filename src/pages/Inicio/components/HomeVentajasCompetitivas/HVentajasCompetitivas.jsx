import logo2 from '../../../../assets/img/logo.png'
import autoSeguro from '../../../../assets/img/gif/seguroauto.gif'
import gps from '../../../../assets/img/gif/gps.gif'
import salvaguarda from '../../../../assets/img/gif/salvaguarda.gif'
import acuerdo from '../../../../assets/img/gif/acuerdo.gif'
import poliza from '../../../../assets/img/gif/poliza.gif'

const HVentajasCompetitivas = () => {
  return (
    <>
      <div className="ventajas-container">

        <div className="H-ventajas-fondo">
          <div className="HV-parrafo-logo">
            <img className="logo-solo" src={logo2} alt="logo" />
            <h2 className='texto-logo'>TRANSDEP ESPECIAL DE COLOMBIA S.A.S</h2>
          </div>
          <div className="HV-parrafo2">
              <h2 className='texto2'>VENTAJAS COMPETITIVAS</h2>
          </div>
        </div>

        <div className="HV-lista-tarjetas">
          <div className="HV-tarjeta">
            <img className='img-target' src={autoSeguro} alt="t1" />
            <p>TRANSPORTE SEGURO, OPORTUNO Y CONFIABLE.</p>
          </div>
          <div className="HV-tarjeta">
            <img className='img-target' src={gps} alt="t1" />
            <p>FACIL Y CÓMODO MANEJO DE VALES FISICOS O ELECTRONICOS.</p>
          </div>
          <div className="HV-tarjeta">
            <img className='img-target' src={salvaguarda} alt="t1" />
            <p>SALVAGUARDAR LA INTEGRIDAD FÍSICA DE LOS CLIENTES.</p>
          </div>
          <div className="HV-tarjeta">
            <img className='img-target' src={acuerdo} alt="t1" />
            <p>TARIFAS PREFERENCIALES, ACORDADAS Y NEGOCIABLES SEGÚN SU NECESIDAD.</p>
          </div>
          <div className="HV-tarjeta">
            <img className='img-target' src={poliza} alt="t1" />
            <p>PÓLIZAS DE RESPONSABILIDAD CIVIL RCC Y RCE.</p>
          </div>
        
        </div>
        
      </div>
    </>
  )
}

export default HVentajasCompetitivas
