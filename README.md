# ag-ui-demo

Interfaz de ejemplo construida con [ag-ui-protocol](https://www.npmjs.com/package/ag-ui-protocol), desarrollada con Vite, React, TypeScript y TailwindCSS. Este proyecto demuestra cómo integrar una interfaz moderna con la API de OpenAI mediante un formulario de entrada simple.

## ✨ Características

- ⚛️ React + TypeScript
- ⚡️ Vite para desarrollo rápido
- 💬 Comunicación con la API de OpenAI (`chat/completions`)
- 🎨 Estilizado con TailwindCSS
- 🔐 Soporte para `.env.local` para manejar la API key de forma segura

## 📦 Instalación

```bash
git clone https://github.com/jeastman19/ag-ui-demo.git
cd ag-ui-demo
npm install
```

## 🚀 Uso en desarrollo

Primero, crea un archivo `.env.local` basado en `.env.example` y agrega tu API key de OpenAI:

```env
VITE_OPENAI_API_KEY=tu_clave_aquí
```

Luego inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## 🧪 Scripts disponibles

- `npm run dev` — Ejecuta el servidor de desarrollo
- `npm run build` — Compila la aplicación para producción
- `npm run preview` — Previsualiza la build de producción localmente

## 📁 Estructura del proyecto

```
ag-ui-demo/
├── public/              # Archivos públicos
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales (incluye Tailwind)
├── .env.example         # Ejemplo de variables de entorno
├── tailwind.config.js   # Configuración de Tailwind
└── vite.config.ts       # Configuración de Vite
```

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](./LICENSE) para más detalles.

---

Desarrollado por [Jorge Eastman](https://github.com/jeastman19) ✨
