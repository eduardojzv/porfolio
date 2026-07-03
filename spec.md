# Portfolio Web — Especificación del Proyecto

## Visión General

Portfolio personal de desarrollador full-stack. Stack: **React + shadcn/ui + gridcn**, sin backend. Soporte de i18n (ES/EN), sistema de temas visuales (gridcn como base + 6 temas intercambiables), y filtrado de proyectos por tecnología.

---

## Stack Tecnológico del Proyecto

| Capa | Tecnología |
|---|---|
| Framework | React + Vite |
| UI Components | shadcn/ui + tailwindcss |
| Temas | CSS variables — gridcn como base, temas intercambiables |
| Internacionalización | i18next / react-i18next |
| Estado / Filtros | useState (React) |
| Carousel | embla-carousel-react |
| Iconos | @tabler/icons-react |
| Package Manager | pnpm |

---

## Setup Inicial

```bash
pnpm create vite@latest portfolio -- --template react-ts
cd portfolio

# Instalar dependencias base
pnpm install

# Inicializar shadcn
pnpm dlx shadcn@latest init

# Componentes shadcn necesarios
pnpm dlx shadcn@latest add button badge card select sheet tooltip

# Dependencias del proyecto
pnpm add embla-carousel-react embla-carousel-autoplay
pnpm add react-i18next i18next
pnpm add @tabler/icons-react
```

---

## Estructura de Carpetas

```
portfolio/
├── public/
│   └── images/projects/           # Imágenes de los proyectos
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── TechStack.tsx
│   │   ├── ui/                    # shadcn components (auto-generados)
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectCarousel.tsx
│   │   ├── TechFilter.tsx
│   │   └── ThemeSelector.tsx
│   ├── data/
│   │   └── projects.ts            # Array de proyectos
│   ├── i18n/
│   │   ├── index.ts               # Configuración i18next
│   │   ├── es.json
│   │   └── en.json
│   ├── themes/
│   │   ├── index.css              # Importa todos los archivos de tema
│   │   ├── themes.ts              # Metadatos y tipo ThemeName
│   │   ├── useTheme.ts            # Hook de tema con localStorage
│   │   ├── gridcn.css             # Tema base (variables base + grid)
│   │   ├── ares.css
│   │   ├── poseidon.css
│   │   ├── clu.css
│   │   ├── athena.css
│   │   ├── tron.css
│   │   └── aphrodite.css
│   ├── styles/
│   │   └── globals.css            # Reset base + importa themes/index.css
│   ├── App.tsx
│   └── main.tsx
```

---

## Sistema de Temas

### Concepto gridcn

El tema base replica la estética de **gridcn**: fondo oscuro casi negro, líneas de grid sutiles como fondo, tipografía limpia, acentos con color primario bien definido. Todos los temas comparten esta arquitectura visual — solo cambian los valores de color mediante CSS variables en `oklch`.

Cada tema vive en su **propio archivo CSS** dentro de `src/themes/`. El archivo `index.css` los importa todos. Los temas se activan poniendo `data-theme="nombre"` en el elemento `<html>`.

---

### `src/themes/index.css` — Punto de entrada

```css
@import './gridcn.css';
@import './ares.css';
@import './poseidon.css';
@import './clu.css';
@import './athena.css';
@import './tron.css';
@import './aphrodite.css';
```

Importar en `src/styles/globals.css`:

```css
@import '../themes/index.css';

/* Fondo grid estilo gridcn — se adapta al tema activo */
body {
  background-color: var(--background);
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: center center;
}
```

---

### `src/themes/gridcn.css`

