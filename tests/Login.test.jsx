import { describe, it, expect } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderConProveedores } from './test-utils';
import Login from '../src/pages/Login';

describe('Página Login', () => {
  it('muestra los campos de email y contraseña', () => {
    renderConProveedores(<Login />);
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
  });

  it('muestra error si se envía con campos vacíos', async () => {
    renderConProveedores(<Login />);

    const boton = screen.getByRole('button', { name: /Ingresar/i });
    fireEvent.click(boton);

    await waitFor(() => {
      expect(screen.getByText(/Ingresa tu correo electrónico/i)).toBeInTheDocument();
    });
  });

  it('muestra error si el email no tiene formato válido', async () => {
    renderConProveedores(<Login />);

    const emailInput = screen.getByLabelText(/Correo Electrónico/i);
    fireEvent.change(emailInput, { target: { value: 'no-es-un-email' } });

    const boton = screen.getByRole('button', { name: /Ingresar/i });
    fireEvent.click(boton);

    await waitFor(() => {
      expect(screen.getByText(/Ingresa un correo válido/i)).toBeInTheDocument();
    });
  });
});