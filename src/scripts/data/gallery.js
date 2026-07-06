import boda01 from '../../assets/images/gallery/bodas/boda-01.png';
import boda02 from '../../assets/images/gallery/bodas/boda-02.png';
import boda03 from '../../assets/images/gallery/bodas/boda-03.png';
import boda04 from '../../assets/images/gallery/bodas/boda-04.png';
import boda05 from '../../assets/images/gallery/bodas/boda-05.png';
import boda06 from '../../assets/images/gallery/bodas/boda-06.png';
import boda07 from '../../assets/images/gallery/bodas/boda-07.png';
import boda08 from '../../assets/images/gallery/bodas/boda-08.png';

import ramoArreglo01 from '../../assets/images/gallery/ramos/ramo-arreglo-01.png';
import ramoArreglo02 from '../../assets/images/gallery/ramos/ramo-arreglo-02.png';
// ramo-arreglo-03.png queda fuera: trae un watermark con dirección y teléfono
// de otra florería, no de Rosas & Tulipanes — no se debe publicar tal cual.
import ramoArreglo04 from '../../assets/images/gallery/ramos/ramo-arreglo-04.png';
import ramoArreglo05 from '../../assets/images/gallery/ramos/ramo-arreglo-05.png';

import ramoNovia01 from '../../assets/images/gallery/ramos/ramo-novia-01.png';
import ramoNovia02 from '../../assets/images/gallery/ramos/ramo-novia-02.png';
import ramoNovia03 from '../../assets/images/gallery/ramos/ramo-novia-03.png';
import ramoNovia04 from '../../assets/images/gallery/ramos/ramo-novia-04.png';
import ramoNovia05 from '../../assets/images/gallery/ramos/ramo-novia-05.png';
import ramoNovia06 from '../../assets/images/gallery/ramos/ramo-novia-06.png';

/**
 * @typedef {Object} GalleryItem
 * @property {string} id
 * @property {'bodas'|'ramos'} categoria - pendiente: agregar 'eventos' cuando haya fotos de esa categoría
 * @property {string} src - imagen real importada como módulo
 * @property {string} alt - descripción real del arreglo/contexto
 * @property {'big'|'med'|'small'|'tall'} tamano - controla el span en el grid
 */

/** @type {GalleryItem[]} */
export const galleryItems = [
  {
    id: 'gal-boda-01',
    categoria: 'bodas',
    src: boda01,
    alt: 'Altar de boda nocturno con letrero de neón "Better Together", rosas blancas y rosadas, y velas flotantes en cilindros de cristal',
    tamano: 'big'
  },
  {
    id: 'gal-boda-08',
    categoria: 'bodas',
    src: boda08,
    alt: 'Ceremonia de boda bajo palmeras con arco circular de flores rojas y naranjas, novios frente al oficiante',
    tamano: 'big'
  },
  {
    id: 'gal-boda-02',
    categoria: 'bodas',
    src: boda02,
    alt: 'Pastel de bodas blanco con monograma junto a un arreglo de rosas y flor de nube, en mesa de barra de hacienda',
    tamano: 'med'
  },
  {
    id: 'gal-boda-03',
    categoria: 'bodas',
    src: boda03,
    alt: 'Ambientación de recepción bajo un árbol con esferas de luz colgantes, mesa y sillas de mimbre frente a una fachada de piedra antigua',
    tamano: 'small'
  },
  {
    id: 'gal-boda-04',
    categoria: 'bodas',
    src: boda04,
    alt: 'Arco floral circular de rosas blancas, flor de nube y plumas de pampas, iluminado durante la noche',
    tamano: 'tall'
  },
  {
    id: 'gal-boda-05',
    categoria: 'bodas',
    src: boda05,
    alt: 'Letrero de bienvenida en espejo enmarcado con rosas blancas y follaje, frente a una fachada de hacienda en tonos terracota',
    tamano: 'med'
  },
  {
    id: 'gal-boda-06',
    categoria: 'bodas',
    src: boda06,
    alt: 'Salón de recepción con candelabro de cristal, pista iluminada y centros de mesa con flores blancas y velas',
    tamano: 'tall'
  },
  {
    id: 'gal-boda-07',
    categoria: 'bodas',
    src: boda07,
    alt: 'Letrero de bienvenida en espejo arqueado flanqueado por columnas de rosas blancas, gladiolas y velas en cilindros de cristal',
    tamano: 'small'
  },
  {
    id: 'gal-ramo-arreglo-01',
    categoria: 'ramos',
    src: ramoArreglo01,
    alt: 'Centro de mesa alto en jarrón blanco con rosas y claveles blancos, flor de nube y follaje colgante, sobre pedestal al aire libre',
    tamano: 'small'
  },
  {
    id: 'gal-ramo-arreglo-02',
    categoria: 'ramos',
    src: ramoArreglo02,
    alt: 'Centro de mesa de recepción con rosas y lisianthus blancos entre copas y vajilla, jardín con agaves de fondo',
    tamano: 'med'
  },
  {
    id: 'gal-ramo-arreglo-04',
    categoria: 'ramos',
    src: ramoArreglo04,
    alt: 'Arreglo grande en tonos rosa y durazno con tulipanes morados, plumas de pampas y hojas de anturio pintadas, sobre base de madera',
    tamano: 'med'
  },
  {
    id: 'gal-ramo-arreglo-05',
    categoria: 'ramos',
    src: ramoArreglo05,
    alt: 'Arreglo tropical exótico con proteas, orquídeas phalaenopsis, anturios y hojas doradas, sobre piedra',
    tamano: 'med'
  },
  {
    id: 'gal-ramo-novia-01',
    categoria: 'ramos',
    src: ramoNovia01,
    alt: 'Novia sonriente con ramo cascada de orquídeas phalaenopsis blancas y follaje verde',
    tamano: 'small'
  },
  {
    id: 'gal-ramo-novia-02',
    categoria: 'ramos',
    src: ramoNovia02,
    alt: 'Detalle de ramo de novia en tonos durazno y tierra con rosas, elementos secos y follaje otoñal',
    tamano: 'small'
  },
  {
    id: 'gal-ramo-novia-03',
    categoria: 'ramos',
    src: ramoNovia03,
    alt: 'Ramo colorido con gladiolas naranjas, orquídeas blancas, rosas rosadas y lisianthus morado, sostenido al aire libre',
    tamano: 'med'
  },
  {
    id: 'gal-ramo-novia-04',
    categoria: 'ramos',
    src: ramoNovia04,
    alt: 'Ramo de novia clásico y redondo de rosas rosadas en distintos tonos con flor de nube, envuelto en listón blanco',
    tamano: 'small'
  },
  {
    id: 'gal-ramo-novia-05',
    categoria: 'ramos',
    src: ramoNovia05,
    alt: 'Ramo tropical con anturio rosa, flor de jengibre, orquídeas blancas y ranúnculo amarillo',
    tamano: 'small'
  },
  {
    id: 'gal-ramo-novia-06',
    categoria: 'ramos',
    src: ramoNovia06,
    alt: 'Ramo cascada en blanco con anturios y orquídeas phalaenopsis, en patio de estilo colonial',
    tamano: 'med'
  }
];
