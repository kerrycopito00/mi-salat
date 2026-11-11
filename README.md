# Mi Salat

Proyecto recuperado del archivo webarchive actualizado que has adjuntado.

## Contenido

- `src/App.tsx`: código principal de la aplicación.
- `src/index.css`: estilos.
- `src/main.tsx`: entrada de React.
- `src/components/error-boundary.tsx`: control de errores.
- `index.html`: documento HTML.
- `package.json`: dependencias y comandos.
- `vite.config.ts`: configuración de Vite.
- `public/service-worker.js`: service worker para la parte de notificaciones.
- `.github/workflows/deploy.yml`: publicación automática en GitHub Pages.

## Publicar gratis en GitHub Pages

1. En GitHub, crea un repositorio público llamado exactamente `mi-salat`.
2. Descomprime este ZIP y sube **todo el contenido** al repositorio, incluida la carpeta oculta `.github`.
3. Comprueba que `package.json`, `index.html`, `src/`, `public/` y `vite.config.ts` estén en la raíz del repositorio, no dentro de otra carpeta.
4. En GitHub abre **Settings → Pages**.
5. En **Build and deployment → Source**, selecciona **GitHub Actions**.
6. Entra en la pestaña **Actions**. Se ejecutará el flujo «Publicar Mi Salat en GitHub Pages».
7. Cuando termine en verde, la web estará en `https://TU-USUARIO.github.io/mi-salat/`.

Si llamas al repositorio de otra manera, cambia `/mi-salat/` en `vite.config.ts` por `/NOMBRE-DEL-REPOSITORIO/` antes de subirlo.

## Probarlo en local o en Replit

- `npm install`: instala las dependencias.
- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: comprueba y compila la web para producción.

## Importante sobre las notificaciones

Los navegadores móviles limitan las notificaciones y los procesos en segundo plano. En iPhone, las notificaciones web pueden requerir añadir la web a la pantalla de inicio y conceder permisos; además, el navegador puede suspender temporizadores. No se debe asumir que los avisos funcionarán con la misma fiabilidad que una app nativa.

El archivo webarchive conserva el código que el navegador recibió en esa sesión. Se han reconstruido los fuentes originales disponibles y la configuración de Vite. Antes de dar la web por definitiva, ejecuta la compilación y prueba ubicación, horarios, guía y avisos en el iPhone.
