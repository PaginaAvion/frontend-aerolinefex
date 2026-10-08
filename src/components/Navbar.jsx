import { NavLink, Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

export default function Navbar() {
  const { cantidadTotal } = useCarrito();

  const linkStyle = { color: 'aliceblue' };
  const activeStyle = { color: '#ffc107', fontWeight: 'bold' };

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
            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              >
                Iniciar Sesión
              </NavLink>
            </li>
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
        </div>
      </div>
    </nav>
  );
}