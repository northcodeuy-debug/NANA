//App.jsx

import React, {useEffect, useRef } from 'react';
import * as THREE from 'three';

// Fotos Producto Actual 
import fotProAct1 from './assets/productos/fotProdAct1.png';
import fotProAct2 from './assets/productos/fotProdAct2.png';
import fotProAct3 from './assets/productos/fotProdAct3.png';
import fotProAct4 from './assets/productos/fotProdAct4.png';

// Fotos Accesorios
import fotAccesrio1 from './assets/productos/fotAcce1.png';
import fotAccesrio2 from './assets/productos/fotAcce2.png';
import fotAccesrio3 from './assets/productos/fotAcce3.png';
import fotAccesrio4 from './assets/productos/fotAcce4.png';

// Fotos Productos Segunda Mano 
import fotSegunMano1 from './assets/productos/fotSegundaMano1.png';
import fotSegunMano2 from './assets/productos/fotSegundaMano2.png';
import fotSegunMano3 from './assets/productos/fotSegundaMano3.png';
import fotSegunMano4 from './assets/productos/fotSegundaMano4.png';

// import de fondo Web 
import fondoWeb from './assets/fondoWeb.jpg';


const App = () => {
  const landingCanvasRef = useRef(null);

  // Estilos centralizados de la marca
  // Estilos centralizados de la marca



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

  const SectionTitle = ({children}) => (
      <h2 className="text-text-primary text-4xl md:text-5xl font-extrabold text-center mb-10 font-display tracking-wider uppercase">
          {children}
      </h2>
  );

  // Componente de sección de productos con su titulo que identifica la catergoria.
  const ProductosSection  = ({titulo, productos})  => (
    <section>
      <SectionTitle>{titulo}</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productos.map((producto) => 
          <ProductoCard key={producto.id} producto={producto} onVerMas={() => setSelectedProduct(producto)} />)}
      </div>
    </section>
  );

  // Componente de producto
  const ProductoCard = ({ producto }) => (
    <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
     
     <div className="w-full aspect-[4/5] overflow-hidden">
        <img
          src={producto.imagenUrl}
          alt={producto.nombre}
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-text-primary text-xl font-semibold mb-2">{producto.nombre}</h3>

        <p className="text-text-primary mb-4">{producto.descripcion}</p>
        <span className="text-text-primary text-2xl font-bold mb-4">${producto.precio.toFixed(2)}</span>
      </div>
    </div>
  );

   // Datos de productos de ejemplo. En una aplicación real, esto vendría de una base de datos.
  const ColeccionActual = [
    {
      id: 1,
      nombre: 'Sudadera Negra Clásica',
      precio: 55.99,
      imagenUrl: fotProAct1,
      descripcion: 'Una sudadera cómoda y versátil, ideal para cualquier ocasión.',
    },
    {
      id: 2,
      nombre: 'Pantalones Deportivos Grises',
      precio: 45.00,
      imagenUrl: fotProAct2,
      descripcion: 'Pantalones holgados con un diseño moderno y minimalista.',
    },
    {
      id: 3,
      nombre: 'Camiseta Blanca Oversize',
      precio: 30.50,
      imagenUrl: fotProAct3,
      descripcion: 'Un básico atemporal en algodón de alta calidad.',
    },
    {
      id: 4,
      nombre: 'Gorra Estampada',
      precio: 25.00,
      imagenUrl: fotProAct4,
      descripcion: 'El accesorio perfecto para complementar tu estilo.',
    },
  ];

  const Accesorios = [
    {
      id: 1,
      nombre: 'Sudadera Negra Clásica',
      precio: 55.99,
      imagenUrl: fotAccesrio1,
      descripcion: 'Una sudadera cómoda y versátil, ideal para cualquier ocasión.',
    },
    {
      id: 2,
      nombre: 'Pantalones Deportivos Grises',
      precio: 45.00,
      imagenUrl: fotAccesrio2,
      descripcion: 'Pantalones holgados con un diseño moderno y minimalista.',
    },
    {
      id: 3,
      nombre: 'Camiseta Blanca Oversize',
      precio: 30.50,
      imagenUrl: fotAccesrio3,
      descripcion: 'Un básico atemporal en algodón de alta calidad.',
    },
    {
      id: 4,
      nombre: 'Gorra Estampada',
      precio: 25.00,
      imagenUrl: fotAccesrio4,
      descripcion: 'El accesorio perfecto para complementar tu estilo.',
    },
  ];

  const SegundaMano = [
    {
      id: 1,
      nombre: 'Chaqueta de Cuero Vintage',
      precio: 80.00,
      imagenUrl: fotSegunMano1,
      descripcion: 'Una chaqueta de cuero auténtico con carácter.',
    },
    {
      id: 2,
      nombre: 'Botas de Combate',
      precio: 70.00,
      imagenUrl: fotSegunMano2,
      descripcion: 'Botas resistentes y con estilo para cualquier aventura.',
    },
    {
      id: 3,
      nombre: 'Vestido Floral',
      precio: 40.00,
      imagenUrl: fotSegunMano3,
      descripcion: 'Un vestido ligero y fresco, perfecto para el verano.',
    },
    {
      id: 4,
      nombre: 'Camisa de Rayas',
      precio: 35.00,
      imagenUrl: fotSegunMano4,
      descripcion: 'Una camisa clásica que nunca pasa de moda.',
    },
  ];

