import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen } from '@testing-library/react';
import { renderConProveedores } from './test-utils';
import Navbar from '../src/components/Navbar';

describe('Componente Navbar', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('muestra el logo AEROLINEFEX', () => {
    renderConProveedores(<Navbar />);
    expect(screen.getByText(/AEROLINEFEX/i)).toBeInTheDocument();
  });

  it('muestra los links de navegación principales', () => {
    renderConProveedores(<Navbar />);
    expect(screen.getByText(/Bienvenido/i)).toBeInTheDocument();
    expect(screen.getByText(/Vuelos/i)).toBeInTheDocument();
    expect(screen.getByText(/Paquetes/i)).toBeInTheDocument();
    expect(screen.getByText(/Hoteles/i)).toBeInTheDocument();
    expect(screen.getByText(/Consultas/i)).toBeInTheDocument();
  });

  it('muestra "Iniciar Sesión" cuando NO hay usuario logueado', () => {
    renderConProveedores(<Navbar />);
    expect(screen.getByText(/Iniciar Sesión/i)).toBeInTheDocument();
  });

  it('muestra el nombre del usuario cuando SÍ está logueado', () => {
    localStorage.setItem(
      'usuario',
      JSON.stringify({
        id: 1,
        nombre: 'Staff AerolineFex',
        email: 'admin@aerolinefex.cl',
        rol: 'administrador'
      })
    );
    localStorage.setItem('token', 'token-de-prueba');

    renderConProveedores(<Navbar />);

    expect(screen.getByText(/Staff AerolineFex/i)).toBeInTheDocument();
  });
});