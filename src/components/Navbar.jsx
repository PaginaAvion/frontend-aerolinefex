import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { cantidadTotal } = useCarrito();
  const { usuario, estaLogueado, logout } = useAuth();
  const navigate = useNavigate();

  const linkStyle = { color: 'aliceblue' };
  const activeStyle = { color: '#ffc107', fontWeight: 'bold' };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: '#002a5c', paddingLeft: '1vw' }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{ color: 'aliceblue', fontWeight: 'bold', paddingRight: '20vw' }}
        >
          AEROLINEFEX
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              >
                Bienvenido
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/vuelos"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              >
                Vuelos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/paquetes"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              >
                Paquetes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/hoteles"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              >
                Hoteles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/consultas"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              >
                Consultas
              </NavLink>
            </li>
            {estaLogueado && usuario?.rol === 'administrador' && (
              <li className="nav-item">
                <NavLink
                  to="/admin"
                  className="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
                >
                  Panel Admin
                </NavLink>
              </li>
            )}
          </ul>

          {/* Botón del carrito */}
          <button
            className="btn btn-outline-light me-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#carritoOffcanvas"
          >
            🛒 Carrito (<span id="cart-count">{cantidadTotal}</span>)
          </button>

          {/* Info usuario logueado / botón login */}
          {estaLogueado ? (
            <div className="d-flex align-items-center gap-2">
              <span className="text-white small">
                👤 {usuario.nombre} ({usuario.rol})
              </span>
              <button
                className="btn btn-sm btn-outline-warning"
                onClick={handleLogout}
              >
                Salir
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-sm btn-warning fw-bold"
            >
              Iniciar Sesión
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}