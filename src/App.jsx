//App.jsx

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Import Font Awesome for social media icons (make sure to install it via npm)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// Fotos Producto Actual 
import fotProAct1 from './assets/productos/fotProdAct1.png';
import fotProAct2 from './assets/productos/fotProdAct2.png';
import fotProAct3 from './assets/productos/fotProdAct3.png';
import fotProAct4 from './assets/productos/fotProdAct4.png';
import fotProAct5 from './assets/productos/fotProdAct5.png';
import fotProAct6 from './assets/productos/fotProdAct6.png';
import fotProAct7 from './assets/productos/fotProdAct7.png';
import fotProAct8 from './assets/productos/fotProdAct8.png';
import fotProAct9 from './assets/productos/fotProdAct9.png';
import fotProAct10 from './assets/productos/fotProdAct10.png';
import fotProAct11 from './assets/productos/fotProdAct11.png';
import fotProAct12 from './assets/productos/fotProdAct12.png';
import fotProAct13 from './assets/productos/fotProdAct13.png';
import fotProAct14 from './assets/productos/fotProdAct14.png';
import fotProAct15 from './assets/productos/fotProdAct15.png';
import fotProAct16 from './assets/productos/fotProdAct16.png';
import fotProAct17 from './assets/productos/fotProdAct17.png';
import fotProAct18 from './assets/productos/fotProdAct18.png';
import fotProAct19 from './assets/productos/fotProdAct19.png';
import fotProAct20 from './assets/productos/fotProdAct20.png';
import fotProAct21 from './assets/productos/fotProdAct21.png';
import fotProAct22 from './assets/productos/fotProdAct22.png';
import fotProAct23 from './assets/productos/fotProdAct23.png';
import fotProAct24 from './assets/productos/fotProdAct24.png';
import fotProAct25 from './assets/productos/fotProdAct25.png';
import fotProAct26 from './assets/productos/fotProdAct26.png';
import fotProAct27 from './assets/productos/fotProdAct27.png';
import fotProAct28 from './assets/productos/fotProdAct28.png';
import fotProAct29 from './assets/productos/fotProdAct29.png';
import fotProAct30 from './assets/productos/fotProdAct30.png';
import fotProAct31 from './assets/productos/fotProdAct31.png';
import fotProAct32 from './assets/productos/fotProdAct32.png';
import fotProAct33 from './assets/productos/fotProdAct33.png';
import fotProAct34 from './assets/productos/fotProdAct34.png';




// Fotos Accesorios
import fotAccesrio1 from './assets/productos/fotAcce1.png';
import fotAccesrio2 from './assets/productos/fotAcce2.png';
import fotAccesrio3 from './assets/productos/fotAcce3.png';
import fotAccesrio4 from './assets/productos/fotAcce4.png';


// import de fondo Web 
import fondoWeb from './assets/fondoWeb.jpg';