```css
:root,
[data-theme="gridcn"] {
  --background:         oklch(0.09 0.01 250);
  --foreground:         oklch(0.93 0.01 220);
  --primary:            oklch(0.6 0.2 250);
  --primary-foreground: oklch(0.98 0 0);
  --secondary:          oklch(0.16 0.04 250);
  --secondary-foreground: oklch(0.95 0 0);
  --muted:              oklch(0.14 0.02 250);
  --muted-foreground:   oklch(0.6 0 0);
  --accent:             oklch(0.55 0.18 250);
  --accent-foreground:  oklch(0.98 0 0);
  --card:               oklch(0.11 0.02 250);
  --card-foreground:    oklch(0.93 0.01 220);
  --popover:            oklch(0.11 0.02 250);
  --popover-foreground: oklch(0.93 0.01 220);
  --border:             oklch(0.22 0.06 250);
  --input:              oklch(0.18 0.04 250);
  --ring:               oklch(0.6 0.2 250);
  --destructive:        oklch(0.55 0.25 30);
  --glow:               oklch(0.6 0.2 250);
  --glow-muted:         oklch(0.4 0.12 250);
  --grid-line:          oklch(0.25 0.04 250 / 0.12);
  --radius:             0.5rem;

  --chart-1: oklch(0.6 0.2 250);
  --chart-2: oklch(0.55 0.18 260);
  --chart-3: oklch(0.65 0.15 240);
  --chart-4: oklch(0.5 0.2 255);
  --chart-5: oklch(0.7 0.12 245);

  --sidebar:                    oklch(0.08 0.02 250);
  --sidebar-foreground:         oklch(0.92 0.02 220);
  --sidebar-primary:            oklch(0.6 0.2 250);
  --sidebar-primary-foreground: oklch(0.98 0 0);
  --sidebar-accent:             oklch(0.18 0.06 250);
  --sidebar-accent-foreground:  oklch(0.95 0 0);
  --sidebar-border:             oklch(0.22 0.06 250);
  --sidebar-ring:               oklch(0.6 0.2 250);
}
```

---

### `src/themes/ares.css`

```css
[data-theme="ares"] {
  --primary:                    oklch(0.6 0.25 25);
  --primary-foreground:         oklch(0.98 0 0);
  --secondary:                  oklch(0.65 0.18 55);
  --secondary-foreground:       oklch(0.1 0 0);
  --muted:                      oklch(0.15 0.02 250);
  --muted-foreground:           oklch(0.6 0.04 220);
  --accent:                     oklch(0.7 0.2 50);
  --accent-foreground:          oklch(0.1 0 0);
  --border:                     oklch(0.3 0.12 25);
  --input:                      oklch(0.15 0.04 250);
  --ring:                       oklch(0.6 0.25 25);
  --glow:                       oklch(0.6 0.25 25);
  --glow-muted:                 oklch(0.4 0.15 25);
  --grid-line:                  oklch(0.45 0.2 25 / 0.08);

  --chart-1: oklch(0.6 0.25 25);
  --chart-2: oklch(0.7 0.2 50);
  --chart-3: oklch(0.55 0.22 35);
  --chart-4: oklch(0.65 0.18 40);
  --chart-5: oklch(0.75 0.15 60);

  --sidebar-primary:            oklch(0.6 0.25 25);
  --sidebar-primary-foreground: oklch(0.98 0 0);
  --sidebar-accent:             oklch(0.7 0.2 50);
  --sidebar-accent-foreground:  oklch(0.1 0 0);
  --sidebar-border:             oklch(0.3 0.12 25);
  --sidebar-ring:               oklch(0.6 0.25 25);
}
```

---

### `src/themes/poseidon.css`

```css
[data-theme="poseidon"] {
  --primary:            oklch(0.6 0.2 250);
  --primary-foreground: oklch(0.98 0 0);
  --secondary:          oklch(0.18 0.06 250);
  --secondary-foreground: oklch(0.95 0 0);
  --muted:              oklch(0.15 0.04 250);
  --muted-foreground:   oklch(0.65 0 0);
  --accent:             oklch(0.55 0.18 250);
  --accent-foreground:  oklch(0.98 0 0);
  --border:             oklch(0.28 0.1 250);
  --input:              oklch(0.2 0.06 250);
  --ring:               oklch(0.6 0.2 250);
  --glow:               oklch(0.6 0.2 250);
  --glow-muted:         oklch(0.4 0.12 250);
  --grid-line:          oklch(0.45 0.18 250 / 0.08);

  --chart-1: oklch(0.6 0.2 250);
  --chart-2: oklch(0.55 0.18 260);
  --chart-3: oklch(0.65 0.15 240);
  --chart-4: oklch(0.5 0.2 255);
  --chart-5: oklch(0.7 0.12 245);

  --sidebar-primary:  oklch(0.6 0.2 250);
  --sidebar-accent:   oklch(0.18 0.06 250);
  --sidebar-border:   oklch(0.28 0.1 250);
  --sidebar-ring:     oklch(0.6 0.2 250);
}
```

