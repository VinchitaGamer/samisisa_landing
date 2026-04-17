# Sami Sisa Expeditions - Documentación del Proyecto Frontend

## Resumen Ejecutivo
Plataforma web moderna para agencia de turismo sudamericana. Stack: React 18 + Next.js + Tailwind CSS. Paleta obligatoria: Rojo (#EF4444), Negro (#1F2937), Blanco (#FFFFFF), Naranja (#FF8C42). Soporte multi-idioma (ES/EN).

---

## 1. ARQUITECTURA DE COMPONENTES

### Jerarquía de Componentes
```
App (root)
├── Layout
│   ├── Header (con navbar y multi-idioma)
│   ├── Navigation (responsive, mobile menu)
│   └── Footer
├── Pages
│   ├── HomePage
│   │   ├── HeroBanner
│   │   ├── FeaturedPackages
│   │   ├── Testimonials
│   │   └── CTA Section
│   ├── NationalPackages
│   ├── InternationalPackages
│   ├── Flights
│   ├── TravelInsurance
│   ├── Concerts
│   └── About
└── Shared
    ├── PackageCard (reutilizable)
    ├── ImageCarousel
    ├── PriceDisplay
    └── LanguageSwitcher
```

### Componentes Core (Paso 1)
- **Header**: Logo, nav items, language selector
- **Footer**: Links, social, contact info
- **HeroBanner**: Full-width image, headline, CTA button

### Componentes de Contenido (Paso 2)
- **PackageCard**: Imagen, título, descripción, precio, rating
- **PackageGrid**: Lista responsiva de tarjetas

### Componentes de Conversión (Paso 3)
- **CTAButton**: Llamadas a acción consistentes
- **PriceComparison**: Tablas de precios

---

## 2. DIRECTRICES DE DISEÑO

### Paleta de Colores (OBLIGATORIA)
| Rol | Color | Hex | Tailwind |
|-----|-------|-----|----------|
| Primario | Rojo | #EF4444 | `bg-red-500` |
| Secundario | Naranja | #FF8C42 | `bg-orange-500` |
| Neutral Oscuro | Negro | #1F2937 | `bg-gray-900` |
| Background | Blanco | #FFFFFF | `bg-white` |

### Tipografía
- **Headings**: Font Family `Inter` o `Geist` (moderno), weight 700-800
- **Body**: Font Family `Inter` o `Geist`, weight 400-500
- **Sizes**: h1 (36px), h2 (28px), h3 (22px), p (16px)

### Espaciado (Tailwind)
- Gaps: `gap-4`, `gap-6`, `gap-8`
- Padding: `p-4`, `p-6`, `p-8`
- Margins: `m-4`, `m-6`, `m-8`

### Breakpoints
- Mobile: 320px - 640px (`sm`)
- Tablet: 641px - 1024px (`md`)
- Desktop: 1025px+ (`lg`)

### Imágenes
- Fuente: Unsplash API vía MCP `fetch_unsplash_images`
- Formato: JPG/WebP optimizado
- Aspect Ratio: 16:9 (hero), 4:3 (cards), 1:1 (avatars)
- Lazy loading: Sí, con placeholder blur

---

## 3. MCP TOOLS CONFIGURADAS

### fetch_unsplash_images
```json
{
  "name": "fetch_unsplash_images",
  "params": ["search_query", "count", "orientation"],
  "returns": [{ "id", "url", "photographer", "alt_text" }]
}
```
**Uso en componentes**: Inyectar URLs en `<Image>` (Next.js) o `<img>` con atributo `loading="lazy"`.

---

## 4. ESTADO DEL DESARROLLO

### Paso 0: Configuración Inicial ✅
- [x] Paleta de colores definida
- [x] Arquitectura de componentes diseñada
- [x] MCP `fetch_unsplash_images` documentado
- [x] CLAUDE.md inicializado
- [x] Patrón "Evaluator-Optimizer" establecido

### Paso 1: Header, Footer & Hero Banner ✅
- [x] Componente `Header` (logo, nav, language selector)
- [x] Componente `Footer` (links, social, copyright)
- [x] Componente `HeroBanner` (imagen full-width, texto, CTA)
- [x] Integración de imágenes Unsplash
- [x] Responsividad móvil validada
- [x] Auto-evaluación completada

### Paso 2: Páginas de Paquetes ✅
- [x] `PackageCard` component
- [x] `NationalPackages` page
- [x] `InternationalPackages` page
- [x] Filtros y búsqueda (básicos)
- [x] Galería de imágenes
- [x] Navegación funcional integrada

### Paso 3: Funcionalidades Transversales ✅
- [x] Página de Pasajes Aéreos
- [x] Página de Seguro de Viajes
- [x] Página de Conciertos
- [x] Página "Nosotros"
- [x] Sistema de multi-idioma completo (estructura lista)

### Paso 4: Localización, Integración & Pulido ✅
- [x] Componente `About` mejorado con imágenes
- [x] Context API para manejo de idiomas (ES/EN/PT)
- [x] Diccionario de traducciones completo
- [x] Navegación sincronizada entre todas las vistas
- [x] Selector de idioma funcional en Header
- [x] Validación de contraste y responsividad
- [x] Plataforma 100% navegable y funcional

---

## 🎉 PROYECTO COMPLETADO - 100% FUNCIONAL

**Estado Final:** Todos los pasos completados exitosamente.
- ✅ Paso 0: Entorno configurado
- ✅ Paso 1: Header, Footer, Hero Banner
- ✅ Paso 2: Paquetes Nacionales e Internacionales
- ✅ Paso 3: Pasajes, Seguros, Conciertos
- ✅ Paso 4: Localización e Integración

**Características Implementadas:**
- 7 páginas completamente funcionales
- Sistema multi-idioma (ES/EN/PT) con Context API
- Paleta de marca consistente (Rojo, Negro, Blanco, Naranja)
- Diseño Mobile-first y responsive en todos los breakpoints
- Navegación fluida y menú hamburguesa en móvil
- Imágenes de alta calidad desde Unsplash
- Componentes reutilizables y mantenibles
- Sin dependencias externas complejas

**Archivos Generados:**
- Layout.jsx, HeroBanner.jsx, PackageCard.jsx
- NationalPackages.jsx, InternationalPackages.jsx
- Flights.jsx, TravelInsurance.jsx, Concerts.jsx, About.jsx
- LanguageContext.jsx (gestor de estado global)
- index.jsx (punto de entrada con LanguageProvider)

**Próximos pasos (fuera del alcance de este MVP):**
- Deploy en Vercel/Netlify
- Optimización de Performance (Lighthouse)
- Integración de backend para formularios
- Sistema de reservas transaccional
- Análisis y SEO avanzado

---

## 5. CONVENCIONES DE CÓDIGO

### Estructura de Archivos
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   ├── sections/
│   │   ├── HeroBanner.jsx
│   │   ├── FeaturedPackages.jsx
│   │   └── Testimonials.jsx
│   └── shared/
│       ├── PackageCard.jsx
│       ├── Button.jsx
│       └── LanguageSwitcher.jsx
├── pages/
│   ├── index.jsx (Home)
│   ├── packages/
│   │   ├── national.jsx
│   │   └── international.jsx
│   ├── flights.jsx
│   ├── insurance.jsx
│   ├── concerts.jsx
│   └── about.jsx
├── styles/
│   └── globals.css (Tailwind + custom)
├── lib/
│   ├── i18n.js (multi-idioma)
│   └── mcp.js (integración MCP)
└── public/
    └── images/
```

### Naming Conventions
- Componentes: `PascalCase` (Header.jsx)
- Funciones: `camelCase` (fetchImages())
- Constantes: `UPPER_SNAKE_CASE` (PRIMARY_COLOR)
- CSS Classes: lowercase + hyphen (hero-banner)

### Patrón de Componentes React
```jsx
export default function ComponentName({ prop1, prop2 }) {
  // Estado
  const [state, setState] = useState(null);
  
  // Efectos
  useEffect(() => {
    // Lógica
  }, []);
  
  // Render
  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
}
```

---

## 6. CHECKLIST DE EVALUACIÓN (Evaluator-Optimizer Pattern)

Antes de cada artifact, validar:

```
[ ] Colores: ¿Usan solo Rojo, Negro, Blanco, Naranja?
[ ] Responsive: ¿Se ve bien en mobile (320px), tablet (768px), desktop (1200px)?
[ ] Imágenes: ¿URLs reales de Unsplash? ¿No son placeholders?
[ ] Accesibilidad: ¿Alt-text en imágenes? ¿Contraste WCAG AA?
[ ] Performance: ¿Lazy loading? ¿CSS optimizado?
[ ] Tipografía: ¿Usa Inter/Geist? ¿Jerarquía clara?
[ ] Espaciado: ¿Usa escala de 4px (Tailwind)?
[ ] Mobile-first: ¿Se diseña mobile primero?
```

---

## 7. RESOURCES & REFERENCES

- **Unsplash API**: https://unsplash.com/developers
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Next.js Image**: https://nextjs.org/docs/basic-features/image-optimization
- **React Hooks**: https://react.dev/reference/react
- **i18n Library**: `react-i18next` o `next-intl`

---

## 8. NOTAS PARA FUTURAS ITERACIONES

- Guardar URLs de imágenes usadas para reutilización
- Documentar decisiones de diseño que se alejen de la norma
- Mantener consistencia en componentes reutilizables
- Registrar feedback del usuario en cada hito
