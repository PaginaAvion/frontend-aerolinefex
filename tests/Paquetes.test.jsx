import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderConProveedores } from './test-utils';
import Paquetes from '../src/pages/Paquetes';

describe('Página Paquetes', () => {
  it('renderiza las 5 tarjetas de paquetes', () => {
    renderConProveedores(<Paquetes />);

    expect(screen.getByText(/Islas del Caribe/i)).toBeInTheDocument();
    expect(screen.getByText(/París/i)).toBeInTheDocument();
    expect(screen.getByText(/Los Ángeles/i)).toBeInTheDocument();
    expect(screen.getByText(/Tokyo/i)).toBeInTheDocument();
    expect(screen.getByText(/Andorra/i)).toBeInTheDocument();
  });

  it('cada paquete tiene un botón "Agregar al carrito"', () => {
    renderConProveedores(<Paquetes />);
    const botones = screen.getAllByRole('button', { name: /Agregar al carrito/i });
    expect(botones).toHaveLength(5);
  });
});