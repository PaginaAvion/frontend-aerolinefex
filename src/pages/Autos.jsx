import { useCarrito } from '../context/CarritoContext';

const autos = [
  {
    id: 1,
    nombre: 'Citroen C3',
    capacidad: '4 personas',
    precio: 90894,
    imagen: '/img/Citroen.jpg',
    equipaje: '2 piezas de equipaje'
  },
  {
    id: 2,
    nombre: 'Omoda 5',
    capacidad: '5 personas',
    precio: 114300,
    imagen: '/img/omoda.jpg',
    equipaje: '3 piezas de equipaje'
  },
  {
    id: 3,
    nombre: 'Nissan Versa',
    capacidad: '4 personas',
    precio: 92500,
    imagen: '/img/versa.jpg',
    equipaje: '2 piezas de equipaje'
  },
  {
    id: 4,
    nombre: 'Renault Kwid',
    capacidad: '5 personas',
    precio: 120500,
    imagen: '/img/kwid.jpg',
    equipaje: '4 piezas de equipaje'
  },
  {
    id: 5,
    nombre: 'Kia Soluto',
    capacidad: '4 personas',
    precio: 100000,
    imagen: '/img/pegas.jpg',
    equipaje: '3 piezas de equipaje'
  }
];

export default function Autos() {
  const { agregarAlCarrito } = useCarrito();

  const formatearPrecio = (valor) => `$${valor.toLocaleString('es-CL')}`;

  return (
    <div className="container mt-4 mb-5">
      <div className="row g-4 justify-content-center">
        {autos.map((auto) => (
          <div key={auto.id} className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 position-relative">
              <span className="badge bg-white text-dark position-absolute top-0 end-0 m-2 shadow-sm">
                Oferta de Vehículos
              </span>

              <img
                src={auto.imagen}
                className="card-img-top rounded-top-4"
                alt={auto.nombre}
                style={{ height: '180px', objectFit: 'cover' }}
              />

              <div className="card-body d-flex flex-column">
                <h6 className="card-title fw-bold">{auto.nombre}</h6>
                <p className="text-muted small mb-3">
                  Capacidad: {auto.capacidad} <br />
                  <span className="text-primary fw-semibold">
                    🧳 {auto.equipaje}
                  </span>
                </p>

                <div className="mt-auto">
                  <span className="text-muted small d-block">Desde</span>
                  <h4 className="fw-bold mb-2">
                    {formatearPrecio(auto.precio)}
                  </h4>
                  <small
                    className="text-muted d-block mb-3"
                    style={{ fontSize: '0.75rem' }}
                  >
                    Precio por día
                  </small>

                  <button
                    className="btn btn-primary w-100"
                    onClick={() =>
                      agregarAlCarrito(auto.id, auto.nombre, auto.precio)
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