const App = () => {

  // Componente de encabezado
  const Header = () => (

    <header className="fixed top-0 left-0 w-full z-20 bg-primary/80 backdrop-blur-sm border-b border-gray-700">
      <nav className="container mx-auto p-4 flex justify-between items-center font-bold text-lg">
        {/*hover:text-primary w transition-colors  */}
        <a href="#" className="text-text-secondary font-logo hover:text-text-primary w transition-colors ">
          #NANA
        </a>
      </nav>
    </header>
  );





  // -------- Seccion Inicio -----------


  // Componente de inicio 

  // Falta agregarle
  // "No vestimos cuerpos, vestimos personalidades. #NANA es el código de las que no siguen el mapa."
  const InicioSection = () => (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center text-center">
      {/* El canvas de Three.js ocupa toda la pantalla */}

      {/* Cuadro Nana */}

      {/* ChatGPT Este tambine ace referiia al rectangulo central Peor no voe el texto #NANA  */}
      <div className="relative z-10 p-8 ">
        <h1 className="text-text-secondary font-logo text-5xl md:text-7xl font-extrabold mb-4">#NANA</h1>
      </div>
    </div>
  );

  // ------- Seccion Sobre Nosotros -----------

  // Componente de la sección "Sobre Nosotros"
  const AboutUsSection = () => (
    <section className="mt-8 mb-20 text-center">
      <h2 className="font-brand text-4xl md:text-5xl  mb-4">
        No seguimos tendencias. Las Creamos
      </h2>
      <p className="font-body text-lg  max-w-3xl mx-auto">
        Somos para las que no piden permiso. Para las que mezclan, se atreven y escriben su propia historia con cada outfit. #NANA no es ropa, es una actitud.
      </p>
    </section>
  );



  //  --------- Productos -----------

  const SectionTitle = ({ children }) => (
    <h2 className="text-text-primary font-brand text-4xl md:text-5xl  text-center mb-10 tracking-wider">
      {children}
    </h2>
  );

  // Componente de sección de productos con su titulo que identifica la catergoria.
  const ProductosSection = ({ titulo, productos }) => (
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
    <div className=" rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">

      <div className="w-full aspect-[4/5] overflow-hidden">
        <img
          src={producto.imagenUrl}
          alt={producto.nombre}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-text-primary text-xl font-body font-medium mb-2">{producto.nombre}</h3>

        <p className="text-text-primary font-body font-normal mb-4">{producto.descripcion}</p>
        <span className="text-text-primary text-2xl font-bold mb-4">${producto.precio.toFixed(2)}</span>
      </div>

    </div>
  );

  // Datos de productos de ejemplo. En una aplicación real, esto vendría de una base de datos.
  const ColeccionActual = [
    {
      id: 1,
      nombre: 'TOP ROMA',
      precio: 890,
      imagenUrl: fotProAct1,
      descripcion: 'Top Roma negro, corto con tiras ajustables y diseño moderno.',
    },
    {
      id: 2,
      nombre: 'TOP ROMA',
      precio: 890,
      imagenUrl: fotProAct2,
      descripcion: 'Top Roma blanco, con diseño diferent, hecho para resaltar. ',
    },
    {
      id: 3,
      nombre: 'TOP LOVELY',
      precio: 690,
      imagenUrl: fotProAct3,
      descripcion: 'Top Lovely blanco con diseño de flores sutil. ',
    },
    {
      id: 4,
      nombre: 'TOP LOVELY',
      precio: 690,
      imagenUrl: fotProAct4,
      descripcion: 'Top Lovely negro un toque unico para resaltar el outfit. ',
    },
    {
      id: 5,
      nombre: 'VESTIDO LISA',
      precio: 990,
      imagenUrl: fotProAct4,
      descripcion: 'Vestido Lisa negro super comodo para marcar presencia.',
    },
    {
      id: 6,
      nombre: 'VESTIDO SERENA',
      precio: 1190,
      imagenUrl: fotProAct6,
      descripcion: 'Vestido Serena negro  ',
    },
    {
      id: 7,
      nombre: 'VESTIDO SERENA',
      precio: 1190,
      imagenUrl: fotProAct7,
      descripcion: 'blanco.',
    },
    {
      id: 8,
      nombre: 'VESTIDO WOLF',
      precio: 1190,
      imagenUrl: fotProAct8,
      descripcion: 'MARRON.',
    },
    {
      id: 9,
      nombre: 'TOP MOSCU',
      precio: 590,
      imagenUrl: fotProAct9,
      descripcion: 'NEGRO.',
    },
    {
      id: 10,
      nombre: 'TOP SPEARS',
      precio: 690,
      imagenUrl: fotProAct10,
      descripcion: 'NEGRO.',
    },
    {
      id: 11,
      nombre: 'TOP SPEARS',
      precio: 690,
      imagenUrl: fotProAct11,
      descripcion: 'BLANCO.',
    },
    {
      id: 12,
      nombre: 'TOP MOSCU',
      precio: 590,
      imagenUrl: fotProAct12,
      descripcion: 'BLANCO.',
    },
    {
      id: 13,
      nombre: 'STRAPLESS',
      precio: 590,
      imagenUrl: fotProAct13,
      descripcion: 'Por encargue.',
    },
    {
      id: 14,
      nombre: 'STRAPLESS',
      precio: 650,
      imagenUrl: fotProAct14,
      descripcion: 'VARIEDAD DE COLORES.',
    },
    {
      id: 15,
      nombre: 'BODY CAVADO',
      precio: 690,
      imagenUrl: fotProAct15,
      descripcion: 'NEGRO.',
    },
    {
      id: 16,
      nombre: 'BODY ESCOTE',
      precio: 690,
      imagenUrl: fotProAct16,
      descripcion: 'NEGRO.',
    },
    {
      id: 17,
      nombre: 'TOP CLEO',
      precio: 590,
      imagenUrl: fotProAct17,
      descripcion: 'NEGRO O BLANCO.',
    },
    {
      id: 18,
      nombre: 'TOP BOSSY',
      precio: 690,
      imagenUrl: fotProAct18,
      descripcion: 'NEGRO.',
    },
    {
      id: 19,
      nombre: 'TOP EMMA',
      precio: 690,
      imagenUrl: fotProAct19,
      descripcion: 'NEGRO, MARRON',
    },
    {
      id: 20,
      nombre: 'TOP AURA',
      precio: 790,
      imagenUrl: fotProAct20,
      descripcion: 'NEGRO, BEIGE, BORDO.',
    },
    {
      id: 21,
      nombre: 'BLUSA LINO',
      precio: 750,
      imagenUrl: fotProAct21,
      descripcion: 'BLANCO.',
    },
    {
      id: 22,
      nombre: 'TOP VENECIA',
      precio: 650,
      imagenUrl: fotProAct22,
      descripcion: 'BLANCO.',
    },
    {
      id: 23,
      nombre: 'TOP ROMANTIC',
      precio: 690,
      imagenUrl: fotProAct23,
      descripcion: 'BORDO.',
    },
    {
      id: 24,
      nombre: 'TOP SPEARS',
      precio: 750,
      imagenUrl: fotProAct24,
      descripcion: 'BEIGE.',
    },
    {
      id: 25,
      nombre: 'TOP VENUS',
      precio: 690,
      imagenUrl: fotProAct25,
      descripcion: 'NEGRO, BORDO, BLANCO.',
    },
    {
      id: 26,
      nombre: 'TOP ROSSE',
      precio: 690,
      imagenUrl: fotProAct26,
      descripcion: '690.',
    },
    {
      id: 27,
      nombre: 'TOP PRAGA',
      precio: 590,
      imagenUrl: fotProAct27,
      descripcion: 'NEGRO.',
    },
    {
      id: 28,
      nombre: 'TOP EMPORIO',
      precio: 690,
      imagenUrl: fotProAct28,
      descripcion: 'NEGRO.',
    },
    {
      id: 29,
      nombre: 'TOP STEFFY',
      precio: 890,
      imagenUrl: fotProAct29,
      descripcion: 'BLANCO.',
    },
    {
      id: 30,
      nombre: 'TOP RENÉ',
      precio: 790,
      imagenUrl: fotProAct30,
      descripcion: 'NEGRO.',
    },
    {
      id: 31,
      nombre: 'CONJUNTO BRITNEY',
      precio: 890,
      imagenUrl: fotProAct31,
      descripcion: 'POR ENCARGUE.',
    },
    {
      id: 32,
      nombre: 'CONJUNTOS BEACKY',
      precio: 890,
      imagenUrl: fotProAct32,
      descripcion: 'POR ENCARGUE.',
    },
    {
      id: 33,
      nombre: 'VESTIDO STRASS',
      precio: 1190,
      imagenUrl: fotProAct33,
      descripcion: 'NEGRO.',
    },
    {
      id: 34,
      nombre: 'TOP MUSA',
      precio: 890,
      imagenUrl: fotProAct34,
      descripcion: 'NEGRO.',
    },
  ];

  const Accesorios = [
    {
      id: 1,
      nombre: 'Cinto Marrón Clásico',
      precio: 590,
      imagenUrl: fotAccesrio1,
      descripcion: 'Un cinto marrón perfecto para romper con el estilo',
    },
    {
      id: 2,
      nombre: 'Choker Mediano',
      precio: 189,
      imagenUrl: fotAccesrio2,
      descripcion: 'Choker mediano con diseño sutil, ideal para cualquier ocasión.',
    },
    {
      id: 3,
      nombre: 'Choker Largo',
      precio: 189,
      imagenUrl: fotAccesrio3,
      descripcion: 'Choker Largo con diseños unicos, ideal para destacar tu estilo.',
    },
    {
      id: 4,
      nombre: 'Choker Corto',
      precio: 189,
      imagenUrl: fotAccesrio4,
      descripcion: 'Choker corto muy versátil, perfecto para complementar tu look..',
    },
  ];





  // -------- Seccion Footer -----------


  const socialLinks = [
    {
      id: 1,
      name: 'Instagram (Empresa)',
      url: 'https://www.instagram.com/nana.uruguay?igsh=MWpwYXEwcTVhM2x0Mg%3D%3D',
      icon: faInstagram
    },
    {
      id: 2,
      name: 'Instagram (Personal)',
      url: 'https://www.instagram.com/mili.vidarte/',
      icon: faInstagram
    }
  ];


  const SocialIcons = ({ links }) => (
    <div className="flex justify-center space-x-6 mb-4">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.name}
          className="
                    flex items-center space-x-2 p-3 rounded-xl 
                    border border-text-primary 
                    text-text-primary text-base font-semibold
                    transition-colors duration-200
                    hover:bg-text-primary hover:text-secondary 
                  "
        >

          {/* Icono de redes sociales */}
          <FontAwesomeIcon icon={link.icon} />

          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );

  const Footer = () => (
    <footer className="bg-secondary border-t border-gray-700 py-3 text-center text-text-primary mt-20">
      <SocialIcons links={socialLinks} />
    </footer>
  );



  // ---------------- cuerdo principal de app -------------------

  // Renderizado principal de la aplicación
  return (
    // Div principal que contiene toda la app
    // 🟢 Usamos las clases definidas en tailwind.config.js
    // 🟢 Usamos la imagen de fondo definida en tailwind.config.js
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





      {/* Encabezado de la web */}
      <Header />

      {/* Aca va la Seccion de inicio */}
      <InicioSection />

      {/* Aca va la Seccion de Vision */}
      <AboutUsSection />

      {/* Aca va la Seccion de Productos */}
      <main className="space-y-16">

        <ProductosSection titulo={'Coleccion Actual'} productos={ColeccionActual} />

        <ProductosSection titulo={'Accesorios'} productos={Accesorios} />


      </main>


      <Footer />
    </div>


  );
};

export default App;
