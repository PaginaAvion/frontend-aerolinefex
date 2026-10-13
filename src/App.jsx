import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Vuelos from './pages/Vuelos';
import Hoteles from './pages/Hoteles';
import AlquilerAutos from './pages/AlquilerAutos';
import Paquetes from './pages/Paquetes';
import Consultas from './pages/Consultas';
import Login from './pages/Login';
import PanelAdmin from './pages/PanelAdmin';


export default function App() {
  return (
    <Routes>
      {}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/vuelos" element={<Vuelos />} />
        <Route path="/hoteles" element={<Hoteles />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/consultas" element={<Consultas />} />
        <Route path="/AlquilerAutos" element={<AlquilerAutos />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {}
      <Route
        path="/admin"
        element={
          <PrivateRoute soloAdmin>
            <PanelAdmin />
          </PrivateRoute>
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={
          <div className="container mt-5">
            <h1>404 - Página no encontrada</h1>
          </div>
        }
      />
    </Routes>
  );
}