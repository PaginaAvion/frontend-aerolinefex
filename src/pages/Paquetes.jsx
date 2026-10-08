import { useCarrito } from '../context/CarritoContext';

const paquetes = [
  {
    id: 1,
    nombre: 'Islas del Caribe',
    descripcion: 'Paquete 5 noches',
    precio: 486526,
    imagen: '/img/caribe.jpg',
    alt: 'Caribe'
  },
  {
    id: 2,
    nombre: 'París, Francia',
    descripcion: 'Paquete 5 noches de 5 estrellas',
    precio: 632165,
    imagen: '/img/Paris.jpg',
    alt: 'Paris'
  },
  {
    id: 3,
    nombre: 'Los Ángeles',
    descripcion: 'Paquete 7 noches de 5 estrellas',
    precio: 394500,
    imagen: '/img/Los angeles.avif',
    alt: 'Los Angeles'
  },
  {
    id: 4,
    nombre: 'Tokyo, Japón',
    descripcion: 'Paquete 5 noches de 5 estrellas',
    precio: 560388,
    imagen: '/img/japon.jpg',
    alt: 'Tokyo'
  },
  {
    id: 5,
    nombre: 'Andorra',
    descripcion: 'Paquete 5 noches de 5 estrellas',
    precio: 437623,
    imagen: '/img/Andorra.jpg',
    alt: 'Andorra'
  }
];

export default function Paquetes() {
  const { agregarAlCarrito } = useCarrito();

  const formatearPrecio = (valor) => `$${valor.toLocaleString('es-CL')}`;

  return (
    <div className="container mt-5 mb-5">
      <div className="row g-4 justify-content-center">
        {paquetes.map((paquete) => (
          <div key={paquete.id} className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 position-relative">
              <span className="badge bg-white text-dark position-absolute top-0 end-0 m-2 shadow-sm">
                Oferta de viajes
              </span>

              <img
                src={paquete.imagen}
                className="card-img-top rounded-top-4"
                alt={paquete.alt}
                style={{ height: '180px', objectFit: 'cover' }}
              />

              <div className="card-body d-flex flex-column">
                <h6 className="card-title fw-bold">{paquete.nombre}</h6>
                <p className="text-muted small mb-3">
                  {paquete.descripcion} <br />
                  <span className="text-primary fw-semibold">
                      Vuelo ida y vuelta incluido
                  </span>
                </p>

                <div className="mt-auto">
                  <span className="text-muted small d-block">Desde</span>
                  <h4 className="fw-bold mb-2">
                    {formatearPrecio(paquete.precio)}
                  </h4>
                  <small
                    className="text-muted d-block mb-3"
                    style={{ fontSize: '0.75rem' }}
                  >
                    Precio final por persona
                  </small>

                  <button
                    className="btn btn-primary w-100"
                    onClick={() =>
                      agregarAlCarrito(
                        paquete.id,
                        paquete.nombre,
                        paquete.precio
                      )
                    }
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}