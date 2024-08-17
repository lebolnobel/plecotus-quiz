import * as React from 'react';
import useLoadedImage from '../../../hooks/useLoadedImage.ts';
import { GoImage, GoX } from 'react-icons/go';

type ZoomImageType = {
  isOpen: boolean;
  url: string;
  onClose: () => void;
};

const ZoomImage = (props: ZoomImageType): React.ReactNode => {
  const { url, isOpen, onClose } = props;

  const { imgEl, loaded } = useLoadedImage();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen) {
        if (event.key === 'Escape') {
          event.preventDefault();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
      onClick={handleBackdropClick}
    >
      <div
        id="progress-modal"
        aria-hidden="true"
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="relative px-2 py-2 md:px-12 md:py-0 max-h-[100svh] w-full max-w-screen-lg overflow-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              role="close"
              aria-label="close"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <GoX role="presentation" size="24px" />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4">
              <div className="flex flex-row items-center text-left">
                <div className="text-2xl pr-4">
                  <GoImage role="presentation" size="64px" />
                </div>
                <div>
                  <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
                    A vous de jouer !
                  </h3>

                  <p className="text-sm text-gray-400">
                    Trouver l'espèce qui se cache derrière cette image
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <img
                  src={url}
                  ref={imgEl}
                  alt={"Trouver l'espèce qui se cache derrière cette image"}
                  title={"Trouver l'espèce qui se cache derrière cette image"}
                  className={`mx-auto rounded-lg ${loaded ? '' : 'blurred-img'} w-full h-auto object-contain rounded-lg transition-all`}
                  loading="lazy"
                  role="none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomImage;
