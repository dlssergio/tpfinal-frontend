import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Usamos Axios real (PDF D11 pág 40)
import { Container, Row, Spinner, Alert, Badge } from 'react-bootstrap';
import { categorias } from '../utils/categorias';
import ProductCard from '../components/ProductCard';

function Catalogo() {
  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const infoCategoria = categorias[idCategoria];

  useEffect(() => {
    const fetchProductos = async () => {
        if (!infoCategoria) return;
        
        setLoading(true);
        setError(null);

        try {
            // 1. Solicitud GET a la API DummyJSON (Pública y sin bloqueos)
            const url = `https://dummyjson.com/products/category/${infoCategoria.id}`;
            const response = await axios.get(url);
            
            // 2. Adaptamos los datos para que funcionen con tu ProductCard
            // La API devuelve un array en response.data.products
            const productosAdaptados = response.data.products.map(item => ({
              id: item.id,
              title: item.title,
              price: item.price,
              thumbnail: item.thumbnail,
              
              // CAMBIO CLAVE: Ahora el link es interno, a nuestra nueva página
              permalink: `/producto/${item.id}`
            }));

            setProductos(productosAdaptados);
            
        } catch (err) {
            console.error("Error API:", err);
            setError("No pudimos cargar los productos. Verifica tu conexión.");
        } finally {
            setLoading(false);
        }
    };

    fetchProductos();
  }, [idCategoria]); // Se ejecuta cuando cambias de categoría

  if (!infoCategoria) return <Alert variant="danger" className="mt-5">Categoría no encontrada</Alert>;

  return (
    <Container className="mt-5 mb-5">
      {/* Encabezado */}
      <div className="p-5 mb-4 bg-light rounded-3 border shadow-sm" 
           style={{
             background: `linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%), url(${infoCategoria.imagen})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             color: 'white'
           }}>
        <h1 className="display-4 fw-bold">{infoCategoria.nombre}</h1>
        <p className="col-md-8 fs-5">{infoCategoria.descripcion}</p>
        <Badge bg={infoCategoria.color}>Stock Disponible</Badge>
      </div>

      {/* Estado de Carga */}
      {loading && (
        <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-2 text-muted">Conectando con API...</p>
        </div>
      )}

      {/* Estado de Error */}
      {!loading && error && (
          <Alert variant="danger" className="text-center">
              <h4>⚠️ Error de Conexión</h4>
              <p>{error}</p>
          </Alert>
      )}

      {/* Listado de Productos */}
      {!loading && !error && (
        <Row>
            {productos.map(prod => (
                <ProductCard key={prod.id} producto={prod} />
            ))}
        </Row>
      )}
    </Container>
  );
}

export default Catalogo;