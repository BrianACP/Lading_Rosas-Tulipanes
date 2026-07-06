import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Los SVG de logo tienen '#' sin escapar en colores hex (ej. '#F7F3EA').
    // El inlining por defecto de Vite los vuelve data URIs sin codificar ese
    // '#', que el navegador interpreta como inicio de fragmento y trunca el
    // SVG a la mitad — el logo se rompe solo en el build de producción, no
    // en el dev server. Emitirlos como archivos separados evita el problema.
    assetsInlineLimit: 0
  }
});
