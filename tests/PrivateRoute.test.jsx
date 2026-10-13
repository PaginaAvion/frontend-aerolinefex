import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { renderConProveedores } from './test-utils';
import PrivateRoute from '../src/components/PrivateRoute';

function PaginaSecreta() {
  return <h1>Contenido secreto del admin</h1>;
}

describe('Componente PrivateRoute', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  it('NO muestra el contenido si no hay usuario logueado', async () => {
    renderConProveedores(
      <Routes>
        <Route
          path="/admin"
          element={
            <PrivateRoute soloAdmin>
              <PaginaSecreta />
            </PrivateRoute>
          }
        />
      </Routes>,
      { route: '/admin' }
    );

    // No debe ver el contenido protegido
    expect(screen.queryByText(/Contenido secreto/i)).not.toBeInTheDocument();
  });

  it('SÍ muestra el contenido si el usuario es administrador', async () => {
    localStorage.setItem(
      'usuario',
      JSON.stringify({
        id: 1,
        nombre: 'Admin',
        email: 'admin@aerolinefex.cl',
        rol: 'administrador'
      })
    );
    localStorage.setItem('token', 'token-admin');

    renderConProveedores(
      <Routes>
        <Route
          path="/admin"
          element={
            <PrivateRoute soloAdmin>
              <PaginaSecreta />
            </PrivateRoute>
          }
        />
      </Routes>,
      { route: '/admin' }
    );

    const contenido = await screen.findByText(/Contenido secreto/i);
    expect(contenido).toBeInTheDocument();
  });
});