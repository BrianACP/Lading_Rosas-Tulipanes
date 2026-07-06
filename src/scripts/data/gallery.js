import placeholder from '../../assets/images/gallery/placeholder.svg';

/**
 * @typedef {Object} GalleryItem
 * @property {string} id
 * @property {'bodas'|'eventos'|'ramos'} categoria
 * @property {string} src - ruta a la imagen real; placeholder hasta la Fase 9
 * @property {string} alt - descripción real del arreglo/contexto
 * @property {'big'|'med'|'small'|'tall'} tamano - controla el span en el grid
 */

/** @type {GalleryItem[]} */
export const galleryItems = [
  {
    id: 'gal-01',
    categoria: 'bodas',
    src: placeholder,
    alt: 'Ramo de novia con rosas blancas, ranúnculos y eucalipto para boda en jardín de Mérida',
    tamano: 'big'
  },
  {
    id: 'gal-02',
    categoria: 'eventos',
    src: placeholder,
    alt: 'Arreglo bajo en tonos dorados para mesa de honor en apertura de negocio',
    tamano: 'small'
  },
  {
    id: 'gal-03',
    categoria: 'ramos',
    src: placeholder,
    alt: 'Ramo de flores mixtas en tonos rosa palo envuelto en papel kraft',
    tamano: 'small'
  },
  {
    id: 'gal-04',
    categoria: 'bodas',
    src: placeholder,
    alt: 'Arco floral ceremonial con flores en cascada para boda en hacienda yucateca',
    tamano: 'tall'
  },
  {
    id: 'gal-05',
    categoria: 'eventos',
    src: placeholder,
    alt: 'Centro de mesa verde bosque y crema para cena de aniversario corporativo',
    tamano: 'med'
  },
  {
    id: 'gal-06',
    categoria: 'ramos',
    src: placeholder,
    alt: 'Ramo de cumpleaños con flor de temporada y follaje natural',
    tamano: 'med'
  },
  {
    id: 'gal-07',
    categoria: 'bodas',
    src: placeholder,
    alt: 'Boutonniere y detalle floral para el cortejo nupcial en tonos dorado',
    tamano: 'small'
  },
  {
    id: 'gal-08',
    categoria: 'eventos',
    src: placeholder,
    alt: 'Decoración de fotocall con flores colgantes para baby shower',
    tamano: 'small'
  },
  {
    id: 'gal-09',
    categoria: 'ramos',
    src: placeholder,
    alt: 'Ramo grande de aniversario en tonos rosa palo y dorado sobre mesa de madera',
    tamano: 'big'
  },
  {
    id: 'gal-10',
    categoria: 'bodas',
    src: placeholder,
    alt: 'Pasillo de ceremonia con arreglos bajos y pétalos en tonos tierra',
    tamano: 'tall'
  },
  {
    id: 'gal-11',
    categoria: 'eventos',
    src: placeholder,
    alt: 'Instalación floral de entrada para evento corporativo en Mérida centro',
    tamano: 'med'
  },
  {
    id: 'gal-12',
    categoria: 'ramos',
    src: placeholder,
    alt: 'Ramo pequeño de regalo en tonos crema y verde bosque',
    tamano: 'small'
  },
  {
    id: 'gal-13',
    categoria: 'bodas',
    src: placeholder,
    alt: 'Centro de mesa de recepción con velas y rosas en tonos crema',
    tamano: 'small'
  },
  {
    id: 'gal-14',
    categoria: 'eventos',
    src: placeholder,
    alt: 'Arreglo floral para posada familiar en tonos verde profundo y dorado',
    tamano: 'med'
  }
];