---

### `src/themes/clu.css`

```css
[data-theme="clu"] {
  --primary:            oklch(0.75 0.2 55);
  --primary-foreground: oklch(0.1 0 0);
  --secondary:          oklch(0.18 0.06 50);
  --secondary-foreground: oklch(0.95 0 0);
  --muted:              oklch(0.15 0.04 50);
  --muted-foreground:   oklch(0.65 0 0);
  --accent:             oklch(0.7 0.18 55);
  --accent-foreground:  oklch(0.1 0 0);
  --border:             oklch(0.3 0.1 55);
  --input:              oklch(0.2 0.06 55);
  --ring:               oklch(0.75 0.2 55);
  --glow:               oklch(0.75 0.2 55);
  --glow-muted:         oklch(0.5 0.12 55);
  --grid-line:          oklch(0.55 0.18 55 / 0.07);

  --chart-1: oklch(0.75 0.2 55);
  --chart-2: oklch(0.7 0.18 45);
  --chart-3: oklch(0.65 0.15 65);
  --chart-4: oklch(0.8 0.15 50);
  --chart-5: oklch(0.6 0.2 60);

  --sidebar-primary: oklch(0.75 0.2 55);
  --sidebar-accent:  oklch(0.18 0.06 50);
  --sidebar-border:  oklch(0.3 0.1 55);
  --sidebar-ring:    oklch(0.75 0.2 55);
}
```

---

### `src/themes/athena.css`

```css
[data-theme="athena"] {
  --primary:            oklch(0.85 0.18 90);
  --primary-foreground: oklch(0.1 0 0);
  --secondary:          oklch(0.18 0.05 85);
  --secondary-foreground: oklch(0.95 0 0);
  --muted:              oklch(0.15 0.03 85);
  --muted-foreground:   oklch(0.65 0 0);
  --accent:             oklch(0.8 0.15 90);
  --accent-foreground:  oklch(0.1 0 0);
  --border:             oklch(0.35 0.1 90);
  --input:              oklch(0.2 0.06 90);
  --ring:               oklch(0.85 0.18 90);
  --glow:               oklch(0.85 0.18 90);
  --glow-muted:         oklch(0.55 0.12 90);
  --grid-line:          oklch(0.65 0.16 90 / 0.07);

  --chart-1: oklch(0.85 0.18 90);
  --chart-2: oklch(0.8 0.15 100);
  --chart-3: oklch(0.75 0.12 80);
  --chart-4: oklch(0.7 0.18 95);
  --chart-5: oklch(0.9 0.1 85);

  --sidebar-primary: oklch(0.85 0.18 90);
  --sidebar-accent:  oklch(0.18 0.05 85);
  --sidebar-border:  oklch(0.35 0.1 90);
  --sidebar-ring:    oklch(0.85 0.18 90);
}
```

---

### `src/themes/tron.css`

