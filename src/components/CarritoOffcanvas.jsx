import { useCarrito } from '../context/CarritoContext';

export default function CarritoOffcanvas() {
  const {
    carrito,
    eliminarDelCarrito,
    vaciarCarrito,
    total
  } = useCarrito();

  const formatearPrecio = (valor) =>
    `$${valor.toLocaleString('es-CL')}`;

  const handleComprar = () => {
    if (carrito.length === 0) {
      alert('Tu carrito está vacío. Agrega paquetes antes de comprar.');
      return;
    }

    alert('¡Compra realizada con éxito! Redirigiendo a pasarela de pago...');
    vaciarCarrito();

    const offcanvasEl = document.getElementById('carritoOffcanvas');
    const instancia = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (instancia) instancia.hide();
  };

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="carritoOffcanvas"
      aria-labelledby="carritoOffcanvasLabel"
    >
      <div className="offcanvas-header bg-light">
        <h5 className="offcanvas-title fw-bold" id="carritoOffcanvasLabel">
          Tu Carrito de Compras
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body d-flex flex-column">
        <ul className="list-group mb-3">
          {carrito.length === 0 && (
            <li className="list-group-item text-center text-muted">
              Tu carrito está vacío
            </li>
          )}

          {carrito.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item.nombre}</div>
                {formatearPrecio(item.precio)} x {item.cantidad}
              </div>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => eliminarDelCarrito(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-auto border-top pt-3">
          <h5 className="fw-bold d-flex justify-content-between">
            Total: <span>{formatearPrecio(total)}</span>
          </h5>
          <button
            className="btn btn-success w-100 mt-2"
            onClick={handleComprar}
          >
            Finalizar Compra
          </button>
          <button
            className="btn btn-outline-danger w-100 mt-2"
            onClick={vaciarCarrito}
          >
            Vaciar Carrito
          </button>
        </div>
      </div>
    </div>
  );
}