import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Ingresa tu correo electrónico.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Ingresa un correo válido.');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setCargando(true);

    try {
      const usuario = await login(email.trim().toLowerCase(), password);

      if (usuario.rol === 'administrador') {
        alert(`¡Bienvenido ${usuario.nombre}! Redirigiendo al Panel de Administración...`);
        navigate('/admin');
      } else {
        alert(`¡Bienvenido ${usuario.nombre}! Redirigiendo a Vuelos...`);
        navigate('/vuelos');
      }
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: '80vh' }}
    >
      <div
        className="card shadow-sm border-0"
        style={{ width: '100%', maxWidth: '420px', borderRadius: '10px' }}
      >
        <div className="card-body p-4 p-md-5">
          <h4 className="text-center fw-bold mb-2" style={{ color: '#002a5c' }}>
            Iniciar Sesión
          </h4>
          <p className="text-center text-muted small mb-4">
            Ingresa a tu cuenta para gestionar tus vuelos.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label fw-bold"
                style={{ color: '#002a5c', fontSize: '0.9rem' }}
              >
                Correo Electrónico:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="ejemplo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={cargando}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="form-label fw-bold"
                style={{ color: '#002a5c', fontSize: '0.9rem' }}
              >
                Contraseña:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={cargando}
              />
            </div>

            {error && (
              <div className="alert alert-danger py-2 small" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn w-100 text-white"
              style={{ backgroundColor: '#002a5c' }}
              disabled={cargando}
            >
              {cargando ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>

          <div className="mt-4 pt-3 border-top small text-muted">
            <strong>Credenciales de prueba:</strong>
            <br />
            Admin: <code>admin@aerolinefex.cl</code> / <code>admin123</code>
            <br />
            Cliente: <code>cliente@gmail.com</code> / <code>cliente123</code>
          </div>
        </div>
      </div>
    </div>
  );
}