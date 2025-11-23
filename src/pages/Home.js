import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* HERO SECTION: Banner Principal */}
      <div className="bg-primary text-white text-center py-5" style={{
          background: "linear-gradient(90deg, #0d6efd 0%, #0a58ca 100%)"
      }}>
        <Container>
          <h1 className="display-3 fw-bold">Tecnología al mejor precio</h1>
          <p className="lead mb-4">Envíos a todo el país (Entre Ríos, Mendoza, CABA y más).</p>
          <Button as={Link} to="/categoria/computacion" variant="light" size="lg" className="fw-bold text-primary">Ver Ofertas</Button>
        </Container>
      </div>

      {/* SECCIÓN CATEGORÍAS */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Nuestras Categorías</h2>
        <Row>
          {/* Tarjeta 1: Celulares */}
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80" style={{height: '200px', objectFit: 'cover'}} />
              <Card.Body>
                <Card.Title>Celulares</Card.Title>
                <Card.Text>Smartphones de última generación.</Card.Text>
                <Button as={Link} to="/categoria/celulares" variant="primary">Ver Celulares</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Tarjeta 2: Computación */}
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80" style={{height: '200px', objectFit: 'cover'}} />
              <Card.Body>
                <Card.Title>Computación</Card.Title>
                <Card.Text>Notebooks y accesorios para tu setup.</Card.Text>
                <Button as={Link} to="/categoria/computacion" variant="dark">Ver Computación</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Tarjeta 3: TV y Audio */}
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80" style={{height: '200px', objectFit: 'cover'}} />
              <Card.Body>
                <Card.Title>TV & Audio</Card.Title>
                <Card.Text>Sonido envolvente y pantallas 4K.</Card.Text>
                <Button as={Link} to="/categoria/tv" variant="danger">Ver TV y Audio</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;