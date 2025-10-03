//App.jsx

import React, {useEffect, useRef } from 'react';
import * as THREE from 'three';

// Import Font Awesome for social media icons (make sure to install it via npm)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

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
            <h2 className="font-brand text-4xl md:text-5xl  mb-4">
              No seguimos tendencias. Las Creamos
            </h2>
            <p className="font-body text-lg  max-w-3xl mx-auto">
              Somos para las que no piden permiso. Para las que mezclan, se atreven y escriben su propia historia con cada outfit. #NANA no es ropa, es una actitud.
            </p>
          </section>
    );



//  --------- Productos -----------

  const SectionTitle = ({children}) => (
      <h2 className="text-text-primary font-brand text-4xl md:text-5xl  text-center mb-10 tracking-wider">
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
        <h3 className="text-text-primary text-xl font-body mb-2">{producto.nombre}</h3>

        <p className="text-text-primary font-body mb-4">{producto.descripcion}</p>
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
      <Header/> 

      {/* Aca va la Seccion de inicio */}
      <InicioSection/>

      {/* Aca va la Seccion de Vision */}
      <AboutUsSection/>

      {/* Aca va la Seccion de Productos */}
      <main className="space-y-16">

          <ProductosSection titulo={'Coleccion Actual'} productos={ColeccionActual}/>
      
          <ProductosSection titulo={'Accesorios'} productos={Accesorios}/>

 
      </main>


      <Footer/>
    </div>

    
  );
};

export default App;