```css
[data-theme="tron"] {
  --radius: 0.5rem;

  --background:         oklch(0.06 0.02 250);
  --foreground:         oklch(0.95 0.02 220);
  --primary:            oklch(0.75 0.18 195);
  --primary-foreground: oklch(0.1 0 0);
  --secondary:          oklch(0.18 0.05 200);
  --secondary-foreground: oklch(0.95 0 0);
  --muted:              oklch(0.15 0.03 200);
  --muted-foreground:   oklch(0.65 0 0);
  --accent:             oklch(0.7 0.15 195);
  --accent-foreground:  oklch(0.1 0 0);
  --card:               oklch(0.1 0.02 250);
  --card-foreground:    oklch(0.92 0.02 220);
  --popover:            oklch(0.1 0.02 250);
  --popover-foreground: oklch(0.92 0.02 220);
  --destructive:        oklch(0.55 0.25 30);
  --border:             oklch(0.3 0.1 195);
  --input:              oklch(0.2 0.06 195);
  --ring:               oklch(0.75 0.18 195);
  --glow:               oklch(0.75 0.18 195);
  --glow-muted:         oklch(0.5 0.12 195);
  --grid-line:          oklch(0.55 0.16 195 / 0.09);

  --chart-1: oklch(0.75 0.18 195);
  --chart-2: oklch(0.65 0.15 210);
  --chart-3: oklch(0.7 0.12 180);
  --chart-4: oklch(0.6 0.18 200);
  --chart-5: oklch(0.8 0.1 190);

  --sidebar:                    oklch(0.08 0.02 250);
  --sidebar-foreground:         oklch(0.92 0.02 220);
  --sidebar-primary:            oklch(0.75 0.18 195);
  --sidebar-primary-foreground: oklch(0.1 0 0);
  --sidebar-accent:             oklch(0.18 0.05 200);
  --sidebar-accent-foreground:  oklch(0.95 0 0);
  --sidebar-border:             oklch(0.3 0.1 195);
  --sidebar-ring:               oklch(0.75 0.18 195);
}
```

---

### `src/themes/aphrodite.css`

```css
[data-theme="aphrodite"] {
  --primary:            oklch(0.7 0.22 340);
  --primary-foreground: oklch(0.98 0 0);
  --secondary:          oklch(0.18 0.06 340);
  --secondary-foreground: oklch(0.95 0 0);
  --muted:              oklch(0.15 0.04 340);
  --muted-foreground:   oklch(0.65 0 0);
  --accent:             oklch(0.65 0.2 340);
  --accent-foreground:  oklch(0.98 0 0);
  --border:             oklch(0.3 0.1 340);
  --input:              oklch(0.2 0.06 340);
  --ring:               oklch(0.7 0.22 340);
  --glow:               oklch(0.7 0.22 340);
  --glow-muted:         oklch(0.5 0.15 340);
  --grid-line:          oklch(0.55 0.2 340 / 0.08);

  --chart-1: oklch(0.7 0.22 340);
  --chart-2: oklch(0.65 0.2 350);
  --chart-3: oklch(0.75 0.18 330);
  --chart-4: oklch(0.6 0.22 345);
  --chart-5: oklch(0.8 0.15 335);

  --sidebar-primary: oklch(0.7 0.22 340);
  --sidebar-accent:  oklch(0.18 0.06 340);
  --sidebar-border:  oklch(0.3 0.1 340);
  --sidebar-ring:    oklch(0.7 0.22 340);
}
```

---

### Notas sobre los tokens compartidos

Los temas **ares, poseidon, clu, athena, aphrodite** no redeclaran `--background`, `--foreground`, `--card` ni `--popover` — heredan los valores del tema `gridcn` (`:root`). Solo `tron` y `gridcn` los definen explícitamente porque tienen fondos ligeramente distintos.

Si necesitas que un tema tenga su propio fondo diferenciado, agrégalo en su archivo CSS correspondiente.

---

### `themes.ts` — Metadatos de temas

