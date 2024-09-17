import * as React from 'react';
import {
  GoArrowDown,
  GoArrowUp,
  GoBeaker,
  GoGear,
  GoNumber,
  GoX,
} from 'react-icons/go';
import { IoReturnDownBack } from 'react-icons/io5';
import { usePlecotusContext } from '../../hooks/usePlecotusContext.ts';
import { useQuizContext } from '../../hooks/useQuizContext.ts';

type OptionsType = {
  name: string;
  displayName: string | React.ReactNode;
  icon: React.ReactNode;
  onClick: () => void;
};

const QuizSettings = (): React.ReactNode => {
  const [index, setIndex] = React.useState(0);

  const { showSettings, toggleSettingsMode } = usePlecotusContext();
  const { toggleDisplay, toggleSelectToAnswer, setQuestions } =
    useQuizContext();

  const options: Array<OptionsType> = React.useMemo(
    () => [
      {
        name: 'advanced-name',
        displayName: 'Mode avancé: notation hivernale/nom vernaculaire',
        icon: <GoBeaker role="presentation" />,
        onClick: () => !!toggleDisplay && toggleDisplay(),
      },
      {
        name: 'advanced-answer',
        displayName: 'Mode avancé: sélectionner/bouton pour répondre',
        icon: <GoBeaker role="presentation" />,
        onClick: () => !!toggleSelectToAnswer && toggleSelectToAnswer(),
      },
      {
        name: 'question-10',
        displayName: (
          <>
            Mode <strong>10</strong> questions
          </>
        ),
        icon: <GoNumber role="presentation" />,
        onClick: () => !!setQuestions && setQuestions(10),
      },
      {
        name: 'question-25',
        displayName: (
          <>
            Mode <strong>25</strong> questions
          </>
        ),
        icon: <GoNumber role="presentation" />,
        onClick: () => !!setQuestions && setQuestions(25),
      },
      {
        name: 'question-50',
        displayName: (
          <>
            Mode <strong>50</strong> questions
          </>
        ),
        icon: <GoNumber role="presentation" />,
        onClick: () => !!setQuestions && setQuestions(50),
      },
    ],
    [toggleDisplay, toggleSelectToAnswer, setQuestions],
  );

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (showSettings) {
        if (event.key === 'Escape') {
          event.preventDefault();
          toggleSettingsMode && toggleSettingsMode();
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
          toggleSettingsMode && toggleSettingsMode();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [options, index, showSettings, toggleSettingsMode]);

  React.useEffect(() => {
    return () => setIndex(0);
  }, [showSettings]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    !!toggleSettingsMode && toggleSettingsMode();
  };

  if (!showSettings) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
      aria-hidden="true"
      role="search"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 flex items-center justify-center z-50 mx-6">
        <div className="items-center justify-center shadow-lg max-w-xl w-full">
          <div className="max-w-xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
            <button
              type="button"
              role="button"
              aria-label="close"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-natagora-100"
            >
              <GoX role="presentation" size="24px" />
              <span className="sr-only">Fermer la popup</span>
            </button>
            <div className="p-4">
              <div className="flex flex-row items-center text-left">
                <div className="text-2xl pr-4">
                  <GoGear role="presentation" size="24px" />
                </div>
                <div>
                  <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
                    Paramètres
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
                  </li>
                );
              })}
            </ul>

            <div className="hidden sm:flex flex-wrap items-center bg-gray-100 py-2.5 px-4 text-xs text-gray-400">
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

export default QuizSettings;