// -------- Seccion Inicio -----------


  // Componente de inicio 

  // Falta agregarle
  // "No vestimos cuerpos, vestimos personalidades. #NANA es el código de las que no siguen el mapa."
  const InicioSection = () => (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center text-center">
      {/* El canvas de Three.js ocupa toda la pantalla */}
      
      {/* Cuadro Nana */}
      {/* ChatGPT lo queno enteindo es porque el no tiene el texto creoque 
          esta relacionado con ref={landingCanvasRef}   este no se para que es pero si lo booro 
          me desaparese el cuadro de #NANA */}
      <div ref={landingCanvasRef} className="absolute inset-0 z-0"></div>
      
      
      {/* ChatGPT Este tambine ace referiia al rectangulo central Peor no voe el texto #NANA  */}
      <div className="relative z-10 p-8 rounded-xl bg-primary/50 backdrop-blur-md shadow-2xl">
        <h1 className="text-text-primary text-5xl md:text-7xl font-extrabold mb-4 font-brand">#NANA</h1>
        <p className="text-lg md:text-xl text-text-primary">
          Ropa que define tu estilo.
        </p>
      </div> 
    </div>
  );

  // ------- Seccion Sobre Nosotros -----------

  // Componente de la sección "Sobre Nosotros"
  const AboutUsSection = () => (
        <section className="mt-8 mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
            NO SEGUIMOS TENDENCIAS. LAS CREAMOS.
          </h2>
          <p className="text-lg  max-w-3xl mx-auto">
            Somos para las que no piden permiso. Para las que mezclan, se atreven y escriben su propia historia con cada outfit. #NANA no es ropa, es una actitud.
          </p>
        </section>
  );


  
  // Renderizado principal de la aplicación
  return (
      <div 
        className="
            // 🟢 ¡USAMOS LA CLASE DEFINIDA EN TAILWIND!
            bg-fondo-web 
            
            // 🟢 Comportamiento del fondo
            bg-cover bg-fixed bg-center 
            
            // 🟢 Clases existentes (usan tus vars de tailwind.config.js) bg-primary
            text-text-primary  min-h-screen font-body
        "
    >

    
      {/* Carga de la tipografía de Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        `}
      </style>


      {/* Encabezado de la web */}
      <Header/> 

      {/* Aca va la Seccion de inicio */}
      <InicioSection/>

      {/* Aca va la Seccion de Vision */}
      <AboutUsSection/>

      {/* Aca va la Seccion de Productos */}
      <main className="space-y-16">

          <ProductosSection titulo={'Coleccion Actual'} productos={ColeccionActual}/>
      
          <ProductosSection titulo={'Accesorios'} productos={Accesorios}/>

          <ProductosSection titulo={'Segunda Mano'} productos={SegundaMano}/>

      </main>


      <footer className="bg-secondary border-t border-gray-700 py-6 text-center text-text-primary">
        <p>&copy; 2024 #NANA. Todos los derechos reservados.</p>
      </footer>
    </div>

    
  );
};

export default App;