```ts
export type ThemeName =
  | 'gridcn' | 'ares' | 'poseidon'
  | 'clu' | 'athena' | 'tron' | 'aphrodite'

export type ThemeMeta = {
  name: ThemeName
  label: string
  color: string        // Color representativo en hex para el selector visual
  description: string
}

export const themes: ThemeMeta[] = [
  { name: 'gridcn',    label: 'Gridcn',    color: '#4f8ef7', description: 'Default · azul sobre negro' },
  { name: 'ares',      label: 'Ares',      color: '#e05a2b', description: 'Rojo sangre · agresivo' },
  { name: 'poseidon',  label: 'Poseidon',  color: '#3d6fcf', description: 'Azul oceánico · profundo' },
  { name: 'clu',       label: 'Clu',       color: '#e8a020', description: 'Naranja neón · TRON legacy' },
  { name: 'athena',    label: 'Athena',    color: '#d4c44a', description: 'Dorado · sabio y sobrio' },
  { name: 'tron',      label: 'Tron',      color: '#3dd8d8', description: 'Cian eléctrico · grid puro' },
  { name: 'aphrodite', label: 'Aphrodite', color: '#d45fa0', description: 'Rosa y lila · elegante' },
]
```

---

### `useTheme.ts` — Hook de tema

```ts
import { useState, useEffect } from 'react'
import type { ThemeName } from './themes'

const STORAGE_KEY = 'portfolio-theme'
const DEFAULT_THEME: ThemeName = 'gridcn'

export function useTheme() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    return (localStorage.getItem(STORAGE_KEY) as ThemeName) ?? DEFAULT_THEME
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return { theme, setTheme }
}
```

---

### `ThemeSelector.tsx` — Componente visual

Círculos coloreados por tema con tooltip. Click aplica el tema inmediatamente.

```tsx
import { themes } from '@/themes/themes'
import type { ThemeName } from '@/themes/themes'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

type Props = {
  current: ThemeName
  onChange: (theme: ThemeName) => void
}

export function ThemeSelector({ current, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      {themes.map((t) => (
        <Tooltip key={t.name}>
          <TooltipTrigger asChild>
            <button
              onClick={() => onChange(t.name)}
              aria-label={t.label}
              className={`
                w-5 h-5 rounded-full border-2 transition-transform hover:scale-110
                ${current === t.name ? 'border-white scale-110 ring-2 ring-white/30' : 'border-transparent'}
              `}
              style={{ backgroundColor: t.color }}
            />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p className="text-xs font-medium">{t.label}</p>
            <p className="text-xs text-muted-foreground">{t.description}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
```

> El `ThemeSelector` vive en la **Navbar** — inline en desktop, dentro del `<Sheet>` en mobile.

---

## Secciones

### 1. About

Sección de presentación personal con links de contacto.

**Contenido:**
- Avatar / foto de perfil
- Nombre + título (ej. "Full Stack Developer")
- Párrafo de descripción / bio
- Links de contacto con iconos:

| Link | Icono | Comportamiento |
|---|---|---|
| WhatsApp | `IconBrandWhatsapp` | `href="https://wa.me/XXXXXXX"` target blank |
| Correo | `IconMail` | `href="mailto:tu@email.com"` |
| LinkedIn | `IconBrandLinkedin` | `href="https://linkedin.com/in/..."` target blank |

```tsx
<section id="about">
  <Avatar src="/images/avatar.jpg" />
  <h1>{t('about.greeting')} <span className="text-primary">{t('about.name')}</span></h1>
  <p className="text-muted-foreground">{t('about.bio')}</p>
  <div className="flex gap-4 mt-6">
    <ContactLink href="https://wa.me/..." icon={<IconBrandWhatsapp />} label="WhatsApp" />
    <ContactLink href="mailto:..." icon={<IconMail />} label="Email" />
    <ContactLink href="https://linkedin.com/in/..." icon={<IconBrandLinkedin />} label="LinkedIn" />
  </div>
</section>
```

**`ContactLink`** — botón con icono + label, estilo `variant="outline"` de shadcn, aplica `--glow` en hover con box-shadow usando la variable del tema activo.

---

### 2. Proyectos

Grid de cards con filtro por tecnología.

**Estructura de datos — `projects.ts`:**

