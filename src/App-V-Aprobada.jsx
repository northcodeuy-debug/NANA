import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// --- DATOS DE PRODUCTOS CON ESENCIA #NANA RECARGADA ---
const ropa = [
  {
    id: 1,
    nombre: 'Top "Ruptura"',
    precio: 49.99,
    imagenUrl: 'https://placehold.co/600x800/e0e0e0/1a1a1a?text=Top+Ruptura',
    descripcion: 'Cortes que desafían. Creado para no pedir permiso.',
    info: 'Algodón elástico que se adapta a vos. No al revés. Combinalo con actitud y salí a romperla. Lavar del revés, como las reglas.'
  },
  {
    id: 2,
    nombre: 'Minifalda "Disturbia"',
    precio: 65.00,
    imagenUrl: 'https://placehold.co/600x800/f0f0f0/2a2a2a?text=Falda+Disturbia',
    descripcion: 'Bolsillos para guardar secretos, no el celular.',
    info: 'Denim que aguanta todo. Cintura baja porque sí. Usala para marcar territorio. No necesita plancha, necesita calle.'
  },
  {
    id: 3,
    nombre: 'Top "Vértigo"',
    precio: 45.50,
    imagenUrl: 'https://placehold.co/600x800/e8e8e8/111111?text=Top+Vértigo',
    descripcion: 'Insinuar es el nuevo mostrar. Jugá tus cartas.',
    info: 'Transparencias estratégicas sobre encaje resistente. Lo que lleves debajo es tu declaración. Lavar a mano, con cuidado pero sin miedo.'
  },
  {
    id: 4,
    nombre: 'Pantalón "Caos"',
    precio: 89.90,
    imagenUrl: 'https://placehold.co/600x800/fafafa/3a3a3a?text=Pantalón+Caos',
    descripcion: 'Ancho y listo para la jungla de cemento.',
    info: 'Gabardina a prueba de todo. Corte extra ancho para pisar fuerte. Llevá el caos con estilo. Los cordones se ajustan a tu flow.'
  },
];

const accesorios = [
    { id: 5, nombre: 'Choker "Amor Tóxico"', precio: 22.00, imagenUrl: 'https://placehold.co/600x800/eeeeee/4a4a4a?text=Choker+Corazón', descripcion: 'El detalle que lo cambia todo. Un aviso.', info: 'Corazón de aleación pulida. Cordón de antelina que acaricia y marca. Ajustalo a tu medida. No apto para sensibles.'},
    { id: 6, nombre: 'Choker "Supernova"', precio: 22.00, imagenUrl: 'https://placehold.co/600x800/f5f5f5/5a5a5a?text=Choker+Estrella', descripcion: 'Naciste para brillar, no para pedir permiso.', info: 'Estrella de acero que no se apaga. Un destello en la oscuridad. Combinalo con miradas que desafían.'},
    { id: 7, nombre: 'Choker "Nocturna"', precio: 22.00, imagenUrl: 'https://placehold.co/600x800/e9e9e9/4f4f4f?text=Choker+Luna', descripcion: 'Para las que viven de noche. Magnética.', info: 'Luna creciente rodiada. Atrae miradas, repele malas vibras. Tu amuleto urbano.'},
    { id: 8, nombre: 'Choker "Eclipse"', precio: 22.00, imagenUrl: 'https://placehold.co/600x800/fefefe/5f5f5f?text=Choker+Sol', descripcion: 'Energía que se lleva en el cuello. Irradiá poder.', info: 'Un sol que no quema, empodera. Ideal para superponer cuando un solo choker no es suficiente.'},
]

const segundaMano = [
    { id: 9, nombre: 'Bucaneras "Gigante"', precio: 45.00, imagenUrl: 'https://placehold.co/600x800/f1f1f1/111111?text=Bucaneras', descripcion: 'Ya tienen historia. Ahora escribí la tuya.', info: 'Gamuza sintética con plataforma para ver el mundo desde arriba. Talle 36. Ya pisaron fuerte, es tu turno.'},
    { id: 10, nombre: 'Campera "Reliquia"', precio: 18.00, imagenUrl: 'https://placehold.co/600x800/f3f3f3/2a2a2a?text=Campera+Vintage', descripcion: 'Única. Como vos. Imposible de copiar.', info: 'Denim de los 90s, cuando la actitud no se compraba. Talle M. El desgaste es una medalla, no un defecto.'},
]


