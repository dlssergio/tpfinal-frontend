# FrontEnd - Tienda de Tecnología

**Materia:** Desarrollo de Sistemas Web (Front End)

**Alumnos:**  - Sergio Daniel de los Santos
              - Diego Moreno Rico

**Fecha:** Noviembre 2025

## 1. Descripción General

**FrontEnd** es una *Single Page Application* (SPA) desarrollada con **React.js** que simula un comercio electrónico de productos tecnológicos. La aplicación ofrece una experiencia de usuario fluida para navegar, explorar productos filtrados por categorías, ver detalles, gestionar un carrito de compras y enviar consultas a través de un formulario validado.

El proyecto demuestra la implementación práctica de conceptos clave como el consumo de APIs REST, enrutamiento dinámico, gestión de estado global y validación de formularios.

## 2. Tecnologías y Herramientas Utilizadas
El desarrollo se basó en el siguiente stack tecnológico:
 - **Core:** `React 18` (iniciado con Create React App).
 - **Enrutamiento:** `react-router-dom` (v6) para la navegación tipo SPA.
 - **Interfaz de Usuario:**
   - `Bootstrap 5` y `React-Bootstrap` para el diseño responsivo y componentes.
   - **CSS Personalizado:** Estilos para efectos visuales, transiciones y tipografía moderna ('Outfit').
   - `SweetAlert2`: Para alertas modales interactivas y feedback visual.
   - `canvas-confetti`: Librería para efectos visuales de celebración.
 - **Comunicación con API:** `Axios` para realizar peticiones HTTP asíncronas.
 - **Estado Global:** Context API de React para la gestión del carrito de compras.
 - **Formularios:**
   - `Formik`: Para el manejo del estado de los formularios.
   - `Yup`: Para la validación de esquemas y mensajes de error.
  
## 3. Origen de los Datos
Para asegurar la funcionalidad y evitar problemas de CORS, se utilizaron las siguientes fuentes:
 - **API de Productos: DummyJSON** (`https://dummyjson.com`).
   - Se consumen endpoints para obtener listados por categoría (`/products/category/{category}`) y detalles de productos individuales (`/products/{id}`).

 - **Recursos Estáticos:** Imágenes de banners y logos servidos localmente desde `/public/img` para un control visual preciso y sin dependencias externas.

## 4. Arquitectura del Proyecto
La estructura de carpetas está organizada para facilitar la escalabilidad y el mantenimiento:

```
src/
├── components/   # Componentes reutilizables (NavBar, Footer, ProductCard)
├── context/      # Lógica del estado global (CartContext)
├── pages/        # Vistas principales (Home, Catalogo, DetalleProducto, Carrito, Contacto)
├── utils/        # Configuraciones y constantes (categorias.js, mockData.js)
└── App.js        # Configuración principal de rutas y proveedores
```

## 5. Funcionalidades Clave

### A. Navegación y Rutas Dinámicas
Implementación de BrowserRouter con rutas dinámicas:
 - `/categoria/:idCategoria`: Reutiliza el componente Catalogo para mostrar diferentes productos según el parámetro de la URL.
 - `/producto/:id`: Carga dinámicamente el detalle de un producto específico.

### B. Carrito de Compras (Estado Global)
Sistema de carrito robusto implementado con Context API:
 - **Persistencia:** Los datos del carrito se guardan en `localStorage` para no perderse al recargar.
 - **Funciones:** Agregar, eliminar, vaciar carrito y cálculo automático de totales.
 - **Acceso Global:** El estado del carrito es accesible desde cualquier componente, permitiendo mostrar el contador de items en el `NavBar`.

### C. Manejo de Errores y Carga
Uso de Hooks (`useEffect`, `useState`) para gestionar el ciclo de vida de las peticiones asíncronas. Se implementaron estrategias de "Fallback" (datos de respaldo) y alertas visuales para manejar fallos en la API de manera amigable para el usuario.

### D. Formulario de Contacto
Formulario en la ruta `/contacto` con validación en tiempo real gracias a **Formik** y **Yup**. Incluye feedback visual de éxito con **SweetAlert2** al enviar el formulario correctamente.

### E. Mejoras de Diseño y "Wow Factor"
Se implementaron mejoras visuales y de experiencia de usuario para destacar el proyecto:
 - **Efecto Confeti:** Al finalizar una compra exitosa, se dispara una animación de confeti utilizando la librería `canvas-confetti`.
 - **Animaciones CSS:** Se agregaron animaciones de entrada suave (`fade-in`) para que la carga de páginas sea más fluida y agradable.
 - **Scrollbar Personalizado:** Se personalizó la barra de desplazamiento para que coincida con la estética de la aplicación.



## 6. Despliegue
El proyecto está optimizado para producción y listo para ser desplegado en plataformas como Netlify. Se incluye configuración de redirección para SPA.

### Ejecución Local
Si deseas correr este proyecto en tu máquina:
1. Clonar el repositorio:

```
git clone https://github.com/dlssergio/tpfinal-frontend

```

2. Instalar dependencias:

```
npm install

```

3. Iniciar el servidor:

```
npm start

```

4. Abrir en el navegador: `http://localhost:3000`

