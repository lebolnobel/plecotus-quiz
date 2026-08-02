/* eslint-disable import/no-unresolved */
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    showPwaUpdateBanner();
  },
  onOfflineReady() {
    console.log('Application prête à fonctionner hors-ligne.');
  },
});

export default updateSW;

export function showPwaUpdateBanner() {
  try {
    if (typeof document === 'undefined') return;
    if (document.getElementById('pwa-update-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'pwa-update-banner';
    banner.style.position = 'fixed';
    banner.style.left = '0px';
    banner.style.bottom = '0px';
    banner.style.zIndex = '100000';
    banner.style.padding = '12px 14px';
    banner.style.background = 'rgba(0,0,0,0.85)';
    banner.style.color = 'white';
    banner.style.width = '100%';
    banner.style.textAlign = 'right';
    banner.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
    banner.style.fontFamily = 'sans-serif';
    banner.style.fontSize = '14px';
    banner.innerText = 'Nouvelle version disponible.';

    const btnUpdate = document.createElement('button');
    btnUpdate.innerText = 'Mettre à jour';
    btnUpdate.style.marginLeft = '8px';
    btnUpdate.style.padding = '6px 8px';
    btnUpdate.style.border = 'none';
    btnUpdate.style.borderRadius = '6px';
    btnUpdate.style.cursor = 'pointer';
    btnUpdate.style.background = '#10b981';
    btnUpdate.style.color = 'white';

    const btnLater = document.createElement('button');
    btnLater.innerText = 'Plus tard';
    btnLater.style.marginLeft = '8px';
    btnLater.style.padding = '6px 8px';
    btnLater.style.border = 'none';
    btnLater.style.borderRadius = '6px';
    btnLater.style.cursor = 'pointer';
    btnLater.style.background = '#374151';
    btnLater.style.color = 'white';

    banner.appendChild(btnUpdate);
    banner.appendChild(btnLater);

    const removeBanner = () => {
      try {
        banner.remove();
      } catch (e) {
        // ignore
      }
    };

    btnLater.addEventListener('click', () => {
      console.log('Mise à jour reportée.');
      removeBanner();
    });

    btnUpdate.addEventListener('click', () => {
      console.log("Mise à jour de l'application...");
      void updateSW(true)
        .catch(() => {
          void location.reload();
        })
        .finally(() => {
          removeBanner();
        });
    });

    document.body.appendChild(banner);
  } catch (err) {
    // ignore
  }
}

export async function unregisterAllServiceWorkers() {
  if ('serviceWorker' in navigator) {
    try {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
      console.log('Service workers désinscrits.');
    } catch (err) {
      console.warn('Erreur lors de la désinscription des service workers', err);
    }
  }
}

if (import.meta.env.DEV) {
  // eslint-disable-next-line no-void
  void unregisterAllServiceWorkers();
}
