import React, { createContext, useState, useContext, useEffect } from 'react';

// Creamos el contexto
const CartContext = createContext();

// Hook personalizado para usar el carrito fácilmente
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Iniciamos el estado buscando en localStorage para no perder datos al recargar
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardamos en localStorage cada vez que cambia el carrito
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Función para agregar producto
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Si ya existe, aumentamos cantidad (opcional, aquí simplificado a agregar otro item o no duplicar)
      // Para simplificar este TP, si ya existe avisamos, o simplemente lo agregamos.
      // Vamos a hacer que se puedan agregar múltiples unidades
      const exists = prevCart.find(item => item.id === product.id);
      if (exists) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Función para eliminar producto
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Calcular total
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};