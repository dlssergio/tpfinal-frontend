import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import DetalleProducto from "./pages/DetalleProducto"; 
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* Contenedor principal con Flexbox para el Footer pegajoso */}
      <div className="d-flex flex-column min-vh-100">
        
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:idCategoria" element={<Catalogo />} />
          
          {/* Ruta de Detalle */}
          <Route path="/producto/:id" element={<DetalleProducto />} />
          
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;