```ts
export type TechTag =
  | 'React' | 'Next.js' | 'Shadcn' | 'Python'
  | 'FastAPI' | 'CSS' | 'NestJS' | 'Zustand'
  | 'Nuqs' | 'Tailwind' | 'MySQL' | 'PostgreSQL'
  | 'Prisma' | 'Drizzle' | 'SQL Server' | 'TypeScript'

export type Project = {
  id: string
  title: string
  descriptionKey: string   // clave i18n → projects.items.{id}.description
  images: string[]         // rutas a /public/images/projects/
  liveUrl?: string         // opcional — omitir si no existe
  githubUrl?: string       // opcional — omitir si no existe
  tags: TechTag[]
}

export const projects: Project[] = [
  // Agregar proyectos aquí
]
```

**TechFilter — `<Select>` de shadcn:**

El filtro vive directamente en `Projects.tsx` con `useState`:

```tsx
const [activeFilter, setActiveFilter] = useState<TechTag | 'all'>('all')

// ...

// Opciones: "Todas" + lista de tags únicos de todos los proyectos
<Select onValueChange={(val) => setActiveFilter(val as TechTag | 'all')}>
  <SelectTrigger className="w-52">
    <SelectValue placeholder={t('projects.filter_placeholder')} />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">{t('projects.all')}</SelectItem>
    {uniqueTags.map(tag => (
      <SelectItem key={tag} value={tag}>{tag}</SelectItem>
    ))}
  </SelectContent>
</Select>
```

**ProjectCard — estructura visual:**

```
┌──────────────────────────────────┐
│                                  │
│   [◀]   imagen 1 / 2 / 3  [▶]   │  ← embla-carousel
│                                  │
├──────────────────────────────────┤
│  Nombre del Proyecto             │
│  Descripción breve...            │
│                                  │
│  [React] [TypeScript] [Prisma]   │  ← <Badge> shadcn
│                                  │
│  [🌐 Ver proyecto]  [⌥ GitHub]   │  ← solo si existen
└──────────────────────────────────┘
```

- Card usa `background: var(--card)` y `border: 1px solid var(--border)`
- Hover: `box-shadow: 0 0 20px var(--glow)` — el glow cambia con el tema
- Si `liveUrl` es `undefined` → botón "Ver proyecto" no se renderiza
- Si `githubUrl` es `undefined` → botón "GitHub" no se renderiza

**Componente:** `<Projects />` → contiene `<TechFilter />` + grid de `<ProjectCard />`

---

### 3. Stack Tecnológico

Grid visual de tecnologías agrupadas por categoría.

| Categoría | Tecnologías |
|---|---|
| Frontend | React, Next.js, TypeScript, Tailwind, CSS, Shadcn, Zustand, Nuqs |
| Backend | Python, FastAPI, NestJS |
| Bases de Datos | MySQL, PostgreSQL, SQL Server |
| ORM / Query | Prisma, Drizzle |

**Diseño:**
- Cada ítem: icono de `@tabler/icons-react` + nombre
- Grid: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4` por categoría
- Hover: leve elevación + `color: var(--primary)` en el icono
- El título de cada categoría usa `text-muted-foreground` con separador sutil

---

### 4. Footer

```
┌───────────────────────────────────────────────────────────┐
│  [Nombre]                    [WA icon] [Mail] [LinkedIn]  │
│                                                           │
│  © 2025  ·  {t('footer.built')}                          │
└───────────────────────────────────────────────────────────┘
```

- Año dinámico: `new Date().getFullYear()`
- Iconos de contacto solamente (sin label)
- Separado del contenido con `border-top: 1px solid var(--border)`

---

## Navbar

```
┌──────────────────────────────────────────────────────────────┐
│  [Nombre]      Sobre mí   Proyectos   Stack    ES|EN  [🎨]  │
└──────────────────────────────────────────────────────────────┘
```

- **Sticky** con `backdrop-blur` y `border-bottom: 1px solid var(--border)`
- `🎨` abre el `ThemeSelector` (inline en desktop, dentro del Sheet en mobile)
- `ES | EN` toggle — cambia idioma con i18next
- **Mobile:** hamburger abre `<Sheet>` con nav vertical + selector idioma + `ThemeSelector`
- Los links hacen scroll suave a las secciones (`#about`, `#projects`, `#stack`)

