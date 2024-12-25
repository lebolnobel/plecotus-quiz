import * as React from 'react';
import { GoBug, GoFileCode, GoX } from 'react-icons/go';
import { usePlecotusContext } from '../../hooks/usePlecotusContext';
import { generateFingerprint } from '../../utils/fingerprint';
import { FormattedMessage } from 'react-intl';

const DebugMode = (): React.ReactNode => {
  const { isDebug, toggleDebugMode } = usePlecotusContext();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isDebug) {
        if (event.key === 'Escape') {
          event.preventDefault();
          toggleDebugMode && toggleDebugMode();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDebug, toggleDebugMode]);

  if (!isDebug) return null;

  let OSName = 'Unknown OS';
  if (navigator.userAgent.indexOf('Win') != -1) OSName = 'Windows';
  if (navigator.userAgent.indexOf('Mac') != -1) OSName = 'MacOS';
  if (navigator.userAgent.indexOf('Linux') != -1) OSName = 'Linux';
  if (navigator.userAgent.indexOf('Android') != -1) OSName = 'Android';
  if (navigator.userAgent.indexOf('like Mac') != -1) OSName = 'iOS';

  return (
    <div className="rounded-lg bg-gray-700 text-white fixed bottom-0 left-0 m-5 opacity-50 z-50">
      <div className="flex flex-row w-full gap-5 items-center py-5 pl-8">
        <button
          type="button"
          role="button"
          aria-label="close"
          className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-900 hover:text-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-gray-400"
          ref={(input) => input && input.focus()}
          onClick={toggleDebugMode}
        >
          <GoX role="presentation" size="24" />
          <span className="sr-only">
            <FormattedMessage id="action.closePopup" />
          </span>
        </button>

        <div className="my-auto text-2xl">
          <GoFileCode role="presentation" />
        </div>
        <div>
          <div className="text-xl">
            <FormattedMessage id="debug.title" />
          </div>
          <div className="text-base inline-flex">
            <a
              href="https://github.com/lebolnobel/plecotus-quiz/issues"
              rel="noreferrer"
              target="_blank"
              className="underline decoration-gray-400 hover:decoration-2 hover:text-gray-400 transition duration-400 ease-in-out hover:decoration-inherit inline-flex focus:outline-none focus:ring-2 focus:ring-natagora/40"
            >
              <FormattedMessage id="action.createBug" />
              <GoBug role="presentation" className="ml-2 mt-1" size="18" />
            </a>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 overflow-hidden rounded-lg">
        <table className="table-auto w-full text-left">
          <tbody>
            <tr className="py-3">
              <td className="py-3 p-4">
                <FormattedMessage id="debug.fingerprint" />
              </td>
              <td className="py-3 p-4">{generateFingerprint()}</td>
            </tr>
            <tr className="py-3">
              <td className="py-3 p-4">
                <FormattedMessage id="debug.os" />
              </td>
              <td className="py-3 p-4">{OSName}</td>
            </tr>
            <tr className="py-3">
              <td className="py-3 p-4">
                <FormattedMessage id="debug.network" />
              </td>
              <td className="py-3 p-4">
                {/* eslint-disable-next-line */}
                {navigator?.connection?.effectiveType} (
                {/* eslint-disable-next-line */}
                {navigator?.connection?.type || '-'})
              </td>
            </tr>
            <tr className="py-3">
              <td className="py-3 p-4">
                <FormattedMessage id="debug.locale" />
              </td>
              <td className="py-3 p-4">
                {navigator.languages && navigator.languages.length
                  ? navigator.languages.toString()
                  : navigator.language || '-'}
              </td>
            </tr>
            <tr className="py-3">
              <td className="py-3 p-4">
                <FormattedMessage id="debug.utils.screen" />
              </td>
              <td className="py-3 p-4">
                {window.innerWidth}x{window.innerHeight} (
                <FormattedMessage id="debug.utils.avail" />:{' '}
                {window.screen.availWidth}x{window.screen.availHeight},{' '}
                <FormattedMessage id="debug.utils.screen" />:{' '}
                {window.screen.width}x{window.screen.height},{' '}
                {window.screen.orientation.type})
              </td>
            </tr>
            <tr className="py-3">
              <td className="py-3 p-4">
                <FormattedMessage id="debug.date" />
              </td>
              <td className="py-3 p-4">{new Date().toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DebugMode;
