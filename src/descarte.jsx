

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