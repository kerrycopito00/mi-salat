import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react()],
  // El repositorio de GitHub debe llamarse "mi-salat".
  // Si le pones otro nombre, cambia también esta ruta.
  base: '/mi-salat/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
