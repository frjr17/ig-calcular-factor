# Calculadora Económica

Esta es una aplicación web desarrollada con **React**, **TypeScript** y **Vite** que permite calcular distintos tipos de factores financieros e intereses de manera sencilla. El proyecto está pensado para estudios de ingeniería económica y cálculos básicos relacionados con tasas de interés y factores de equivalencia.

## Tecnologías utilizadas

- **React 19** y **Vite 6** para el desarrollo de la interfaz.
- **TypeScript 5** para tipado estático.
- **Tailwind CSS 4** para los estilos.
- **Radix UI** y **react-hook-form** para formularios accesibles.
- **Zod** para validaciones.
- Automatización y despliegue en **GitHub Pages** mediante **GitHub Actions**.

## Características principales

- **Calculadora de factores**: calcula valores de factores económicos comunes (A/P, P/A, P/F, etc.) a partir del interés y número de periodos.
- **Calculadora de interés**: determina diferentes tipos de interés (nominal, efectivo, anual, etc.) en función de los datos proporcionados.
- Interfaz reactiva construida con componentes reutilizables y formularios dinámicos.
- Estilos basados en [Tailwind CSS](https://tailwindcss.com/).
- Despliegue automático a GitHub Pages mediante GitHub Actions.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- [npm](https://www.npmjs.com/) (se instala junto con Node)

## Instalación

Clona este repositorio y descarga las dependencias:

```bash
npm install
```

## Ejecución en desarrollo

Inicia el servidor de desarrollo con recarga en caliente:

```bash
npm run dev
```

Por defecto Vite abre la aplicación en `http://localhost:5173`.

## Construcción y preview

Para generar la versión de producción ejecuta:

```bash
npm run build
```

Y para probar el resultado final localmente:

```bash
npm run preview
```

Los archivos estáticos se generan en la carpeta `dist/`.

## Estructura del proyecto

- `src/` – código fuente de la aplicación.
  - `components/` – componentes reutilizables y campos de formulario.
  - `features/` – vistas principales como las calculadoras de factores e intereses.
  - `lib/` – utilidades, constantes y esquemas de validación.
- `public/` – archivos estáticos y el icono de la aplicación.
- Archivos de configuración: `vite.config.ts`, `tsconfig*.json`, `package.json`, `eslint.config.js`.

## Despliegue

El proyecto incluye un flujo de trabajo de GitHub Actions que construye la aplicación y la publica automáticamente en GitHub Pages cada vez que se hace push a la rama `master`.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo `LICENSE` para más información.

