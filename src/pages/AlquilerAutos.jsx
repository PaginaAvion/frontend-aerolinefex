import React, { useState } from 'react';
import Autos from './Autos';

export default function AlquilerAutos() {

    const [mostrarAutos, setMostrarAutos] = useState(false);

    const handleBuscar = (evento) => {
        evento.preventDefault();
        setMostrarAutos(true);
    };

    return (
        <div className="container mt-5">
            <div
                className="card shadow-lg border-0 rounded-4 p-4"
                style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
            >
                <ul className="nav nav-tabs border-0 mb-3" id="pestañasBuscador">
                    <li className="nav-item">
                        <a className="nav-link active fw-bold text-danger border-0 border-bottom border-danger" href="#">
                            Alquiler de Vehículos
                        </a>
                    </li>
                </ul>

                <form className="row g-2 align-items-end" onSubmit={handleBuscar}>
                    <div className="col-lg-3 col-md-6">
                        <label className="form-label text-muted small fw-bold mb-1">Lugar de recogida</label>
                        <input type="text" className="form-control" placeholder="Aeropuerto, ciudad o estación" />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <label className="form-label text-muted small fw-bold mb-1">Fechas (Ida / Vuelta)</label>
                        <div className="input-group">
                            <input type="date" className="form-control" title="Fecha de Ida" />
                            <input type="date" className="form-control" title="Fecha de Vuelta" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <label className="form-label text-muted small fw-bold mb-1">Horas (Recogida / Devolución)</label>
                        <div className="input-group">
                            <input type="time" className="form-control" defaultValue="10:00" title="Hora de Recogida" />
                            <input type="time" className="form-control" defaultValue="10:00" title="Hora de Devolución" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 mt-3 mt-lg-0">
                        <button type="submit" className="btn btn-danger w-100 fw-bold rounded-pill p-2">
                            Buscar
                        </button>
                    </div>
                </form>

                { }
                {mostrarAutos ? (
                    <div className="mt-4">
                        <button
                            className="btn btn-outline-secondary btn-sm mb-3"
                            onClick={() => setMostrarAutos(false)}
                        >
                            ← Volver
                        </button>
                        <Autos />
                    </div>
                ) : (
                    <img
                        src="/img/Autoexotico.jpg"
                        className="d-block w-100 mt-4 rounded"
                        alt="Vehículo de alquiler"
                    />
                )}
            </div>
        </div>
    );
}