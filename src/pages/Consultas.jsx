export default function Consultas() {


  const handleSubmit = (event) => {
    event.preventDefault();
    alert("¡Mensaje enviado con éxito! Un agente de AerolineFex te responderá a la brevedad.");
    event.target.reset();
  };

  return (
    <div className="main-content container my-5">

      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold" style={{ color: '#002a5c' }}>Centro de Ayuda y Consultas</h2>
          <p className="text-muted">Completa el formulario y te responderemos a la brevedad posible.</p>
        </div>
      </div>

      <div className="row g-5 justify-content-center">

        {}
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 rounded-4 p-4">
            <h4 className="fw-bold mb-4" style={{ color: '#002a5c' }}>Envíanos tu consulta</h4>

            <form id="form-consulta" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-semibold">Nombre Completo</label>
                <input type="text" className="form-control" id="nombre" placeholder="Ej: Daniel Villar" required />
              </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label fw-semibold">Correo Electrónico</label>
                <input type="email" className="form-control" id="correo" placeholder="ejemplo@gmail.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="asunto" className="form-label fw-semibold">Asunto / Motivo</label>
                {}
                <select className="form-select" id="asunto" required defaultValue="">
                  <option value="" disabled>Selecciona una opción...</option>
                  <option value="1">Problemas con un Vuelo</option>
                  <option value="2">Dudas sobre Paquetes</option>
                  <option value="3">Modificación de Reserva</option>
                  <option value="4">Reembolsos y Cancelaciones</option>
                  <option value="5">Otro</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="mensaje" className="form-label fw-semibold">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="4" placeholder="Escribe los detalles de tu consulta aquí..." required></textarea>
              </div>
              <button type="submit" className="btn w-100 text-white fw-bold py-2" style={{ backgroundColor: '#002a5c' }}>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {}
        <div className="col-lg-5">
          <h4 className="fw-bold mb-4" style={{ color: '#002a5c' }}>Preguntas Frecuentes</h4>

          <div className="accordion shadow-sm" id="accordionFAQ">
            <div className="accordion-item border-0 border-bottom">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  ¿Cuánto equipaje puedo llevar?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                <div className="accordion-body text-muted small">
                  Todos nuestros vuelos incluyen un bolso de mano gratis. El equipaje de bodega dependerá de la tarifa seleccionada al momento de la compra.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0 border-bottom">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  ¿Cómo puedo cancelar o modificar mi vuelo?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                <div className="accordion-body text-muted small">
                  Puedes gestionar tus vuelos iniciando sesión en tu cuenta. Recuerda que las cancelaciones están sujetas a las políticas de tu tarifa.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  ¿Qué incluyen los paquetes turísticos?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                <div className="accordion-body text-muted small">
                  Nuestros paquetes incluyen los vuelos de ida y vuelta, el alojamiento por las noches especificadas y, en algunos casos, traslados y desayunos.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}