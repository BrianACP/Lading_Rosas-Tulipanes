import ramo01 from '../../assets/images/gallery/ramos/ramo-01.jpg';
import ramo02 from '../../assets/images/gallery/ramos/ramo-02.jpg';
import ramo03 from '../../assets/images/gallery/ramos/ramo-03.jpg';
import ramo04 from '../../assets/images/gallery/ramos/ramo-04.jpg';
import ramo05 from '../../assets/images/gallery/ramos/ramo-05.jpg';

import arreglo01 from '../../assets/images/gallery/arreglos/arreglo-01.jpg';
import arreglo02 from '../../assets/images/gallery/arreglos/arreglo-02.jpg';
import arreglo03 from '../../assets/images/gallery/arreglos/arreglo-03.jpg';
import arreglo04 from '../../assets/images/gallery/arreglos/arreglo-04.jpg';
import arreglo05 from '../../assets/images/gallery/arreglos/arreglo-05.jpg';

import centroMesa01 from '../../assets/images/gallery/centros-mesa/centro-mesa-01.jpg';
import centroMesa02 from '../../assets/images/gallery/centros-mesa/centro-mesa-02.jpg';
import centroMesa03 from '../../assets/images/gallery/centros-mesa/centro-mesa-03.jpg';
import centroMesa04 from '../../assets/images/gallery/centros-mesa/centro-mesa-04.jpg';
import centroMesa05 from '../../assets/images/gallery/centros-mesa/centro-mesa-05.jpg';

import decoracionIglesia01 from '../../assets/images/gallery/decoracion-iglesia/decoracion-iglesia-01.jpg';
import decoracionIglesia02 from '../../assets/images/gallery/decoracion-iglesia/decoracion-iglesia-02.jpg';
import decoracionIglesia03 from '../../assets/images/gallery/decoracion-iglesia/decoracion-iglesia-03.jpg';
import decoracionIglesia04 from '../../assets/images/gallery/decoracion-iglesia/decoracion-iglesia-04.jpg';
import decoracionIglesia05 from '../../assets/images/gallery/decoracion-iglesia/decoracion-iglesia-05.jpg';

import evento01 from '../../assets/images/gallery/eventos/evento-01.jpg';
import evento02 from '../../assets/images/gallery/eventos/evento-02.jpg';
import evento03 from '../../assets/images/gallery/eventos/evento-03.jpg';
import evento04 from '../../assets/images/gallery/eventos/evento-04.jpg';
import evento05 from '../../assets/images/gallery/eventos/evento-05.jpg';

/**
 * @typedef {Object} GalleryItem
 * @property {string} id
 * @property {'ramos'|'arreglos'|'centros-mesa'|'decoracion-iglesia'|'eventos'} categoria
 * @property {string} src - imagen real importada como módulo
 * @property {string} alt - descripción real del arreglo/contexto
 */

