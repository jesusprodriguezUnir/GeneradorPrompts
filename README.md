# 🎯 Prompt Maestro

**Catálogo interactivo de prompts técnicos para arquitectos de software.**

Explora categorías de tecnología, visualiza prompts pre-diseñados con sus stacks tecnológicos recomendados y cópialos al portapapeles con un solo clic.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Características

- 📂 **11 categorías técnicas** - Backend, Data Engineering, IA, Full-Stack, Ciberseguridad, y más
- 📋 **Copiar al portapapeles** - Un clic para copiar prompts completos
- 🎨 **UI moderna** - Diseño glassmorphism con animaciones suaves
- 📱 **Responsive** - Funciona en desktop y móvil
- ⚡ **SPA estática** - Sin backend, deploy en cualquier hosting estático

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Hero.jsx         # Sección principal
│   ├── CategoryCard.jsx # Tarjeta de categoría
│   ├── Modal.jsx        # Modal con prompts y tech stack
│   └── ErrorBoundary.jsx
├── data/
│   └── categories.js    # Datos de categorías y prompts
├── styles/
│   └── index.css        # Estilos globales (CSS Variables)
├── App.jsx              # Componente raíz
└── main.jsx             # Entry point
```

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|------------|-----|
| React 19 | UI Components |
| Vite 7 | Build & Dev Server |
| CSS Variables | Theming |
| ESLint 9 | Linting |

## 📝 Agregar Nuevas Categorías

Edita `src/data/categories.js` siguiendo esta estructura:

```javascript
{
  id: 'mi-categoria',
  name: 'Nombre de la Categoría',
  icon: '🔥',
  subcategories: [{
    id: 'mi-subcategoria',
    name: 'Nombre',
    prompt: `Tu prompt aquí...`,
    tech: {
      languages: 'Python, TypeScript',
      frameworks: 'FastAPI, React',
      architecture: 'Clean Architecture',
      database: 'PostgreSQL',
      devops: 'Docker, K8s',
      security: 'OAuth2, JWT'
    }
  }]
}
```

## 🎨 Personalización

Los colores y estilos se configuran en `src/styles/index.css`:

```css
:root {
  --bg-dark: #0f172a;
  --accent-primary: #3b82f6;
  --accent-secondary: #8b5cf6;
}
```

## 📄 Licencia

MIT © 2025
