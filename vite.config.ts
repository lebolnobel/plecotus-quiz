import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  manifest: {
    name: 'Plecotus quiz',
    short_name: 'Plecotus quiz',
    description: 'Plecotus quiz : recensements hivernaux des Chauves-souris',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: '/assets/img/plecotus/logo.svg',
        sizes: '512x512',
      },
      {
        src: '/assets/img/plecotus/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/assets/img/plecotus/logo.png',
        sizes: '100x100',
        type: 'image/png',
        purpose: 'apple',
      },
      {
        src: '/assets/img/plecotus/logo.png',
        sizes: '512x512',
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  server: {
    port: 5001,
  },
});
