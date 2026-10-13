import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderConProveedores } from './test-utils';
import CarritoOffcanvas from '../src/components/CarritoOffcanvas';

describe('Componente CarritoOffcanvas', () => {
  it('muestra "carrito vacío" cuando no hay productos', () => {
    renderConProveedores(<CarritoOffcanvas />);
    expect(screen.getByText(/Tu carrito está vacío/i)).toBeInTheDocument();
  });

  it('muestra el título "Tu Carrito de Compras"', () => {
    renderConProveedores(<CarritoOffcanvas />);
    expect(screen.getByText(/Tu Carrito de Compras/i)).toBeInTheDocument();
  });
});