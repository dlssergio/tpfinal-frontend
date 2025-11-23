// Categorías de la API DummyJSON
export const categorias = {
    celulares: {
        id: "smartphones", // ID exacto de la API
        nombre: "Smartphones",
        descripcion: "Celulares de alta gama y última generación.",
        imagen: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80", 
        color: "primary"
    },
    computacion: {
        id: "laptops", // ID exacto de la API
        nombre: "Notebooks",
        descripcion: "Potencia y portabilidad para tu trabajo.",
        imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        color: "dark"
    },
    // Como esta API no tiene "TVs", usamos "tablets" que es parecido en tech
    tv: {
        id: "tablets", 
        nombre: "Tablets",
        descripcion: "Dispositivos portátiles para entretenimiento.",
        imagen: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
        color: "danger"
    }
};