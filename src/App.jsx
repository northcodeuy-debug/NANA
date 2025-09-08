import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Datos de productos de ejemplo. En una aplicación real, esto vendría de una base de datos.
const productos = [
  {
    id: 1,
    nombre: 'Sudadera Negra Clásica',
    precio: 55.99,
    imagenUrl: 'https://placehold.co/400x400/1e1e1e/d3d3d3?text=Sudadera+Negra',
    descripcion: 'Una sudadera cómoda y versátil, ideal para cualquier ocasión.',
  },
  {
    id: 2,
    nombre: 'Pantalones Deportivos Grises',
    precio: 45.00,
    imagenUrl: 'https://placehold.co/400x400/333/d3d3d3?text=Pantalones+Grises',
    descripcion: 'Pantalones holgados con un diseño moderno y minimalista.',
  },
  {
    id: 3,
    nombre: 'Camiseta Blanca Oversize',
    precio: 30.50,
    imagenUrl: 'https://placehold.co/400x400/f5f5f5/555?text=Camiseta+Blanca',
    descripcion: 'Un básico atemporal en algodón de alta calidad.',
  },
  {
    id: 4,
    nombre: 'Gorra Estampada',
    precio: 25.00,
    imagenUrl: 'https://placehold.co/400x400/222/aaa?text=Gorra',
    descripcion: 'El accesorio perfecto para complementar tu estilo.',
  },
];

const App = () => {
  const landingCanvasRef = useRef(null);

  // Estilos centralizados de la marca
  const brandStyles = {
    '--color-primary': '#800020', // Color principal (gris muy oscuro)
    '--color-secondary': '#f5f5f5', // Color secundario (blanco/gris claro)
    '--color-text-secondary': '#a3a3a3', // Color de texto secundario (gris)
    '--font-brand': '"Poppins", sans-serif',
    '--font-body': 'Inter, sans-serif',
  };

  // Efecto para la animación de Three.js en la página de inicio
  useEffect(() => {
    // Referencia al contenedor para el canvas de Three.js
    if (!landingCanvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    // Configura el renderizador para que coincida con el tamaño de la ventana
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Para pantallas de alta resolución
    landingCanvasRef.current.appendChild(renderer.domElement);

    // Crea la geometría y el material de las partículas
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = Math.random();
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 2;

    // Bucle de animación
    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    // Limpieza de la escena al desmontar el componente
    return () => {
      if (landingCanvasRef.current) {
        landingCanvasRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []); // Se ejecuta solo una vez al cargar la página

  // Componente de encabezado
  const Header = () => (
    <header className="fixed top-0 left-0 w-full z-20 bg-[var(--color-primary)]/80 backdrop-blur-sm border-b border-gray-700">
      <nav className="container mx-auto p-4 flex justify-between items-center font-bold text-lg">
        <a href="#" className="hover:text-[var(--color-text-secondary)] transition-colors">
          #NANA
        </a>
      </nav>
    </header>
  );

  // Componente de producto
  const ProductoCard = ({ producto }) => (
    <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <img
        src={producto.imagenUrl}
        alt={producto.nombre}
        className="w-full h-auto object-cover"
      />
      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold mb-2">{producto.nombre}</h3>
        <p className="text-[var(--color-text-secondary)] mb-4">{producto.descripcion}</p>
        <span className="text-2xl font-bold mb-4">${producto.precio.toFixed(2)}</span>
      </div>
    </div>
  );

  // Renderizado principal de la aplicación
  return (
    <div className="bg-[var(--color-primary)] text-[var(--color-secondary)] min-h-screen font-body">
      {/* Carga de la tipografía de Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        `}
      </style>
      
      {/* Sección de la landing page con Three.js */}
      <div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center text-center">
        {/* El canvas de Three.js ocupa toda la pantalla */}
        <div ref={landingCanvasRef} className="absolute inset-0 z-0"></div>
        <div className="relative z-10 p-8 rounded-xl bg-[var(--color-primary)]/50 backdrop-blur-md shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 font-brand">#NANA</h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)]">
            Ropa que define tu estilo.
          </p>
        </div>
      </div>
      
      {/* Contenido principal de la página, visible al hacer scroll */}
      <Header />
      <div className="container mx-auto px-4 pt-16 pb-8">
        <section className="mt-8 mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            ¿Por qué elegir nuestra marca?
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            No somos solo ropa, somos una declaración. Si quieres verte impresionante y sentirte seguro en tu propia piel, nuestra marca está hecha para ti.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Diseño Único</h3>
              <p className="text-[var(--color-text-secondary)]">Nuestras prendas están diseñadas para destacar. Olvídate de lo ordinario.</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Calidad Superior</h3>
              <p className="text-[var(--color-text-secondary)]">Usamos los mejores materiales para que tu ropa dure y se sienta increíble.</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Comunidad</h3>
              <p className="text-[var(--color-text-secondary)]">Al unirte a nuestra marca, te unes a una comunidad que valora la expresión personal.</p>
            </div>
          </div>
        </section>

        <main>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
            Nuestros Productos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productos.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </div>
        </main>
      </div>
      <footer className="bg-[var(--color-primary)] border-t border-gray-700 py-6 text-center text-[var(--color-text-secondary)]">
        <p>&copy; 2024 #NANA. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
