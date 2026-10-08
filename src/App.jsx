import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Vuelos from './pages/Vuelos';
import Hoteles from './pages/Hoteles';
import Paquetes from './pages/Paquetes';
import Consultas from './pages/Consultas';
import Login from './pages/Login';
import PanelAdmin from './pages/PanelAdmin';

export default function App() {
  return (
    <Routes>
      {/* Páginas con navbar + footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/vuelos" element={<Vuelos />} />
        <Route path="/hoteles" element={<Hoteles />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/consultas" element={<Consultas />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Panel admin SIN navbar público (tiene su propio layout) */}
      <Route path="/admin" element={<PanelAdmin />} />

      {/* 404 */}
      <Route path="*" element={<div className="container mt-5"><h1>404 - Página no encontrada</h1></div>} />
    </Routes>
  );
}