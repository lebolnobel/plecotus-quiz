import * as React from 'react';
import { GoImage, GoX } from 'react-icons/go';
import { FormattedMessage, useIntl } from 'react-intl';

type ZoomImageType = {
  isOpen: boolean;
  url: string;
  onClose: () => void;
};

const ZoomImage = (props: ZoomImageType): React.ReactNode => {
  const { url, isOpen, onClose } = props;

  const ref = React.useRef<HTMLDivElement | null>(null);

  const intl = useIntl();

  React.useEffect(() => {
    const handleBackdropClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event?.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    isOpen && document.addEventListener('mousedown', handleBackdropClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleBackdropClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 text-base">
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          ref={ref}
          role="dialog"
          className="relative mx-2 my-2 md:mx-12 md:py-0 max-h-[90svh] w-full max-w-screen-lg overflow-auto"
        >
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              role="button"
              aria-label="close"
              ref={(input) => input && input.focus()}
              onClick={onClose}
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-natagora/40"
            >
              <GoX role="presentation" size="24" />
              <span className="sr-only">
                <FormattedMessage id="action.closePopup" />
              </span>
            </button>
            <div className="p-4">
              <div className="flex flex-row items-center text-left">
                <div className="text-2xl pr-4">
                  <GoImage role="presentation" size="64" />
                </div>
                <div>
                  <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
                    <FormattedMessage id="image.play" />
                  </h3>

                  <p className="text-sm text-gray-400">
                    <FormattedMessage id="image.playDetail" />
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <img
                  src={url}
                  alt={intl.formatMessage({ id: 'image.playDetail' })}
                  title={intl.formatMessage({ id: 'image.playDetail' })}
                  className={`mx-auto rounded-lg w-full h-auto object-contain rounded-lg transition-all`}
                  role="img"
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
