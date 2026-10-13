import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { vuelosAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function PanelAdmin() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const [vuelos, setVuelos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    id: '',
    origen: '',
    destino: '',
    fecha: '',
    precio: ''
  });

  useEffect(() => {
    cargarVuelos();
  }, []);

  async function cargarVuelos() {
    setCargando(true);
    setError('');
    try {
      const data = await vuelosAPI.listar();
      setVuelos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!form.origen || !form.destino || !form.fecha || !form.precio) {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      if (form.id) {
        await vuelosAPI.actualizar(form.id, {
          origen: form.origen,
          destino: form.destino,
          fecha: form.fecha,
          precio: Number(form.precio)
        });
      } else {
        await vuelosAPI.crear({
          origen: form.origen,
          destino: form.destino,
          fecha: form.fecha,
          precio: Number(form.precio)
        });
      }

      setForm({ id: '', origen: '', destino: '', fecha: '', precio: '' });
      cargarVuelos();
    } catch (err) {
      setError(err.message);
    }
  }

  function editarVuelo(vuelo) {
    setForm({
      id: vuelo.id,
      origen: vuelo.origen,
      destino: vuelo.destino,
      fecha: vuelo.fecha.slice(0, 10),
      precio: vuelo.precio
    });
  }

  async function eliminarVuelo(id) {
    if (!confirm('¿Estás seguro de eliminar este vuelo?')) return;

    try {
      await vuelosAPI.eliminar(id);
      cargarVuelos();
    } catch (err) {
      setError(err.message);
    }
  }

  function handleLogout() {
    logout();
    navigate('/login');
  }

  const formatearPrecio = (v) => `$${Number(v).toLocaleString('es-CL')}`;

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {}
      <aside
        className="p-3 text-white"
        style={{ width: '250px', backgroundColor: '#002a5c', flexShrink: 0 }}
      >
        <h4 className="fw-bold mb-4 pb-3 border-bottom border-light">
          AerolineFex Admin
        </h4>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a
              href="#"
              className="text-white text-decoration-none d-block p-2 rounded"
              style={{ backgroundColor: '#004080' }}
            >
              Gestionar Vuelos
            </a>
          </li>
        </ul>
      </aside>

      {}
      <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f4f4f9' }}>
        <header className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-0">Mantenedor de Vuelos</h2>
            <small className="text-muted">Bienvenido, {usuario?.nombre}</small>
          </div>
          <button className="btn btn-danger" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </header>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="fw-bold mb-3">
              {form.id ? 'Editar Vuelo' : 'Agregar Vuelo'}
            </h5>
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-3">
                <label className="form-label fw-semibold">Origen</label>
                <input
                  type="text"
                  className="form-control"
                  id="origen"
                  value={form.origen}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Destino</label>
                <input
                  type="text"
                  className="form-control"
                  id="destino"
                  value={form.destino}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-2">
                <label className="form-label fw-semibold">Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  id="fecha"
                  value={form.fecha}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-2">
                <label className="form-label fw-semibold">Precio (CLP)</label>
                <input
                  type="number"
                  className="form-control"
                  id="precio"
                  value={form.precio}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button type="submit" className="btn btn-primary w-100">
                  {form.id ? 'Actualizar' : 'Guardar'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {}
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="fw-bold mb-3">Catálogo de Vuelos</h5>

            {cargando ? (
              <p className="text-center py-4">
                <span className="spinner-border spinner-border-sm me-2"></span>
                Cargando vuelos...
              </p>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>Origen</th>
                      <th>Destino</th>
                      <th>Fecha</th>
                      <th>Precio</th>
                      <th style={{ width: '180px' }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vuelos.length === 0 && (
                      <tr>
                        <td colSpan="5" className="text-center text-muted py-4">
                          No hay vuelos registrados
                        </td>
                      </tr>
                    )}
                    {vuelos.map((vuelo) => (
                      <tr key={vuelo.id}>
                        <td>{vuelo.origen}</td>
                        <td>{vuelo.destino}</td>
                        <td>{vuelo.fecha.slice(0, 10)}</td>
                        <td>{formatearPrecio(vuelo.precio)}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-warning me-2"
                            onClick={() => editarVuelo(vuelo)}
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => eliminarVuelo(vuelo.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}