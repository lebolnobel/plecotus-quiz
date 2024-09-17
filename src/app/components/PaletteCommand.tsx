import * as React from 'react';
import Fuse from 'fuse.js';
import {
  GoSearch,
  GoArrowDown,
  GoArrowUp,
  GoMortarBoard,
  GoBug,
  GoFileCode,
  GoQuestion,
  GoCommandPalette,
  GoMegaphone,
  GoGear,
} from 'react-icons/go';
import { IoReturnDownBack } from 'react-icons/io5';
import { MdKeyboardOptionKey } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { usePlecotusContext } from '../../hooks/usePlecotusContext.ts';
import { FUZE_OPTS, K_K, K_P } from '../../utils/constants.ts';
import type { FuseResult } from 'fuse.js';

type OptionsType = {
  name: string;
  displayName: string;
  icon: React.ReactNode;
  shortcut: Array<React.ReactNode | string>;
  onClick: () => void;
};

const PaletteCommand = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [index, setIndex] = React.useState(0);

  const navigate = useNavigate();

  const { isMac, toggleDebugMode, toggleShortcutsMode, toggleSettingsMode } =
    usePlecotusContext();

  const options: Array<OptionsType> = React.useMemo(
    () => [
      {
        name: 'quiz',
        displayName: 'Lancer le quiz !',
        icon: <GoMortarBoard role="presentation" />,
        shortcut: [isMac ? <MdKeyboardOptionKey /> : 'alt', 'S'],
        onClick: () => navigate('/quiz'),
      },
      {
        name: 'quiz-settings',
        displayName: 'Paramètres du quiz',
        icon: <GoGear role="presentation" />,
        shortcut: [isMac ? <MdKeyboardOptionKey /> : 'alt', 'Q'],
        onClick: () => !!toggleSettingsMode && toggleSettingsMode(),
      },
      {
        name: 'shortcuts',
        displayName: 'Voir les raccourcis',
        icon: <GoQuestion role="presentation" />,
        shortcut: ['?'],
        onClick: () => !!toggleShortcutsMode && toggleShortcutsMode(),
      },
      {
        name: 'feedback',
        displayName: 'Créer un feedback',
        icon: <GoMegaphone role="presentation" />,
        shortcut: [],
        onClick: () =>
          window.open('https://forms.gle/1cRnvvpNi1CD9hLm9', '_blank'),
      },
      {
        name: 'bug',
        displayName: 'Remonter un bug',
        icon: <GoBug role="presentation" />,
        shortcut: [],
        onClick: () =>
          window.open(
            'https://github.com/lebolnobel/plecotus-quiz/issues',
            '_blank',
          ),
      },
      {
        name: 'debug',
        displayName: 'Debug mode',
        icon: <GoFileCode role="presentation" />,
        shortcut: [],
        onClick: () => !!toggleDebugMode && toggleDebugMode(),
      },
      {
        name: 'code',
        displayName: 'Contribuer au projet, sur Github',
        icon: <GoCommandPalette role="presentation" />,
        shortcut: [],
        onClick: () =>
          window.open('https://github.com/lebolnobel/plecotus-quiz', '_blank'),
      },
    ],
    [isMac, toggleDebugMode, toggleShortcutsMode, toggleSettingsMode, navigate],
  );

  // eslint-disable-next-line
  const fuse = new Fuse(options, FUZE_OPTS);
  // eslint-disable-next-line
  const result: Array<FuseResult<OptionsType>> = fuse.search(query);
  // eslint-disable-next-line
  const commands: Array<OptionsType> =
    result.length === 0
      ? options
      : // eslint-disable-next-line
        result.map((r) => r?.item);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key.toUpperCase() === K_K || event.key.toUpperCase() === K_P)
      ) {
        event.preventDefault();
        setIsOpen(true);
      }

      if (isOpen) {
        if (event.key === 'Escape') {
          event.preventDefault();
          setIsOpen(false);
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          setIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : commands.length - 1,
          );
        } else if (event.key === 'ArrowDown') {
          event.preventDefault();
          setIndex((prevIndex) =>
            prevIndex < commands.length - 1 ? prevIndex + 1 : 0,
          );
        } else if (event.key === 'Enter') {
          event.preventDefault();
          commands[index].onClick();
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index, commands, isOpen]);

  React.useEffect(() => {
    return () => setIndex(0);
  }, [isOpen]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
      role="search"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 flex items-center justify-center z-50 mx-6">
        <div className="items-center justify-center shadow-lg max-w-lg w-full">
          <div className="max-w-xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
            <div className="relative bg-gray-50">
              <GoSearch
                role="presentation"
                className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400 md"
              />
              <input
                type="text"
                className="w-full h-12 pr-4 text-gray-800 placeholder-gray-400 bg-transparent border-0 pl-11 outline-none"
                placeholder="Que cherchez-vous ?"
                value={query}
                onChange={(e) => setQuery(e.currentTarget.value)}
                role="combobox"
                aria-expanded="false"
                aria-controls="options"
                autoFocus
              />
            </div>
            <ul
              className="p-3 space-y-2 overflow-y-auto max-h-96 scroll-py-3"
              id="options"
              role="listbox"
            >
              {commands.length === 0 ? (
                <li
                  className="p-3 text-gray-500 duration-200 select-none group rounded-xl"
                  id="option-0"
                  key="option-0"
                  role="listitem"
                >
                  Aucune entrée pour cette commande
                </li>
              ) : (
                commands.map((option, optIndex) => {
                  return (
                    <li
                      className={`p-3 text-gray-500 duration-200 select-none group rounded-xl hover:text-natagora hover:bg-gray-50 ${index === optIndex ? 'text-natagora bg-gray-50' : ''} cursor-pointer flex`}
                      id={`option-${optIndex}`}
                      key={`option-${option.name}`}
                      role="listitem"
                      onClick={option.onClick}
                    >
                      <span className="pt-0.5">{option.icon}</span>

                      <span className="flex-auto ml-4 text-sm">
                        {option.displayName}
                      </span>

                      {!!option.shortcut && option.shortcut.length !== 0 && (
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
                      )}
                    </li>
                  );
                })
              )}
            </ul>

            <div className="flex flex-wrap items-center bg-gray-100 py-2.5 px-4 text-xs text-gray-400">
              <kbd className="px-1 py-1 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                <IoReturnDownBack />
              </kbd>
              <span>pour sélectionner</span>
              <kbd className="px-1 py-1 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                <GoArrowDown role="presentation" />
              </kbd>
              <kbd className="px-1 py-1 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                <GoArrowUp role="presentation" />
              </kbd>
              <span>pour naviguer</span>
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

export default PaletteCommand;