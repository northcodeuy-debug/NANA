# 🌐 Proyecto Web Estática - #NANA
## Vista previa en: [https://arygimenez.github.io/NANA/](https://arygimenez.github.io/NANA/)
## 📖 Descripción

Landing page estática desarrollada en **React + Vite**, con estilos en **TailwindCSS** y animación de partículas en **Three.js**.  
El objetivo es mostrar la marca **#NANA** con una propuesta moderna y minimalista.

---

## 🚀 Tecnologías principales
- **React (Vite)** → Renderizado de componentes.
- **TailwindCSS** → Estilos rápidos con clases utilitarias + variables personalizadas.
- **Three.js** → Animación de partículas en el hero.
- **FontAwesome** → Íconos de redes sociales.
- **Google Fonts** → Tipografías `Style Script` y `Cormorant Unicase`.

---

## 📂 Estructura del proyecto

``` text

| src/
|  ├── assets/ # Archivos estáticos
|  │   ├── FotosTemporal/ # Imágenes en revisión o borrador
|  │   ├── productos/ # Imágenes de productos
|  │   ├── fondoWeb.jpg # Imagen de fondo principal
|  │   ├── image (8).png # Imagen de prueba
|  │   ├── ImagenPortada.xcf # Archivo editable de GIMP
|  │   └── react.svg # Logo de React
|  │
|  ├── App.jsx # Componente principal con todas las secciones
|  ├── descarte.jsx # Archivo de pruebas o descartes
|  ├── index.css # Estilos globales y variables CSS
|  └── main.jsx # Punto de entrada de la app
├── index.html # HTML base usado por Vite
├── package.json # Dependencias y scripts
├── package-lock.json # Versionado de dependencias
├── vite.config.js # Configuración de Vite
├── tailwind.config.js # Configuración de Tailwind extendida
├── postcss.config.js # Configuración de PostCSS
├── eslint.config.js # Configuración de ESLint
└── README.md # Documentación del proyecto

```

---

## 🎨 Estilos y Configuración
- Variables globales en `index.css`:
  - Colores (`--color-primary`, `--color-secondary`, `--color-text-primary`, etc.)
  - Fuentes (`--font-brand`, `--font-body`)
- Tailwind extendido en `tailwind.config.js`:
  - Colores enlazados a las variables CSS.
  - Imagen de fondo (`bg-fondo-web`).
  - Familias tipográficas personalizadas.

---

## 🖼️ Componentes principales en `App.jsx`
- **Header** → Barra fija superior con logo `#NANA`.
- **InicioSection** → Hero con animación de partículas en `Three.js`.
- **AboutUsSection** → Sección “Sobre Nosotros”.
- **ProductosSection** → Catálogo dividido en:
  - Colección Actual
  - Accesorios
  - Segunda Mano
- **Footer** → Íconos y links a redes sociales.

---

## 🛠️ Instalación y uso

1. Clonar el proyecto:
   ```bash
   git clone https://github.com/usuario/nana-web.git
   cd nana-web
   ```

2. Instalar dependencias:
   ```bash   
    npm install
    ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Generar build de producción:
   ```bash
   npm run build
   ```
5. Previsualizar el build:
   ```bash  
    npm run preview
    ```
---
## 🌐 Despliegue
- Netlify
- Vercel
- GitHub Pages (como web estática)
---