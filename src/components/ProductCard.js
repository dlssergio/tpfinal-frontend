import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({ producto }) {
  // Si no hay producto, no renderizamos nada
  if (!producto) return null;

  return (
    <Col md={4} lg={3} className="mb-4">
      {/* Agregamos la clase card-hover para el efecto visual */}
      <Card className="h-100 shadow-sm border-0 card-hover">
        <div className="text-center p-3 bg-white" style={{ borderBottom: '1px solid #eee' }}>
            <Card.Img 
                variant="top" 
                src={producto.thumbnail} 
                style={{ height: '160px', objectFit: 'contain' }} 
            />
        </div>
        <Card.Body className="d-flex flex-column">
          
          {/* Título con estilo para limitar líneas */}
          <Card.Title style={{ 
              fontSize: '1rem', 
              height: '3rem', // Altura fija
              overflow: 'hidden', 
              display: '-webkit-box', 
              WebkitLineClamp: 2, // Cortar a las 2 líneas
              WebkitBoxOrient: 'vertical'
          }}>
              {producto.title}
          </Card.Title>

          <Card.Text className="fs-4 fw-bold mt-auto text-dark">
            $ {producto.price.toLocaleString('es-AR')}
          </Card.Text>
          
          <Button 
            as={Link}
            to={`/producto/${producto.id}`}
            variant="primary" 
            className="w-100 mt-2"
          >
            Ver Producto
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;