const App = () => {
  const landingCanvasRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const brandStyles = {
    // '--color-background': '#d8d8d8',
    '--color-background': '#d8d8d8',
    '--color-primary': '#ffffff',
    '--color-secondary': '#e0e0e0',
    '--color-accent': '#a0a0a0',
    '--color-text': '#0a0a0a',
    '--color-text-muted': '#555555',
    '--font-display': "'Playfair Display SC', serif",
    '--font-body': "'Montserrat', sans-serif",
    '--background-texture': "url('https://www.transparenttextures.com/patterns/subtle-grey.png')"
  };

  useEffect(() => {
    if (!landingCanvasRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    landingCanvasRef.current.appendChild(renderer.domElement);
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i+1] = (Math.random() - 0.5) * 10;
      positions[i+2] = (Math.random() - 0.5) * 10;
      const shade = 0.1 + Math.random() * 0.2; // Dark particles
      colors[i] = shade;
      colors[i+1] = shade;
      colors[i+2] = shade;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const particlesMaterial = new THREE.PointsMaterial({ size: 0.02, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    camera.position.z = 2;
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (landingCanvasRef.current) {
        landingCanvasRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const Header = () => (
    <header className="fixed top-0 left-0 w-full z-20 bg-[var(--color-primary)]/80 backdrop-blur-sm border-b border-[var(--color-secondary)]">
      <nav className="container mx-auto px-6 py-3 flex justify-start items-center">
        <a href="#" className="text-xl font-bold font-display tracking-widest hover:text-[var(--color-text-muted)] transition-colors text-[var(--color-text)]">
          #NANA
        </a>
      </nav>
    </header>
  );

  const ProductoCard = ({ producto, onVerMas }) => (
    <div className="bg-[var(--color-primary)] border border-[var(--color-secondary)] overflow-hidden shadow-lg shadow-gray-400/30 group">
      <div className="overflow-hidden aspect-[3/4]">
        <img src={producto.imagenUrl} alt={producto.nombre} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold mb-1 font-display truncate">{producto.nombre}</h3>
        <p className="text-[var(--color-text-muted)] mb-3 text-xs h-8">{producto.descripcion}</p>
        <span className="block text-xl font-semibold mb-3">${producto.precio.toFixed(2)}</span>
        <button onClick={onVerMas} className="w-full bg-black text-white py-2 text-sm font-bold hover:bg-gray-800 transition-all uppercase tracking-wider">
          Ver más
        </button>
      </div>
    </div>
  );
  
  const ProductModal = ({ producto, onClose }) => (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[var(--color-primary)] border border-[var(--color-secondary)] w-full max-w-md shadow-2xl shadow-black/50" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 text-center relative">
           <button onClick={onClose} className="absolute top-2 right-2 text-2xl text-[var(--color-accent)] hover:text-[var(--color-text)]">&times;</button>
          <h2 className="text-2xl font-bold mb-3 font-display">{producto.nombre}</h2>
          <img src={producto.imagenUrl} alt={producto.nombre} className="w-full h-auto max-h-80 object-contain mb-4"/>
          <p className="text-[var(--color-text)] mb-4 text-sm italic">"{producto.info}"</p>
          <span className="block text-2xl font-semibold mb-4">${producto.precio.toFixed(2)}</span>
           <button className="w-full bg-black text-white py-2 font-bold hover:bg-gray-800 transition-all uppercase tracking-wider">
             LO QUIERO
           </button>
        </div>
      </div>
    </div>
  );

  const SectionTitle = ({children}) => (
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 font-display tracking-wider uppercase">
          {children}
      </h2>
  );

  return (
    <div style={{...brandStyles, backgroundImage: "var(--background-texture)"}} className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen font-body bg-fixed">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700;900&family=Montserrat:wght@400;600&display=swap');`}</style>
      
      {selectedProduct && <ProductModal producto={selectedProduct} onClose={() => setSelectedProduct(null)} />}

      <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center text-center">
        <div ref={landingCanvasRef} className="absolute inset-0 z-0"></div>
        
        <div className="absolute left-0 top-1/2 -translate-y-1/2 p-10 hidden lg:block max-w-sm">
             <p className="text-xl text-left font-display leading-tight">
                  "No vestimos cuerpos, vestimos personalidades. #NANA es el código de las que no siguen el mapa."
             </p>
        </div>

        <div className="relative z-10 p-8 max-w-lg bg-transparent flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 font-display tracking-widest text-black">#NANA</h1>
          <p className="text-base md:text-lg text-black/80 uppercase tracking-wider font-semibold">
            Rompé las reglas. Definí tu estilo.
          </p>
        </div>
      </div>
      
      <Header />
      <div className="container mx-auto px-4 pt-16 pb-8">
        <section className="mt-8 mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
            NO SEGUIMOS TENDENCIAS. LAS CREAMOS.
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Somos para las que no piden permiso. Para las que mezclan, se atreven y escriben su propia historia con cada outfit. #NANA no es ropa, es una actitud.
          </p>
        </section>

        <main className="space-y-16">
          <section>
            <SectionTitle>Colección Actual</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ropa.map((producto) => <ProductoCard key={producto.id} producto={producto} onVerMas={() => setSelectedProduct(producto)} />)}
            </div>
          </section>

          <section>
            <SectionTitle>Accesorios</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {accesorios.map((producto) => <ProductoCard key={producto.id} producto={producto} onVerMas={() => setSelectedProduct(producto)} />)}
            </div>
          </section>

          <section>
            <SectionTitle>Segunda Mano</SectionTitle>
             <p className="text-center text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto -mt-8 mb-12">
                Prendas con alma. Únicas como vos. Dale una segunda vida al estilo.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {segundaMano.map((producto) => <ProductoCard key={producto.id} producto={producto} onVerMas={() => setSelectedProduct(producto)} />)}
            </div>
          </section>
        </main>
      </div>
      <footer className="bg-[var(--color-primary)] border-t border-[var(--color-secondary)] py-8 text-center text-[var(--color-text-muted)] mt-16">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.instagram.com/nana.uruguay/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)] transition-colors">Tienda IG</a>
            <a href="https://www.instagram.com/mili.vidarte/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)] transition-colors">Personal IG</a>
        </div>
        <p>&copy; 2025 #NANA. ACTITUD SIN LÍMITES.</p>
      </footer>
    </div>
  );
};

export default App;

