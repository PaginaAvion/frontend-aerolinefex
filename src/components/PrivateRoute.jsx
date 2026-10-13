import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ children, soloAdmin = false }) {
  const { usuario, cargando } = useAuth();

  // Mientras carga la sesión, no redirigir
  if (cargando) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status"></div>
        <p className="mt-3">Cargando...</p>
      </div>
    );
  }

  // No logueado → al login
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // Requiere admin y no lo es → a inicio
  if (soloAdmin && usuario.rol !== 'administrador') {
    alert('Acceso denegado. Se requiere rol administrador.');
    return <Navigate to="/" replace />;
  }

  return children;
}