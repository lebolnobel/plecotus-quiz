import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const pwaOpt: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  injectRegister: 'auto',
  includeAssets: [
    'favicon.ico',
    'robots.txt',
    'apple-touch-icon.png',
    'logo.png',
    'maskable-logo.png',
  ],
  workbox: {
    cleanupOutdatedCaches: true,
    skipWaiting: true,
    clientsClaim: true,
    globPatterns: ['**/*.{js,css,html,png,jpg,svg,ico,json}'],
    additionalManifestEntries: [
      {
        url: 'https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@400;500;600;700;800&display=swap',
        revision: 'v1',
      },
    ],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*$/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'google-fonts-stylesheets',
          expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 30 },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-webfonts',
          expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'image-cache',
          expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
        },
      },
    ],
  },
  devOptions: {
    enabled: false,
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(pwaOpt)],
  server: {
    port: 5001,
  },
});
