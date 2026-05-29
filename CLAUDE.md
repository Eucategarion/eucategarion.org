# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ¿Qué es este proyecto?

El **Sacratísimo Reino Soberano de Eucategarion** es un sitio web creativo que presenta un reino ficticio con estructura institucional, sistema de gobierno, calendario propio, y cuerpo legislativo. No es un juego ni una historia: es una construcción narrativa e institucional presentada con seriedad documental, como si el Reino existiera. El estilo es imperial-medieval, con terminología latina y española, ornamentos formales, y una identidad visual consistente basada en borgoña, dorado y crema.

**Lema del Reino:** *Ordo et Fides* (Orden y Fe)  
**Era fundacional:** Año I E.O.E. (*Era Ordinis Elevati*), equivalente al año civil 2026  
**Gobernante:** Autocrátor Alexion I

---

## Stack

- Framework: **Astro 5** (output: `static`, deploy en GitHub Pages, dominio `eucategarion.org`)
- Estilos: **TailwindCSS 4** via Vite plugin — sin frameworks CSS adicionales
- Contenido: **MDX** para legislación (Astro Content Collections)
- Package manager: **pnpm**

---

## Comandos

```bash
pnpm install        # Instalar dependencias
pnpm dev            # Servidor de desarrollo (localhost:4321)
pnpm build          # Build de producción (genera /dist)
pnpm preview        # Previsualizar el build estático
pnpm typecheck      # astro check — verificar tipos TypeScript y .astro
```

---

## Arquitectura Astro

### Layout y componentes

Todas las páginas usan `~/layouts/BaseLayout.astro` como envoltorio. Recibe `title` y un `description` opcional; el componente inyecta `<head>`, fuentes de Google (`Cardo`, `Roboto Slab`), `Header`, `Menu`, `<main><slot /></main>` y `Footer`.

El alias `~` apunta a `src/` (configurado en `tsconfig.json`).

### Content Collections — Legislación

Los documentos legislativos viven en `src/content/legislacion/*.mdx`. El schema está definido en `src/content.config.ts`:

```ts
{ code, title, type, subject, imperialDate, civilDate, status, order? }
```

- `status` es un enum: `'Vigente' | 'Derogado' | 'Suspendido'`
- `order` controla el orden de navegación entre documentos en `[slug].astro`
- La ruta dinámica `src/pages/legislacion/[slug].astro` genera una página por cada `.mdx` via `getStaticPaths()`

### Estilos

- **Global:** `src/styles/global.css` — reset, tipografía base, utilidades compartidas
- **Por página/componente:** bloques `<style>` al final de cada `.astro` (scoped automáticamente por Astro)
- TailwindCSS se usa para utilidades de layout; los estilos editoriales específicos (documento legislativo, letterhead, etc.) están en `<style>` scoped

### Datos de Provincias

`src/utils/provinces.ts` exporta el array `provinces` (tipo `Province`) con los 5 slugs: `orden`, `fides`, `elevacion`, `artes`, `expansion`. La función `getProvinceBySlug(slug)` se usa en `src/pages/gobierno/[provincia].astro`.

### Calendario Imperial

`src/utils/calendar.ts` expone las funciones de conversión de fechas gregorianas a formato E.O.E.:
- `formatImperial(date)` → formato largo
- `formatImperialShort(date)` → formato corto
- `getImperialYear(date)` → `{ year: string (romano), isBeforeFoundation: boolean }`

El año base es 2026 civil = Año I E.O.E.

### GitHub Pages

El `site` en `astro.config.ts` está configurado como `https://eucategarion.org`. Si se despliega en subpath sin dominio custom, descomentar `base: '/eucategarion'` en `astro.config.ts`.

---

## Identidad visual

### Colores
| Variable         | Valor     | Uso                          |
|------------------|-----------|------------------------------|
| Borgoña          | `#5a0f1b` | Texto primario, acentos       |
| Negro imperial   | `#0b0b0d` | Header, footer, fondos oscuros |
| Dorado           | `#c6a75e` | Highlights, bordes, activos   |
| Crema            | `#f4f1e8` | Fondo principal, texto claro  |

### Tipografía
- **Cardo** (serif, Google Fonts) — títulos y headings
- **Roboto Slab** (serif, Google Fonts) — cuerpo de texto
- **Courier New** — códigos legislativos (monospace)

### Dirección editorial
**Editorial / manuscrito**: mucho espacio en blanco, tipografía protagonista, ornamentos mínimos pero elegantes, texto justificado, letra capital (drop cap) en artículos legislativos.

---

## Estructura de rutas

| Ruta                    | Título                    | Descripción                                              |
|-------------------------|---------------------------|----------------------------------------------------------|
| `/`                     | El Trono                  | El Autocrátor y el Trono como sede del Orden             |
| `/reino`                | El Reino                  | Geografía, La Metrópolis, mapa, instituciones            |
| `/gobierno`             | Gobierno del Reino        | Las 5 Provincias Mayores y sus Prefectos                 |
| `/gobierno/[provincia]` | Provincia X               | Página individual por provincia (slug de `provinces.ts`) |
| `/cancilleria`          | Cancillería Imperial      | Funciones de autenticación y registro de actos del Estado |
| `/legislacion`          | Legislación               | Archivo de edictos y decretos imperiales                 |
| `/legislacion/[slug]`   | Documento legislativo     | Renderiza un `.mdx` de la colección `legislacion`        |
| `/liber-ordinis`        | Liber Ordinis             | El libro fundacional del Reino                           |
| `/calendario`           | Calendario                | Calendario civil con fechas imperiales superpuestas      |
| `/*`                    | 404                       | Página no encontrada                                     |

