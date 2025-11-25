import React from 'react';
import { Container, Table, Button, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Carrito() {
  const { cart, removeFromCart, clearCart, total } = useCart();

  const handleCheckout = () => {
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
      <Container className="mt-5 text-center">
        <h2>Tu carrito está vacío 🛒</h2>
        <p className="mb-4">¿No sabes qué comprar? ¡Mira nuestras ofertas!</p>
        <Button as={Link} to="/" variant="primary">Ir a la tienda</Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5 mb-5">
      <h2 className="mb-4">🛒 Tu Carrito</h2>
      <Table responsive striped bordered hover>
        <thead>
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
              <td>{item.title}</td>
              <td>U$S {item.price}</td>
              <td>{item.quantity}</td>
              <td>U$S {(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <div className="d-flex justify-content-between align-items-center mt-4">
          <h3 className="fw-bold">Total: U$S {total.toFixed(2)}</h3>
          <div>
              <Button variant="outline-secondary" className="me-2" onClick={clearCart}>Vaciar Carrito</Button>
              <Button variant="success" size="lg" onClick={handleCheckout}>Finalizar Compra</Button>
          </div>
      </div>
    </Container>
  );
}

export default Carrito;