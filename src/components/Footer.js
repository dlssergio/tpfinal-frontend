import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <Container>
        <Row>
          {/* COLUMNA 1: MARCA Y LOGO */}
          <Col md={4} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <img 
                src="/img/logo.png" 
                alt="Logo FrontEnd" 
                width="40" 
                height="40" 
                className="me-2"
              />
              <h5 className="mb-0 fw-bold text-white">FrontEnd</h5>
            </div>
            <p className="text-white-50 small">
              Conectando la tecnología con cada rincón de Argentina. 
              Calidad, garantía y envíos a todo el país.
            </p>
          </Col>

          {/* COLUMNA 2: ENLACES RÁPIDOS */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3 text-white">Navegación</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none hover-link">Inicio</Link>
              </li>
              <li className="mb-2">
                <Link to="/categoria/celulares" className="text-white-50 text-decoration-none hover-link">Celulares</Link>
              </li>
              <li className="mb-2">
                <Link to="/categoria/computacion" className="text-white-50 text-decoration-none hover-link">Computación</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-white-50 text-decoration-none hover-link">Contacto</Link>
              </li>
            </ul>
          </Col>

          {/* COLUMNA 3: DATOS DE CONTACTO */}
          <Col md={4}>
            <h5 className="mb-3 text-white">Contacto</h5>
            <p className="text-white-50 small mb-1">📍 Av. Siempre Viva 456, Paraná</p>
            <p className="text-white-50 small mb-1">📧 info@frontend.com.ar</p>
            <p className="text-white-50 small">📞 (+54) 343 123-4567</p>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        {/* COPYRIGHT */}
        <div className="text-center text-white-50 small">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} <strong>FrontEnd</strong>. 
            Trabajo Práctico para la cátedra <em>Desarrollo de Sistemas Web (Front End)</em>.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;