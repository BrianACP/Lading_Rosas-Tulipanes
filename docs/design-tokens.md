# Tokens de diseño — Rosas & Tulipanes

Fuente única de verdad: [`src/styles/base/_tokens.css`](../src/styles/base/_tokens.css). Este documento es una referencia legible; si hay discrepancia, el CSS manda.

## Color de marca

| Token              | Valor     | Uso                                                              |
| ------------------- | --------- | ----------------------------------------------------------------- |
| `--verde-bosque`    | `#1D3B2A` | Color principal de marca. Fondo del hero, footer, acentos oscuros |
| `--verde-profundo`  | `#122A1C` | Variante más oscura del verde, para profundidad y fondos densos   |
| `--crema`           | `#F7F3EA` | Fondo principal del sitio                                         |
| `--crema-2`         | `#EFE8D8` | Fondo secundario (franjas alternas, ej. Servicios)                |
| `--dorado`          | `#B99C61` | Acentos, CTAs, hover states, detalles decorativos                 |
| `--rosa-polvo`      | `#DDC7B8` | Acentos suaves, detalles sobre fondos oscuros                     |
| `--carbon`          | `#26251F` | Texto principal                                                   |
| `--carbon-suave`    | `#54524A` | Texto secundario / párrafos                                       |
| `--line`            | `rgba(29, 59, 42, 0.14)` | Líneas divisorias sutiles sobre fondos claros (ej. `.about__stats`) |

## Tipografía

| Token           | Valor              | Uso                          |
| --------------- | ------------------ | ----------------------------- |
| `--font-display` | `'Fraunces', serif` | Títulos, headline, wordmark   |
| `--font-body`     | `'Jost', sans-serif` | Cuerpo de texto, UI, botones |

Cargadas desde Google Fonts vía `<link>` en `index.html` (con `preconnect` + `display=swap`), no con `@font-face` local — evita mantener archivos de fuente/licencias para un sitio estático de este tamaño. Justificación completa en el comentario de cabecera de `_typography.css`.

### Escala tipográfica

Fluida vía `clamp()` (mobile → desktop), no valores fijos:

`--text-xs` · `--text-sm` · `--text-base` · `--text-lg` · `--text-xl` · `--text-2xl` · `--text-3xl` · `--text-4xl` · `--text-5xl` · `--text-6xl`

Ver `_tokens.css` para los valores `clamp()` exactos de cada paso.

## Espaciado

Escala lineal de 8px, de `--space-1` (0.5rem / 8px) a `--space-12` (6rem / 96px), en incrementos de `0.5rem` (`--space-1: 0.5rem`, `--space-2: 1rem`, `--space-3: 1.5rem`, … `--space-12: 6rem`). Usada de forma consistente en paddings/gaps de todas las secciones. Para espacios mayores a `--space-12` se combinan dos tokens con `calc()` (ej. `calc(var(--space-12) + var(--space-11))` en el padding superior del hero) en vez de crear un token nuevo.

## Layout y forma

- `--container-max`: 1200px — ancho máximo de contenido.
- `--container-pad`: `clamp(1.25rem, 4vw, 3rem)` — padding lateral fluido.
- `--radius-sm` / `--radius-md` / `--radius-lg`: 6px / 14px / 28px.
- Breakpoint principal: **880px** (mobile por debajo, desktop por encima). Se usa como valor literal en cada archivo de componente (no existe como custom property porque las media queries de CSS no pueden leer variables).

## Movimiento

- `--ease-brand`: `cubic-bezier(0.22, 1, 0.36, 1)` — easing por defecto para transiciones CSS y timelines de GSAP.
- `--duration-fast` / `--duration-base` / `--duration-slow`: 0.3s / 0.6s / 1s.
- Todas las animaciones (CSS y GSAP) respetan `prefers-reduced-motion: reduce`: se omiten o se resuelven directamente al estado final.

## Motivo de marca: línea ondulada

El separador entre secciones (`.divider`, implementado en `src/scripts/modules/dividers.js`) es un `<path>` SVG que imita el line-art del logo. Se anima con `stroke-dasharray`/`stroke-dashoffset` conforme entra al viewport, dando el efecto de "dibujarse a sí mismo". El color por defecto es `--dorado`; sobre fondos oscuros se usa la clase `.divider--on-dark` (`--rosa-polvo`).
