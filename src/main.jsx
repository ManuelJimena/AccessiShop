import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import { UserContextProvider } from './context/userContext.jsx';
import IsAuth from './components/IsAuth/IsAuth';
import Electrónica from './pages/Electrónica/Electrónica';
import Hogar from './pages/Hogar/Hogar';
import Inicio from './pages/Inicio/Inicio';
import Movilidad from './pages/Movilidad/Movilidad';
import NotFound from './pages/NotFound/NotFound';
import Administrador from './pages/Administrador/Administrador';
import Ortopedia from './pages/Ortopedia/Ortopedia';
import Perfil from './pages/Perfil/Perfil';
import Payments from './pages/Payments/Payments';
import Favoritos from './pages/Favoritos/Favoritos.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Inicio />} />
            <Route path="/movilidad" element={<Movilidad />} />
            <Route path="/electrónica" element={<Electrónica />} />
            <Route path="/hogar" element={<Hogar />} />
            <Route path="/pagos" element={<Payments />} />
            <Route path="/ortopedia" element={<Ortopedia />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route
              path="/administrador"
              element={<IsAuth adminRequired><Administrador /></IsAuth>}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
