# Rosas & Tulipanes

Landing page de Rosas & Tulipanes, florería en Mérida, Yucatán. Sitio estático de una sola página: sin backend, sin base de datos.

**Stack:** Vite (JS vanilla) + HTML + CSS modular + GSAP/ScrollTrigger.

## Instalación

Requiere Node.js 18 o superior.

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Levanta un servidor local con recarga en caliente (por defecto abre el navegador automáticamente).

## Build de producción

```bash
npm run build
```

Genera el sitio listo para desplegar en `dist/`. Para previsualizar ese build localmente:

```bash
npm run preview
```

## Estructura del proyecto

```
├── index.html                 Único documento HTML del sitio
├── src/
│   ├── main.js                 Orquestador: importa CSS y arranca cada módulo
│   ├── styles/                 CSS modular (tokens, reset, tipografía, componentes)
│   ├── scripts/
│   │   ├── modules/             Un módulo por comportamiento (nav, hero, galería, etc.)
│   │   └── data/                 Contenido (servicios, testimonios, galería) como datos
│   └── assets/                  Imágenes e íconos
└── docs/design-tokens.md       Referencia de los tokens de color/tipografía
```

Cada archivo en `src/scripts/modules/` exporta una única función de inicialización (por ejemplo `initGallery()`), y todo se orquesta desde `src/main.js`. El contenido de texto de Servicios, Testimonios y las rutas de la Galería vive en `src/scripts/data/*.js` — nunca está escrito directamente en el HTML.

## Agregar fotos nuevas a la galería

La galería actualmente usa **placeholders con gradientes de marca** (SVG) mientras se suben las fotos reales. Para reemplazarlos:

1. **Ubica la carpeta según la categoría** de la foto:
   - `src/assets/images/gallery/bodas/`
   - `src/assets/images/gallery/eventos/`
   - `src/assets/images/gallery/ramos/`

2. **Coloca el archivo de la foto** (`.jpg`, `.webp` o `.png`) en la carpeta correspondiente. Para reemplazar un placeholder existente, puedes usar el mismo nombre de archivo (cambiando la extensión) o uno nuevo — solo asegúrate de actualizar el import en el paso siguiente.

3. **Regístrala en `src/scripts/data/gallery.js`**:
   - Si reemplazas un placeholder, actualiza el `import` correspondiente al inicio del archivo para que apunte al nuevo archivo (por ejemplo, cambia `boda-01.svg` por `boda-01.jpg`).
   - Si agregas una foto nueva, añade un `import` nuevo y un objeto nuevo al array `galleryItems`, con esta forma:

     ```js
     import boda07 from '../../assets/images/gallery/bodas/boda-07.jpg';

     // dentro del array galleryItems:
     {
       src: boda07,
       category: 'bodas',
       alt: 'Descripción real del arreglo: tipo de flor, colores, tipo de evento'
     }
     ```

4. **Escribe un `alt` descriptivo** siempre: qué tipo de arreglo es, colores predominantes y contexto (boda, evento, ramo de regalo). Evita textos genéricos como "imagen" o "foto 1".

No es necesario tocar `gallery.js` (el módulo) ni el HTML: el grid, el `loading="lazy"` y la animación de entrada en cascada se generan automáticamente a partir de este array.

## Notas de accesibilidad y rendimiento

- Todas las animaciones (GSAP y CSS) respetan `prefers-reduced-motion: reduce`.
- Todas las imágenes de la galería usan `loading="lazy"` (el hero no, por ser contenido above-the-fold).
- No se usa `localStorage` ni `sessionStorage` en ningún módulo.