---

## i18n — Internacionalización

```ts
// src/i18n/index.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './es.json'
import en from './en.json'

i18n.use(initReactI18next).init({
  resources: { es: { translation: es }, en: { translation: en } },
  lng: localStorage.getItem('portfolio-lang') ?? 'es',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
```

**`es.json`:**

```json
{
  "nav": {
    "about": "Sobre mí",
    "projects": "Proyectos",
    "stack": "Stack"
  },
  "about": {
    "greeting": "Hola, soy",
    "name": "Tu Nombre",
    "bio": "Desarrollador Full Stack apasionado por construir productos digitales...",
    "contact": "Contacto"
  },
  "projects": {
    "title": "Proyectos",
    "filter_placeholder": "Filtrar por tecnología",
    "live": "Ver proyecto",
    "github": "GitHub",
    "all": "Todas"
  },
  "stack": {
    "title": "Mi Stack",
    "frontend": "Frontend",
    "backend": "Backend",
    "database": "Bases de Datos",
    "orm": "ORM / Query"
  },
  "footer": {
    "built": "Hecho con React + shadcn"
  }
}
```

**`en.json`:** misma estructura en inglés.

**Toggle de idioma en Navbar:**

```tsx
const { i18n } = useTranslation()
const toggleLang = () => {
  const next = i18n.language === 'es' ? 'en' : 'es'
  i18n.changeLanguage(next)
  localStorage.setItem('portfolio-lang', next)
}
```

---

## Checklist de Desarrollo

- [ ] Setup inicial (Vite + React + TS + Tailwind + shadcn) con pnpm
- [ ] Crear `src/themes/gridcn.css` con tokens base (`:root`)
- [ ] Crear `src/themes/ares.css`
- [ ] Crear `src/themes/poseidon.css`
- [ ] Crear `src/themes/clu.css`
- [ ] Crear `src/themes/athena.css`
- [ ] Crear `src/themes/tron.css`
- [ ] Crear `src/themes/aphrodite.css`
- [ ] Crear `src/themes/index.css` que importa todos los archivos de tema
- [ ] `globals.css` importa `themes/index.css` + define fondo grid con `--grid-line`
- [ ] `useTheme.ts` + persistencia en `localStorage`
- [ ] `ThemeSelector.tsx` con círculos de color + tooltip
- [ ] Navbar sticky con blur, toggle idioma y ThemeSelector
- [ ] i18n setup (ES/EN) + toggle en Navbar
- [ ] Sección About con avatar + links de contacto (icono + label)
- [ ] `ContactLink` con glow hover reactivo al tema
- [ ] Data model de proyectos (`projects.ts`)
- [ ] `TechFilter` Select + `useState` para filtrado en `Projects.tsx`
- [ ] `ProjectCarousel` con embla
- [ ] `ProjectCard` con glow hover + links opcionales + badges
- [ ] Sección TechStack con grid por categorías + hover primario
- [ ] Footer con iconos y año dinámico
- [ ] Responsive completo (mobile first)
- [ ] Mobile Sheet menu con ThemeSelector + lang toggle
- [ ] Animaciones de entrada opcionales (scroll reveal)

---

## Notas Finales

- `@tabler/icons-react` cubre todos los iconos necesarios: UI general (`IconMail`, `IconMenu2`, `IconExternalLink`) y marcas (`IconBrandWhatsapp`, `IconBrandLinkedin`, `IconBrandGithub`, `IconBrandReact`, `IconBrandNextjs`, `IconBrandPython`, etc.)
- El token `--glow` es clave para que los hovers de cards y botones se adapten al tema automáticamente — usarlo en `box-shadow` y `text-shadow` donde aplique
- Las descripciones de proyectos pueden ser claves i18n (`projects.items.{id}.description`) para tenerlas en ambos idiomas
- Para el Sheet mobile de shadcn, incluir `ThemeSelector` y el toggle ES|EN directamente en el panel lateral