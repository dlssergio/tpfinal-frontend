import React from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Importación única y correcta

function NavBar() {
  const { totalItems } = useCart();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <img
            src="/img/logo.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          FrontEnd
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/categoria/celulares">Celulares</Nav.Link>
            <Nav.Link as={Link} to="/categoria/computacion">Computación</Nav.Link>
            <Nav.Link as={Link} to="/categoria/tv">TV & Audio</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            
            {/* Botón del Carrito */}
            <Nav.Link as={Link} to="/carrito" className="position-relative ms-2">
              🛒
              {totalItems > 0 && (
                <Badge 
                  bg="danger" 
                  pill 
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;