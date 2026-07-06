/**
 * @typedef {Object} Service
 * @property {string} numero
 * @property {string} titulo
 * @property {string} descripcion
 * @property {string} icono - contenido interno de un <svg> (paths/shapes, sin la etiqueta envolvente)
 */

/** @type {Service[]} */
export const services = [
  {
    numero: '01',
    titulo: 'Bodas',
    descripcion:
      'Ramos de novia, centros de mesa, arcos florales y ambientación completa para el día más importante.',
    icono: '<path d="M12 15c-2.6-3.2-3.1-10.1 0-13.5 3.1 3.4 2.6 10.3 0 13.5Z"/><path d="M5 12.5c3.9 1 8.1 1 12 0"/><path d="M12 15v7"/>'
  },
  {
    numero: '02',
    titulo: 'Eventos',
    descripcion:
      'Aperturas, cumpleaños, baby showers y eventos corporativos con propuestas florales a la medida.',
    icono: '<circle cx="12" cy="8" r="4.5"/><path d="M7 21v-2a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v2"/>'
  },
  {
    numero: '03',
    titulo: 'Ramos personalizados',
    descripcion:
      'Arreglos para regalar, sorprender o decir gracias, en la paleta y estilo que prefieras.',
    icono: '<path d="M9 13.5 4.5 21"/><path d="M12 12.5c-1-3-.5-7 2-9.5 2.5 2.5 3 6.5 2 9.5"/><path d="M12 12.5c-3-1-6-.2-8 1.8 2.4 1.4 5.6 1.4 8-.3"/><path d="M12 12.5c3-1 6-.2 8 1.8-2.4 1.4-5.6 1.4-8-.3"/><path d="M12 12.5 9 21h6l-3-8.5Z"/>'
  }
];
