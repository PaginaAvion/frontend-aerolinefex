export default function Vuelos() {
  return (
    <div className="container mt-5">
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
      >
        <ul className="nav nav-tabs border-0 mb-3" id="pestañasBuscador">
          <li className="nav-item">
            <a className="nav-link active fw-bold text-danger border-0 border-bottom border-danger" href="#">
              Viajes
            </a>
          </li>
        </ul>

        <form className="row g-2 align-items-end">
          <div className="col-lg-3 col-md-6">
            <label className="form-label text-muted small fw-bold mb-1">Origen</label>
            <input type="text" className="form-control" placeholder="Santiago, Chile (SCL)" />
          </div>

          <div className="col-lg-3 col-md-6">
            <label className="form-label text-muted small fw-bold mb-1">Destino</label>
            <input type="text" className="form-control" placeholder="¿A dónde viajas?" />
          </div>

          <div className="col-lg-3 col-md-6">
            <label className="form-label text-muted small fw-bold mb-1">Fechas</label>
            <div className="input-group">
              <input type="date" className="form-control" title="Fecha de Ida" />
              <input type="date" className="form-control" title="Fecha de Vuelta" />
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <label className="form-label text-muted small fw-bold mb-1">Pasajeros</label>
            <select className="form-select">
              <option>1 Turista</option>
              <option>2 Turistas</option>
              <option>3 Turistas</option>
            </select>
          </div>

          <div className="col-lg-1 col-md-12 mt-3 mt-lg-0">
            <button type="submit" className="btn btn-danger w-100 fw-bold rounded-pill p-2">
              Buscar
            </button>
          </div>

          {/* Imagen de referencia debajo del buscador */}
          <img src="/img/Av2.jpg" className="d-block w-100 mt-4 rounded" alt="Avión de vuelos" />
        </form>
      </div>
    </div>
  );
}
