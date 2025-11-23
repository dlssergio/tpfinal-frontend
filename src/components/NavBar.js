import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
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
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            {/* Estos son los links que activan las categorías */}
            <Nav.Link as={Link} to="/categoria/celulares">Celulares</Nav.Link>
            <Nav.Link as={Link} to="/categoria/computacion">Computación</Nav.Link>
            <Nav.Link as={Link} to="/categoria/tv">TV & Audio</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;