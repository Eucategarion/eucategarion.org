# Sacratísimo Reino Soberano de Eucategarion

Sitio oficial del Reino Soberano de Eucategarion. *Ordo et Fides.*

## Stack

- **[Astro](https://astro.build/)** — generación estática (SSG)
- **TailwindCSS** — estilos utilitarios
- **MDX** — contenido legislativo y estructurado
- Deploy: **GitHub Pages**

## Desarrollo

```bash
pnpm install
pnpm dev          # localhost:4321
pnpm build        # build estático → dist/
pnpm preview      # previsualizar el build
```

## Estructura

```
src/
├── components/       # Componentes Astro reutilizables
├── content/
│   └── legislacion/  # Edictos y decretos en MDX
├── layouts/          # Layout base del Reino
├── pages/
│   ├── index.astro        # El Trono
│   ├── reino.astro        # El Reino
│   ├── gobierno/
│   │   ├── index.astro    # Gobierno del Reino
│   │   └── [provincia].astro
│   ├── cancilleria.astro  # Cancillería Imperial
│   ├── legislacion/
│   │   └── index.astro    # Archivo legislativo
│   ├── liber-ordinis.astro # Liber Ordinis
│   └── calendario.astro   # Calendario imperial
└── utils/
    └── calendar.ts    # Lógica del calendario E.O.E.
public/               # Assets (imágenes, escudo, mapa)
```

## El Reino

El **Sacratísimo Reino Soberano de Eucategarion** es un reino soberano fundado en el Año I de la *Era Ordinis Elevati* (E.O.E.), equivalente al año civil 2026. Gobernado por el Autocrátor Alexion I bajo el lema *Ordo et Fides*.

La estructura institucional comprende **La Metrópolis** (capital y dominio directo del Trono) y **cinco Provincias Mayores**: Provincia del Orden, Provincia de la Fides, Provincia de la Elevación, Provincia de las Artes y la Tradición, y Provincia de la Expansión Digital.

Ver `CLAUDE.md` para documentación completa del proyecto.
