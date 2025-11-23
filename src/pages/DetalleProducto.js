import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button, Spinner, Alert, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';

function DetalleProducto() {
  const { id } = useParams(); // Leemos el ID de la URL (ej: 81)
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetalle = async () => {
      try {
        // Pedimos el producto específico por ID a la API
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProducto(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetalle();
  }, [id]);

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" variant="primary" /></div>;
  if (!producto) return <Alert variant="danger" className="mt-5">Producto no encontrado</Alert>;

  const handleBuy = () => {
    Swal.fire({
        title: '¡Excelente elección!',
        text: `Has agregado ${producto.title} al carrito.`,
        icon: 'success',
        confirmButtonText: 'Seguir comprando',
        confirmButtonColor: '#0d6efd'
    });
};

  

  return (
    <Container className="mt-5 mb-5">
      <Row>
        {/* Columna Izquierda: Imagen Principal */}
        <Col md={6}>
            <Card className="border-0 shadow-sm mb-3">
                <Card.Img 
                    variant="top" 
                    src={producto.thumbnail} 
                    style={{ height: '400px', objectFit: 'contain', padding: '20px' }}
                />
            </Card>
            {/* Galería de imágenes pequeñas (si la API tiene más fotos) */}
            <div className="d-flex gap-2 overflow-auto">
                {producto.images && producto.images.map((img, index) => (
                    <img key={index} src={img} alt="vista" style={{width: '80px', height: '80px', objectFit: 'cover', border: '1px solid #ddd', borderRadius: '4px'}} />
                ))}
            </div>
        </Col>

        {/* Columna Derecha: Detalles */}
        <Col md={6}>
            <h6 className="text-muted text-uppercase">{producto.category}</h6>
            <h1 className="fw-bold">{producto.title}</h1>
            <p className="lead">{producto.description}</p>
            
            <h2 className="text-primary fw-bold my-4">
                U$S {producto.price} 
                <span className="fs-6 text-muted ms-2 fw-normal">(Stock: {producto.stock})</span>
            </h2>

            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={handleBuy}>Comprar Ahora</Button>
                <Button as={Link} to={-1} variant="outline-secondary">Volver al Catálogo</Button>
            </div>

            <div className="mt-4 p-3 bg-light rounded">
                <h5>Especificaciones:</h5>
                <ul className="mb-0">
                    <li>Marca: {producto.brand}</li>
                    <li>Rating: {producto.rating} / 5 ⭐</li>
                    <li>Garantía: {producto.warrantyInformation}</li>
                </ul>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleProducto;