# Copilot Instructions - Prompt Maestro

## Descripción del Proyecto

**Prompt Maestro** es una aplicación React + Vite que sirve como catálogo interactivo de prompts técnicos para arquitectos de software. Permite explorar categorías de tecnología y copiar prompts pre-diseñados con sus stacks tecnológicos recomendados.

## Arquitectura Principal

```
src/
├── App.jsx              # Componente raíz, gestión de estado (selectedCategory)
├── main.jsx             # Entry point, importa estilos globales
├── components/          # Componentes funcionales React
│   ├── Hero.jsx         # Presentacional, sin props
│   ├── CategoryCard.jsx # Recibe {category, onClick}
│   ├── Modal.jsx        # Lógica de navegación entre subcategorías + copiar al clipboard
│   └── ErrorBoundary.jsx # Class component para manejo de errores
├── data/
│   └── categories.js    # Fuente única de datos (prompts, tech stacks)
└── styles/
    └── index.css        # Estilos globales con CSS Variables
```

## Convenciones del Proyecto

### Componentes React
- **Funcionales por defecto** - usar hooks (`useState`, etc.)
- **Class components** solo para Error Boundaries
- **Props destructuradas** en la firma de la función: `const Component = ({ prop1, prop2 }) => {}`
- **Exportación default** al final del archivo

### Estructura de Datos (`src/data/categories.js`)
Cada categoría sigue esta estructura obligatoria:
```javascript
{
  id: 'kebab-case',
  name: 'Nombre Descriptivo',
  icon: '🚀',  // Emoji único
  subcategories: [{
    id: 'subcategory-id',
    name: 'Nombre',
    prompt: `Texto del prompt...`,
    tech: {
      languages: '',
      frameworks: '',
      architecture: '',
      database: '',
      devops: '',
      security: ''  // Siempre incluir consideraciones de seguridad
    }
  }]
}
```

### Estilos CSS
- **CSS Variables** definidas en `:root` dentro de `src/index.css`
- Paleta de colores: `--bg-dark`, `--accent-primary`, `--accent-secondary`
- Usar `backdrop-filter: blur()` para efectos glassmorphism
- Animaciones: `fadeIn`, `slideUp` definidas con `@keyframes`

## Comandos de Desarrollo

```bash
npm run dev      # Servidor de desarrollo (Vite)
npm run build    # Build de producción
npm run lint     # ESLint (reglas en eslint.config.js)
npm run preview  # Preview del build de producción
```

## Patrones Importantes

### Flujo de Datos
1. `categories.js` → `App.jsx` (importa datos)
2. `App.jsx` → `CategoryCard` (pasa category + onClick)
3. Click → `setSelectedCategory` → renderiza `Modal`
4. `Modal` maneja internamente `selectedSub` para navegación de subcategorías

### Clipboard API
El patrón de copiar al clipboard está en `Modal.jsx`:
```javascript
navigator.clipboard.writeText(selectedSub.prompt);
setCopied(true);
setTimeout(() => setCopied(false), 2000);
```

### Modal Pattern
- Overlay cierra modal al hacer click (`onClick={onClose}`)
- Contenido previene propagación (`onClick={(e) => e.stopPropagation()}`)

## Proyecto Secundario: hybrid-app-demo

Directorio `hybrid-app-demo/` contiene una app Flutter separada (Clean Architecture). No comparte código con la app React principal. Tiene su propio README con instrucciones de Flutter.

## Notas para AI Agents

- El idioma de la UI es **español**
- Al agregar nuevas categorías, mantener la estructura en `categories.js`
- Los prompts son multi-línea con template literals
- No hay backend - es una SPA estática
- React 19+ - usar las APIs modernas de React