---

## Sistema de calendario imperial

- **Era:** E.O.E. (*Era Ordinis Elevati*). Año de fundación = 2026 civil = Año I E.O.E.
- **Años anteriores:** A.O.E. (*Ante Ordinem Elevatum*)
- **Numeración de años:** Números romanos (I, II, III…)
- **Meses imperiales** (mismos 12 meses del calendario gregoriano, renombrados):

| N° | Nombre imperial          | Traducción             |
|----|--------------------------|------------------------|
| 1  | Mensis Fidei             | Mes de la Fe           |
| 2  | Mensis Elevationis       | Mes de la Elevación    |
| 3  | Mensis Ordinis           | Mes del Orden          |
| 4  | Mensis Traditionis       | Mes de la Tradición    |
| 5  | Mensis Auctoritas        | Mes de la Autoridad    |
| 6  | Mensis Sapientiae        | Mes de la Sabiduría    |
| 7  | Mensis Custodiae         | Mes de la Custodia     |
| 8  | Mensis Metropolis        | Mes de la Metrópolis   |
| 9  | Mensis Expansionis       | Mes de la Expansión    |
| 10 | Mensis Virtutis          | Mes de la Virtud       |
| 11 | Mensis Concordiae        | Mes de la Concordia    |
| 12 | Mensis Aeternitatis      | Mes de la Eternidad    |

- **Formato largo:** `Día D MMMM Año X E.O.E.`
- **Formato corto:** `D-MMM-X E.O.E.`

**Fiestas imperiales (Dies):**
- Dies Victoriae
- Dies Fundationis
- Dies Coronationis
- Dies Domus Eucategarianae
- Dies Ordinis

---

## Estructura institucional del Reino

### El Trono
Sede del Autocrátor Alexion I. Custodio del Orden, no árbitro arbitrario. El Trono certifica la autoridad, no la crea.

### La Metrópolis (capital)
Dominio directo del Trono (no delegado a una Provincia). Contiene:
- El Palacio Imperial del Trono
- El Archivo Metropolitano Imperial
- La Cámara del Sello
- La Cancillería Imperial

### Las 5 Provincias Mayores

| Provincia              | Slug        | Autoridad                     | Competencias                              |
|------------------------|-------------|-------------------------------|-------------------------------------------|
| Provincia del Orden    | `orden`     | Prefecto del Orden            | Normas, disciplina, custodia institucional |
| Provincia de la Fides  | `fides`     | Metropolitano Provincial      | Preservación de la Fe y la tradición espiritual |
| Provincia de la Elevación | `elevacion` | Logoteta de la Elevación  | Educación, conocimiento, archivos de saber |
| Provincia de las Artes y la Tradición | `artes` | Custodio de la Tradición | Arte, cultura, patrimonio    |
| Provincia de la Expansión Digital | `expansion` | Exarca Digital     | Expansión en el ámbito digital            |

### La Cancillería Imperial
Certificadora y registradora de todos los actos del Estado. Funciones:
1. Redacción oficial
2. Registro y numeración
3. Sellado y autenticación
4. Publicación oficial
5. Custodia permanente

---

## Sistema legislativo

### Nomenclatura de documentos
- Formato de código: `TIP-AÑO-NÚM-EOE`
  - Ejemplo: `EDI-I-001-EOE` (Edicto, Año I, número 001 de la E.O.E.)
- Prefijos de tipo: `EDI` (Edicto), `DEC` (Decreto), `ACT` (Acta), `PROC` (Proclamación)
- El nombre del archivo `.mdx` debe coincidir con el código en minúsculas: `edi-i-001-eoe.mdx`

---

## Filosofía del Reino (frases clave)

- *"El Orden precede a toda autoridad"*
- *"La Verdad no se crea: se custodia"*
- *"La Fides no se impone: se preserva"*
- *"Ordo et Fides"*

---

## Assets disponibles

Todos en `/public`:
- `escudo.png` / `escudo-white.png` — Escudo/crest del Reino
- `metropolis.png` — Vista aérea de la Metrópolis
- `Alexion.png` — Retrato del Autocrátor Alexion I
- `mapa.png` — Mapa del Reino con provincias
- `palacio.png` — Palacio Imperial del Trono
- `archivo.png` — Archivo Metropolitano Imperial
- `sello.png` — Cámara del Sello
- `cancilleria.png` / `cancilleria-2.png` / `cancilleria-3.png` — Cancillería (vistas múltiples)
- `cancilleria-escudo.png` — Variante del crest para Cancillería
- `gobierno-consejo.png` — Sala del consejo administrativo
- `gobierno-provincia-orden.png` — Provincia del Orden
- `gobierno-provincia-fides.png` — Provincia de la Fides
- `gobierno-provincia-elevacion.png` — Provincia de la Elevación
- `gobierno-provincia-artes.png` — Provincia de las Artes
- `gobierno-provincia-expansion.png` — Provincia de la Expansión Digital
