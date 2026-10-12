export default function Home() {
  return (
    <div 
      className="container-fluid d-flex flex-column justify-content-center align-items-center text-white" 
      style={{ 
        backgroundImage: 'url("/img/bienvenidaavion.webp")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        height: '90vh' 
      }}
    >
      <h1 className="fw-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}> 
        Bienvenido a Aerolinex 
      </h1>
      <p className="fs-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
        Compra tus pasajes YA!
      </p>
    </div>
  );
}