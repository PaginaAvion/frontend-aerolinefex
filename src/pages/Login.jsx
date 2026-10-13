export default function Login({ onLogin }) {
  const handleIngresar = (evento) => {
    evento.preventDefault();
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow-sm border-0" style={{ width: '100%', maxWidth: '420px', borderRadius: '10px' }}>
        <div className="card-body p-4 p-md-5">
          <h4 className="text-center fw-bold mb-2" style={{ color: '#002a5c' }}>
            Iniciar Sesión
          </h4>
          <p className="text-center text-muted small mb-4">
            Ingresa a tu cuenta para gestionar tus vuelos.
          </p>

          { }
          <form onSubmit={handleIngresar}>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label fw-bold"
                style={{ color: '#002a5c', fontSize: '0.9rem' }}
              >
                Correo Electrónico:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="ejemplo@gmail.com"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="form-label fw-bold"
                style={{ color: '#002a5c', fontSize: '0.9rem' }}
              >
                Contraseña:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="********"
              />
            </div>

            <button
              type="submit"
              className="btn w-100 text-white"
              style={{ backgroundColor: '#002a5c' }}
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}