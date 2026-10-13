import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);
  const [cargando, setCargando] = useState(true);

  // Al cargar la app, revisar si hay sesión guardada en localStorage
  useEffect(() => {
    const tokenGuardado = localStorage.getItem('token');
    const usuarioGuardado = localStorage.getItem('usuario');

    if (tokenGuardado && usuarioGuardado) {
      setToken(tokenGuardado);
      setUsuario(JSON.parse(usuarioGuardado));
    }

    setCargando(false);
  }, []);

  async function login(email, password) {
    const resultado = await authAPI.login(email, password);

    localStorage.setItem('token', resultado.token);
    localStorage.setItem('usuario', JSON.stringify(resultado.usuario));

    setToken(resultado.token);
    setUsuario(resultado.usuario);

    return resultado.usuario;
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setToken(null);
    setUsuario(null);
  }

  const esAdmin = usuario?.rol === 'administrador';
  const estaLogueado = !!usuario;

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        cargando,
        login,
        logout,
        esAdmin,
        estaLogueado
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
}