import { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Agregar producto (o aumentar cantidad si ya existe)
  function agregarAlCarrito(id, nombre, precio) {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === id);

      if (existe) {
        return prev.map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }

      return [...prev, { id, nombre, precio, cantidad: 1 }];
    });
  }

  // Eliminar un producto completo
  function eliminarDelCarrito(index) {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  }

  // Vaciar todo
  function vaciarCarrito() {
    setCarrito([]);
  }

  // Calcular total y cantidad (derivados del estado)
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        total,
        cantidadTotal
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useCarrito() {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe usarse dentro de un CarritoProvider');
  }
  return context;
}