import contacto from "../img/contacto.png";

function Contacto() {
  return (
    <div className="p-5 bg-light">
      <h3 className="text-center mb-5">Contact</h3>
      <div className="row w-75 mx-auto">
        <div className="col-md d-inline-block">
          <img
            src={contacto}
            alt=""
            className="rounded-circle mx-auto d-block"
          />
          <p className="text-center">M. en C. José Asunción Enríquez Zárate</p>
        </div>
        <div className="col-md d-inline-block my-auto">
          <div className="d-flex align-items-center">
            <div className="social-icono">
              <i className="bi bi-envelope"></i>
            </div>
            <h5 className="text-left">sseisescom@ipn.mx</h5>
          </div>
          <div className="d-flex align-items-center">
            <div className="social-icono">
              <i className="bi bi-telephone"></i>
            </div>
            <h5 className="text-left">Tel. 57296000 Ext. 52012</h5>
          </div>
          <div className="d-flex align-items-center">
            <div className="social-icono">
              <i className="bi bi-building"></i>
            </div>
            <h5 className="text-left">Edificio de gobierno, planta alta</h5>
          </div>
          <div className="d-flex align-items-center">
            <div className="social-icono">
              <i className="bi bi-calendar-week"></i>
            </div>
            <h5 className="text-left">De 9 a 15 horas y de 18 a 21 horas</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
