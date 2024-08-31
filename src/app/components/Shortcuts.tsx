import * as React from 'react';
import {
  GoMortarBoard,
  GoQuestion,
  GoGear,
  GoX,
  GoArrowRight,
  GoScreenFull,
  GoMoveToStart,
} from 'react-icons/go';
import { MdKeyboardOptionKey } from 'react-icons/md';
import { usePlecotusContext } from '../../hooks/usePlecotusContext.ts';
import { K_question } from '../../utils/constants.ts';

type OptionsType = {
  name: string;
  displayName: string;
  icon: React.ReactNode;
  shortcut: Array<React.ReactNode | string>;
};

const Shortcuts = (): React.ReactNode => {
  const { isMac, showShortcuts, toggleShortcutsMode } = usePlecotusContext();

  const options: Array<OptionsType> = React.useMemo(
    () => [
      {
        name: 'quiz',
        displayName: 'Lancer le quiz !',
        icon: <GoMortarBoard role="presentation" />,
        shortcut: [isMac ? <MdKeyboardOptionKey /> : 'alt', 'S'],
      },
      {
        name: 'next-quiz',
        displayName: 'Question suivante',
        icon: <GoArrowRight role="presentation" />,
        shortcut: [isMac ? <MdKeyboardOptionKey /> : 'alt', 'N'],
      },
      {
        name: 'reset-quiz',
        displayName: 'Recommencer le quiz',
        icon: <GoMoveToStart role="presentation" />,
        shortcut: [isMac ? <MdKeyboardOptionKey /> : 'alt', 'R'],
      },
      {
        name: 'full-screen',
        displayName: "Voir l'image de l'espère en grand",
        icon: <GoScreenFull role="presentation" />,
        shortcut: [isMac ? <MdKeyboardOptionKey /> : 'alt', 'F'],
      },
      {
        name: 'quiz-settings',
        displayName: 'Paramètres du quiz',
        icon: <GoGear role="presentation" />,
        shortcut: [isMac ? <MdKeyboardOptionKey /> : 'alt', 'Q'],
      },
      {
        name: 'shortcuts',
        displayName: 'Voir les raccourcis',
        icon: <GoQuestion role="presentation" />,
        shortcut: ['?'],
      },
    ],
    [isMac],
  );

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === K_question) {
        event.preventDefault();
        toggleShortcutsMode && toggleShortcutsMode();
      }

      if (showShortcuts) {
        if (event.key === 'Escape') {
          event.preventDefault();
          toggleShortcutsMode && toggleShortcutsMode();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showShortcuts, toggleShortcutsMode]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    !!toggleShortcutsMode && toggleShortcutsMode();
  };

  if (!showShortcuts) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
      aria-hidden="true"
      role="search"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="items-center justify-center shadow-lg max-w-xl w-full">
          <div className="max-w-xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
            <button
              type="button"
              role="close"
              aria-label="close"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <GoX role="presentation" size="24px" />
              <span className="sr-only">Fermer la popup</span>
            </button>
            <div className="p-4">
              <div className="flex flex-row items-center text-left">
                <div className="text-2xl pr-4">
                  <GoQuestion role="presentation" size="24px" />
                </div>
                <div>
                  <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
                    Raccourcis
                  </h3>
                </div>
              </div>
            </div>

            <ul
              className="p-3 space-y-2 overflow-y-auto max-h-96 scroll-py-3"
              id="options"
              role="listbox"
            >
              {options.map((option, optIndex) => {
                return (
                  <li
                    className="p-3 text-gray-500 duration-200 select-none group rounded-xl flex"
                    id={`option-${optIndex}`}
                    key={`option-${option.name}`}
                    role="option"
                  >
                    <span className="pt-0.5">{option.icon}</span>

                    <span className="flex-auto ml-4 text-sm">
                      {option.displayName}
                    </span>

                    <span className="flex-none ml-3 text-xs font-semibold text-gray-400">
                      <span className="flex items-center">
                        {option.shortcut.map((s, index) => (
                          <kbd
                            key={index}
                            className="flex-inline font-sans pl-2"
                          >
                            {s}
                          </kbd>
                        ))}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-wrap items-center bg-gray-100 py-2.5 px-4 text-xs text-gray-400">
              <span>Appuyer sur</span>
              <kbd className="px-2 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                ?
              </kbd>
              <span>pour afficher cette aide. Appuyez sur</span>
              <kbd className="px-2 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                alt
              </kbd>
              <span>pour afficher les overlays.</span>
              <kbd className="px-2 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                esc
              </kbd>
              pour fermer.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;
