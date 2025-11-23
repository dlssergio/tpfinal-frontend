import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // <--- AGREGAR ESTA IMPORTACIÓN

function ProductCard({ producto }) {
  if (!producto) return null;

  return (
    <Col md={4} lg={3} className="mb-4">
      <Card className="h-100 shadow-sm border-0 card-hover">
        {/* ... (la parte de la imagen queda igual) ... */}
        <div className="text-center p-3 bg-white" style={{ borderBottom: '1px solid #eee' }}>
            <Card.Img variant="top" src={producto.thumbnail} style={{ height: '160px', objectFit: 'contain' }} />
        </div>

        <Card.Body className="d-flex flex-column">
          {/* ... (la parte del título queda igual) ... */}
          <Card.Title style={{ fontSize: '1rem', height: '3rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
              {producto.title}
          </Card.Title>

          <Card.Text className="fs-4 fw-bold mt-auto text-dark">
            U$S {producto.price}
          </Card.Text>
          
          {/* CAMBIO EN EL BOTÓN: */}
          <Button 
            as={Link} // Se comporta como Link de React Router
            to={producto.permalink} // Usa la ruta interna (/producto/81)
            variant="primary" 
            className="w-100 mt-2"
          >
            Ver Detalle
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;