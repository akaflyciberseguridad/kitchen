# 📁 Estructura del Proyecto - Blog de Recetas

## 🎯 Organización de Carpetas

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Estilos globales
│   ├── layout.js          # Layout principal
│   └── page.js            # Página principal
├── components/            # Componentes reutilizables
│   ├── Recipe/           # Componentes relacionados con recetas
│   └── Layout/           # Componentes de layout (Header, Footer, etc.)
├── data/                 # Datos hardcodeados (recetas)
└── styles/               # Estilos adicionales y CSS Modules

public/
├── assets/               # Recursos estáticos organizados
│   └── images/
│       └── recipes/      # Imágenes de recetas
└── (archivos de Next.js)
```

## 🏗️ Convenciones

- **Componentes**: PascalCase (ej: `RecipeCard.js`)
- **Archivos CSS**: kebab-case (ej: `recipe-card.module.css`)
- **Carpetas**: PascalCase para componentes, camelCase para otros
- **Commits**: Tipo descriptivo (ej: `feat: crear componente RecipeCard`)

## 📝 Buenas Prácticas Aplicadas

- ✅ HTML Semántico (nav, main, article, etc.)
- ✅ CSS Modules para evitar colisiones
- ✅ Estructura lógica y escalable
- ✅ Separación de responsabilidades
