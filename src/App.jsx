//App.jsx

import React, {useEffect, useRef } from 'react';
import * as THREE from 'three';

import fotPro1 from './assets/productos/fotPro1.png';
import fotPro2 from './assets/productos/fotPro2.png';
import fotPro3 from './assets/productos/fotPro3.png';
import fotPro4 from './assets/productos/fotPro4.png';

const App = () => {
  const landingCanvasRef = useRef(null);

  // Estilos centralizados de la marca
  // Estilos centralizados de la marca


  // Borrar 
  const brandStyles = {
    '--color-primary': '#800020', // Color principal (gris muy oscuro)
    '--color-secondary': '#800020', // Color secundario (blanco/gris claro)
    '--color-text-secondary': '800020', // Color de texto secundario (gris)
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

// --- Accesorios ----------
  
    // Datos Accesorios   
    const accesorios = [
        { id: 5, nombre: 'Choker "Amor Tóxico"', precio: 22.00, imagenUrl: 'https://placehold.co/600x800/eeeeee/4a4a4a?text=Choker+Corazón', descripcion: 'El detalle que lo cambia todo. Un aviso.', info: 'Corazón de aleación pulida. Cordón de antelina que acaricia y marca. Ajustalo a tu medida. No apto para sensibles.'},
        { id: 6, nombre: 'Choker "Supernova"', precio: 22.00, imagenUrl: 'https://placehold.co/600x800/f5f5f5/5a5a5a?text=Choker+Estrella', descripcion: 'Naciste para brillar, no para pedir permiso.', info: 'Estrella de acero que no se apaga. Un destello en la oscuridad. Combinalo con miradas que desafían.'},
        { id: 7, nombre: 'Choker "Nocturna"', precio: 22.00, imagenUrl: 'https://placehold.co/600x800/e9e9e9/4f4f4f?text=Choker+Luna', descripcion: 'Para las que viven de noche. Magnética.', info: 'Luna creciente rodiada. Atrae miradas, repele malas vibras. Tu amuleto urbano.'},
        { id: 8, nombre: 'Choker "Eclipse"', precio: 22.00, imagenUrl: 'https://placehold.co/600x800/fefefe/5f5f5f?text=Choker+Sol', descripcion: 'Energía que se lleva en el cuello. Irradiá poder.', info: 'Un sol que no quema, empodera. Ideal para superponer cuando un solo choker no es suficiente.'},
    ]


// ---- Segunda Mano ----------
  // Datos Segunda Mano

    const segundaMano = [
        { id: 9, nombre: 'Bucaneras "Gigante"', precio: 45.00, imagenUrl: 'https://placehold.co/600x800/f1f1f1/111111?text=Bucaneras', descripcion: 'Ya tienen historia. Ahora escribí la tuya.', info: 'Gamuza sintética con plataforma para ver el mundo desde arriba. Talle 36. Ya pisaron fuerte, es tu turno.'},
        { id: 10, nombre: 'Campera "Reliquia"', precio: 18.00, imagenUrl: 'https://placehold.co/600x800/f3f3f3/2a2a2a?text=Campera+Vintage', descripcion: 'Única. Como vos. Imposible de copiar.', info: 'Denim de los 90s, cuando la actitud no se compraba. Talle M. El desgaste es una medalla, no un defecto.'},
    ]


// ---- Encabesado ----------
  
  // Datos de productos de ejemplo. En una aplicación real, esto vendría de una base de datos.
  const productos = [
    {
      id: 1,
      nombre: 'Sudadera Negra Clásica',
      precio: 55.99,
      imagenUrl: fotPro1,
      descripcion: 'Una sudadera cómoda y versátil, ideal para cualquier ocasión.',
    },
    {
      id: 2,
      nombre: 'Pantalones Deportivos Grises',
      precio: 45.00,
      imagenUrl: fotPro2,
      descripcion: 'Pantalones holgados con un diseño moderno y minimalista.',
    },
    {
      id: 3,
      nombre: 'Camiseta Blanca Oversize',
      precio: 30.50,
      imagenUrl: fotPro3,
      descripcion: 'Un básico atemporal en algodón de alta calidad.',
    },
    {
      id: 4,
      nombre: 'Gorra Estampada',
      precio: 25.00,
      imagenUrl: fotPro4,
      descripcion: 'El accesorio perfecto para complementar tu estilo.',
    },
  ];


  // Componente de encabezado
  const Header = () => (
   
    <header className="fixed top-0 left-0 w-full z-20 bg-primary/80 backdrop-blur-sm border-b border-gray-700">
      <nav className="container mx-auto p-4 flex justify-between items-center font-bold text-lg">
        {/*hover:text-primary w transition-colors  */}
        <a href="#" className="text-text-primary hover:text-text-secondary w transition-colors">
          #NANA
        </a>
      </nav>
    </header>
  );


//  --------- Productos -----------
  // Componente de producto
  const ProductoCard = ({ producto }) => (
    <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <img
        src={producto.imagenUrl}
        alt={producto.nombre}
        className="w-full h-auto object-cover"
      />
      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-text-primary text-xl font-semibold mb-2">{producto.nombre}</h3>

        <p className="text-text-primary mb-4">{producto.descripcion}</p>
        <span className="text-text-primary text-2xl font-bold mb-4">${producto.precio.toFixed(2)}</span>
      </div>
    </div>
  );


// -------- Seccion Vision -----------
  // Componente de la sección de visión
  const VisionSection = () => (
        <section className="mt-8 mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
            NO SEGUIMOS TENDENCIAS. LAS CREAMOS.
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Somos para las que no piden permiso. Para las que mezclan, se atreven y escriben su propia historia con cada outfit. #NANA no es ropa, es una actitud.
          </p>
        </section>
  );

// -------- Seccion Inicio -----------


  // Componente de inicio 
  const InicioSection = () => 














  
  // Renderizado principal de la aplicación
  return (
    <div className="bg-[var(--color-primary)] text-[var(--color-secondary)] min-h-screen font-body">
      
      {/* Carga de la tipografía de Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        `}
      </style>


      {/* Encabezado de la web */}
      <Header/> 

      <div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center text-center">
        {/* El canvas de Three.js ocupa toda la pantalla */}
       
        {/* Cuadro Nana */}
        {/* ChatGPT lo queno enteindo es porque el no tiene el texto creoque 
            esta relacionado con ref={landingCanvasRef}   este no se para que es pero si lo booro 
            me desaparese el cuadro de #NANA */}
        <div ref={landingCanvasRef} className="absolute inset-0 z-0"></div>
        
        
        {/* ChatGPT Este tambine ace referiia al rectangulo central Peor no voe el texto #NANA  */}
        <div className="relative z-10 p-8 rounded-xl bg-[var(--color-primary)]/50 backdrop-blur-md shadow-2xl">
          <h1 className="text-text-primary text-5xl md:text-7xl font-extrabold mb-4 font-brand">#NANA</h1>
          <p className="text-lg md:text-xl text-text-primary">
            Ropa que define tu estilo.
          </p>
        </div> 
      </div>
      
        
      {/* Contenido principal de la página, visible al hacer scroll */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <section className="mt-8 mb-24 text-center">
          <h2 className="text-text-primary text-4xl md:text-5xl font-extrabold mb-4">
            ¿Por qué elegir nuestra marca?
          </h2>
          <p className="text-lg text-text-primary max-w-3xl mx-auto">
            No somos solo ropa, somos una declaración. Si quieres verte impresionante y sentirte seguro en tu propia piel, nuestra marca está hecha para ti.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Diseño Único</h3>
              <p className="text-text-primary">Nuestras prendas están diseñadas para destacar. Olvídate de lo ordinario.</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Calidad Superior</h3>
              <p className="text-text-primary">Usamos los mejores materiales para que tu ropa dure y se sienta increíble.</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Comunidad</h3>
              <p className="text-text-primary">Al unirte a nuestra marca, te unes a una comunidad que valora la expresión personal.</p>
            </div>
          </div>
        </section>




        <main>
          <h2 className="text-text-primary text-4xl md:text-5xl font-extrabold text-center mb-12">
            Nuestros Productos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productos.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </div>
        </main>
      </div>
      <footer className="bg-[var(--color-primary)] border-t border-gray-700 py-6 text-center text-text-primary">
        <p>&copy; 2024 #NANA. Todos los derechos reservados.</p>
      </footer>
    </div>

    
  );
};

export default App;
