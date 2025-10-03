

 {/* Sección de la landing page con Three.js */}

      {/* Seccion principal de la web
          - Resoluciones recomendadas:
            - Móviles: 375px - 667px
            - Tablets: 768px - 1024px
            - Escritorio: 1280px - 1920px
          - Recomendaciones de Geminis
            1920x1080 - 2560x1440 - 16:9
          Metodos de compresion TinyPNG
           - No pear mas de 200-300 KB.
        */}

 
        // Efecto para la animación de Three.js en la página de inicio
  
  
  // Este div es para que el canvas de Three.js ocupe toda la pantalla
  <div ref={landingCanvasRef} className="absolute inset-0 z-0"></div>
      
  
  // Es un efecto de 
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

  

      {/*Cuadro #NANA inicio de pagian */}
      <div className="relative z-10 p-8 rounded-xl bg-primary/50 backdrop-blur-md shadow-2xl">
        <h1 className="text-text-secondary font-logo text-5xl md:text-7xl font-extrabold mb-4">#NANA</h1>
        <p className="text-lg md:text-xl text-text-primary">
          Ropa que define tu estilo.
        </p>
      </div> 



         
      
  // Segundo mano -------------------------

  // Fotos Productos Segunda Mano 
  import fotSegunMano1 from './assets/productos/fotSegundaMano1.png';
  import fotSegunMano2 from './assets/productos/fotSegundaMano2.png';
  import fotSegunMano3 from './assets/productos/fotSegundaMano3.png';
  import fotSegunMano4 from './assets/productos/fotSegundaMano4.png';


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


  <ProductosSection titulo={'Segunda Mano'} productos={SegundaMano}/>



  // Componente de tarjeta producto 02/04
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
        <h3 className="text-text-primary text-xl font-body mb-2">{producto.nombre}</h3>

        <p className="text-text-primary font-body mb-4">{producto.descripcion}</p>
        <span className="text-text-primary text-2xl font-bold mb-4">${producto.precio.toFixed(2)}</span>
      </div>
      
    </div>
  );