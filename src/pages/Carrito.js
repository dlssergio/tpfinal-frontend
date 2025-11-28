import React from 'react';
import { Container, Table, Button, Alert} from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

function Carrito() {
  const { cart, removeFromCart, clearCart, total } = useCart();

  const handleCheckout = () => {
    // 1. Disparamos el confeti (Efecto Creativo)
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    var random = function(min, max) {
      return Math.random() * (max - min) + min;
    };

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.1, 0.3), y: random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.7, 0.9), y: random() - 0.2 } }));
    }, 250);

    // 2. Mostramos la alerta
    Swal.fire({
      title: '¡Compra Exitosa!',
      text: 'Gracias por confiar en FrontEnd. Te enviamos la factura al mail.',
      icon: 'success',
      confirmButtonColor: '#0d6efd',
      confirmButtonText: 'Genial'
    }).then((result) => {
        if (result.isConfirmed) {
            clearCart(); // Vaciamos el carrito al confirmar
        }
    });
  };

  if (cart.length === 0) {
    return (
      <Container className="mt-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '20px', animation: 'bounce 2s infinite' }}>🛒</div>
        <h2>Tu carrito está vacío</h2>
        <p className="mb-4 text-muted">¿No sabes qué comprar? ¡Mira nuestras ofertas!</p>
        <Button as={Link} to="/" variant="primary" size="lg">Ir a la tienda</Button>
      </Container>
    );
  }

  // El resto del renderizado (tabla) queda igual...
  return (
    <Container className="mt-5 mb-5 animate__animated animate__fadeIn">
      <h2 className="mb-4">🛒 Tu Carrito</h2>
      <div className="table-responsive">
        <Table striped bordered hover className="align-middle shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cant.</th>
              <th>Subtotal</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                    <div className="d-flex align-items-center">
                        <img 
                            src={item.thumbnail} 
                            alt={item.title} 
                            style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '10px', background: 'white', borderRadius: '4px', border: '1px solid #dee2e6', padding: '2px' }} 
                        />
                        <span className="fw-medium">{item.title}</span>
                    </div>
                </td>
                <td>U$S {item.price}</td>
                <td>{item.quantity}</td>
                <td className="fw-bold">U$S {(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <Button 
                    variant="outline-danger" 
                    size="sm" 
                    onClick={() => removeFromCart(item.id)}
                    title="Eliminar item"
                  >
                    🗑️
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
      <div className="d-flex justify-content-end align-items-center mt-4 p-4 bg-light rounded shadow-sm border">
          <div className="text-end">
            <h3 className="fw-bold mb-3 text-primary">Total: U$S {total.toFixed(2)}</h3>
            <div className="d-flex gap-2 justify-content-end">
                <Button variant="outline-secondary" onClick={clearCart}>Vaciar Carrito</Button>
                <Button variant="success" size="lg" onClick={handleCheckout}>Finalizar Compra</Button>
            </div>
          </div>
      </div>
    </Container>
  );
}

export default Carrito;