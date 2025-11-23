import { productosSimulados } from "../utils/mockData";

// Esta función simula una llamada a una API (PDF D11 - Promesas)
export const obtenerProductosPorRegion = (categoria) => {
    return new Promise((resolve, reject) => {
        // Simulamos un retraso de red de 1 segundo (loading...)
        setTimeout(() => {
            // Filtramos los productos por la categoría que pide la URL (litoral, cuyo, etc)
            const resultados = productosSimulados.filter(p => p.categoria === categoria);
            
            if (resultados.length > 0) {
                resolve(resultados); // Éxito (resolve)
            } else {
                reject("No se encontraron productos para esta región"); // Error (reject)
            }
        }, 1000); 
    });
};