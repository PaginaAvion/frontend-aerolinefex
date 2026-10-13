import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../src/context/AuthContext';
import { CarritoProvider } from '../src/context/CarritoContext';

// Renderiza un componente con todos los providers necesarios
export function renderConProveedores(ui, { route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <AuthProvider>
        <CarritoProvider>{ui}</CarritoProvider>
      </AuthProvider>
    </MemoryRouter>
  );
}

export * from '@testing-library/react';