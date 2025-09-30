

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






// --------------------------- Seccion de inicio ---------------------------







    <section className="mt-8 mb-20 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
        NO SEGUIMOS TENDENCIAS. LAS CREAMOS.
      </h2>
      <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
        Somos para las que no piden permiso. Para las que mezclan, se atreven y escriben su propia historia con cada outfit. #NANA no es ropa, es una actitud.
      </p>
    </section>













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


// Esto es el contenedor principal el que esta debajo de return de app.jsx
<div className=" text-text-primary bg-primary min-h-screen font-body">
      








  // Tarjeta de Proeudtos ----------------------------
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







                  text-text-primary 
                  hover:text-text-secondary 
                  transition-colors 
                  text-2xl"