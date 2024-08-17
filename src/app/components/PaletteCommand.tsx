import * as React from 'react';
import Fuse from 'fuse.js';
import {
  GoSearch,
  GoArrowDown,
  GoArrowUp,
  GoMortarBoard,
  GoBeaker,
  GoBug,
  GoQuestion,
  GoCommandPalette,
} from 'react-icons/go';
import { IoReturnDownBack } from 'react-icons/io5';
import { MdKeyboardOptionKey } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from '../../hooks/useQuizContext.ts';
import { FUZE_OPTS } from '../../utils/constants.ts';
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

  const { isMac, toggleDisplay, toggleSelectToAnswer } = useQuizContext();

  const options: Array<OptionsType> = React.useMemo(
    () => [
      {
        name: 'quiz',
        displayName: 'Lancer le quiz !',
        icon: <GoMortarBoard />,
        shortcut: [isMac ? <MdKeyboardOptionKey /> : 'alt', 'S'],
        onClick: () => navigate('/quiz'),
      },
      {
        name: 'advanced-name',
        displayName: 'Mode avancé: abbréviations/nom vernaculaire',
        icon: <GoBeaker />,
        shortcut: [],
        onClick: () => !!toggleDisplay && toggleDisplay(),
      },
      {
        name: 'advanced-select',
        displayName: 'Mode avancé: sélectionner/bouton pour répondre',
        icon: <GoBeaker />,
        shortcut: [],
        onClick: () => !!toggleSelectToAnswer && toggleSelectToAnswer(),
      },
      {
        name: 'bug',
        displayName: 'Remonter un bug',
        icon: <GoBug />,
        shortcut: [],
        onClick: () =>
          (window.location.href =
            'https://github.com/lebolnobel/plecotus-quiz/issues'),
      },
      {
        name: 'feedback',
        displayName: 'Créer un feedback',
        icon: <GoQuestion />,
        shortcut: [],
        onClick: () =>
          (window.location.href = 'https://forms.gle/1cRnvvpNi1CD9hLm9'),
      },
      {
        name: 'code',
        displayName: 'Contribuer au projet, sur Github',
        icon: <GoCommandPalette />,
        shortcut: [],
        onClick: () =>
          (window.location.href =
            'https://github.com/lebolnobel/plecotus-quiz'),
      },
    ],
    [isMac, toggleDisplay, toggleSelectToAnswer, navigate],
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
        (event.key === 'k' || event.key === 'p')
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
            prevIndex > 0 ? prevIndex - 1 : options.length - 1,
          );
        } else if (event.key === 'ArrowDown') {
          event.preventDefault();
          setIndex((prevIndex) =>
            prevIndex < options.length - 1 ? prevIndex + 1 : 0,
          );
        } else if (event.key === 'Enter') {
          event.preventDefault();
          options[index].onClick();
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index, options, isOpen]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
      aria-hidden="true"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="items-center justify-center shadow-lg max-w-lg w-full">
          <div className="max-w-xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
            <div className="relative bg-gray-50">
              <GoSearch className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400 md" />
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
              className="p-3 space-y-3 overflow-y-auto max-h-96 scroll-py-3"
              id="options"
              role="listbox"
            >
              {commands.length === 0 ? (
                <li
                  className="p-3 text-gray-500 duration-200 select-none group rounded-xl"
                  id="option-0"
                  key="option-0"
                  role="option"
                >
                  Aucune entrée pour cette commande
                </li>
              ) : (
                commands.map((option, optIndex) => {
                  return (
                    <li
                      className={`p-3 text-gray-500 duration-200 select-none group rounded-xl hover:text-natagora hover:bg-gray-50 ${index === optIndex ? 'text-natagora bg-gray-50' : ''}`}
                      id={`option-${optIndex}`}
                      key={`option-${option.name}`}
                      role="option"
                    >
                      <a
                        onClick={option.onClick}
                        className="flex cursor-pointer"
                      >
                        {option.icon}

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
                      </a>
                    </li>
                  );
                })
              )}
            </ul>

            <div className="flex flex-wrap items-center bg-gray-100 py-2.5 px-4 text-xs text-gray-400">
              <kbd className="flex items-center justify-center px-1 py-1 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                <IoReturnDownBack />
              </kbd>
              <span>pour sélectionner</span>
              <kbd className="flex items-center justify-center px-1 py-1 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                <GoArrowDown />
              </kbd>
              <kbd className="flex items-center justify-center px-1 py-1 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                <GoArrowUp />
              </kbd>
              <span>pour naviguer</span>
              <kbd className="flex items-center justify-center px-2 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                esc
              </kbd>
              pour fermer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaletteCommand;