/** @type {GalleryItem[]} */
export const galleryItems = [
  {
    id: 'gal-ramo-01',
    categoria: 'ramos',
    src: ramo01,
    alt: 'Ramo de rosas blancas envuelto en papel crema con listón blanco'
  },
  {
    id: 'gal-ramo-02',
    categoria: 'ramos',
    src: ramo02,
    alt: 'Ramo de rosas color durazno y crema con follaje verde, envuelto en papel rosa palo'
  },
  {
    id: 'gal-ramo-03',
    categoria: 'ramos',
    src: ramo03,
    alt: 'Ramo de hortensia azul con rosas rosas y blancas, envuelto en papel azul'
  },
  {
    id: 'gal-ramo-04',
    categoria: 'ramos',
    src: ramo04,
    alt: 'Ramo de girasoles envuelto en papel periódico kraft con rafia'
  },
  {
    id: 'gal-ramo-05',
    categoria: 'ramos',
    src: ramo05,
    alt: 'Ramo de lirios blancos envuelto en papel kraft con listón amarillo'
  },
  {
    id: 'gal-arreglo-01',
    categoria: 'arreglos',
    src: arreglo01,
    alt: 'Arreglo de lirios y rosas blancas en jarrón de cristal con listón blanco'
  },
  {
    id: 'gal-arreglo-02',
    categoria: 'arreglos',
    src: arreglo02,
    alt: 'Arreglo de rosas blancas y follaje verde en jarrón redondo'
  },
  {
    id: 'gal-arreglo-03',
    categoria: 'arreglos',
    src: arreglo03,
    alt: 'Arreglo de rosas blancas y flor de nube en jarrón alto de cristal'
  },
  {
    id: 'gal-arreglo-04',
    categoria: 'arreglos',
    src: arreglo04,
    alt: 'Arreglo de rosas, claveles y lirios en tonos rosa y durazno en caja blanca'
  },
  {
    id: 'gal-arreglo-05',
    categoria: 'arreglos',
    src: arreglo05,
    alt: 'Arreglo de rosas blancas y rosadas con lisianthus morado sobre base negra'
  },
  {
    id: 'gal-centro-mesa-01',
    categoria: 'centros-mesa',
    src: centroMesa01,
    alt: 'Centro de mesa con hortensias, rosas rosas y alcatraces blancos junto a veladoras'
  },
  {
    id: 'gal-centro-mesa-02',
    categoria: 'centros-mesa',
    src: centroMesa02,
    alt: 'Centro de mesa bajo con rosas rosas y astilbe en florero de cristal'
  },
  {
    id: 'gal-centro-mesa-03',
    categoria: 'centros-mesa',
    src: centroMesa03,
    alt: 'Centro de mesa alto en base dorada con rosas y flor de nube, sobre mesa con candelabros'
  },
  {
    id: 'gal-centro-mesa-04',
    categoria: 'centros-mesa',
    src: centroMesa04,
    alt: 'Centro de mesa con rosas blancas y rosadas sobre base espejada con veladoras doradas'
  },
  {
    id: 'gal-centro-mesa-05',
    categoria: 'centros-mesa',
    src: centroMesa05,
    alt: 'Corona floral de rosas rosas y blancas alrededor de tres cilindros con velas flotantes'
  },
  {
    id: 'gal-decoracion-iglesia-01',
    categoria: 'decoracion-iglesia',
    src: decoracionIglesia01,
    alt: 'Bancas de iglesia decoradas con tul blanco, listón rosa y rosas'
  },
  {
    id: 'gal-decoracion-iglesia-02',
    categoria: 'decoracion-iglesia',
    src: decoracionIglesia02,
    alt: 'Altar decorado con esferas de flor de nube y rosas rosas'
  },
  {
    id: 'gal-decoracion-iglesia-03',
    categoria: 'decoracion-iglesia',
    src: decoracionIglesia03,
    alt: 'Altar de iglesia decorado con flores blancas y rosas en tonos pastel'
  },
  {
    id: 'gal-decoracion-iglesia-04',
    categoria: 'decoracion-iglesia',
    src: decoracionIglesia04,
    alt: 'Entrada de iglesia de piedra con urnas de flores en tonos pastel'
  },
  {
    id: 'gal-decoracion-iglesia-05',
    categoria: 'decoracion-iglesia',
    src: decoracionIglesia05,
    alt: 'Arco floral blanco sobre puerta de entrada con jarrones florales a los lados'
  },
  {
    id: 'gal-evento-01',
    categoria: 'eventos',
    src: evento01,
    alt: 'Mesa de honor con candelabro dorado y arreglos de rosas rosas, decorada con cortinas rosa pálido'
  },
  {
    id: 'gal-evento-02',
    categoria: 'eventos',
    src: evento02,
    alt: 'Instalación floral colgante en tonos pastel sobre cortina con luces'
  },
  {
    id: 'gal-evento-03',
    categoria: 'eventos',
    src: evento03,
    alt: 'Mesa decorada con floreros individuales, candelabro dorado y cortinas blancas'
  },
  {
    id: 'gal-evento-04',
    categoria: 'eventos',
    src: evento04,
    alt: 'Instalación de rosas blancas colgando del techo sobre salón de recepción'
  },
  {
    id: 'gal-evento-05',
    categoria: 'eventos',
    src: evento05,
    alt: 'Arreglo floral colgante sobre mesa redonda con velas y sillas doradas'
  }
];
