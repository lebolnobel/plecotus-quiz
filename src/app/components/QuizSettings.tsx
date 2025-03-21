import * as React from 'react';
import {
  GoArrowDown,
  GoArrowUp,
  GoBeaker,
  GoGear,
  GoHash,
  GoNumber,
  GoX,
} from 'react-icons/go';
import { IoReturnDownBack } from 'react-icons/io5';
import { usePlecotusContext } from '../../hooks/usePlecotusContext';
import { useQuizContext } from '../../hooks/useQuizContext';
import { ABBR, FOUR_CHOICES } from '../../utils/constants';
import { FormattedMessage } from 'react-intl';

type OptionsType = {
  name: string;
  displayName: string | React.ReactNode;
  icon: React.ReactNode;
  switch?: React.ReactNode;
  onClick: () => void;
};

const QuizSettings = (): React.ReactNode => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [index, setIndex] = React.useState(0);

  const { showSettings, toggleSettingsMode } = usePlecotusContext();
  const {
    display,
    selectToAnswerMode,
    toggleDisplay,
    toggleSelectToAnswer,
    setQuestions,
    nbChoices,
    toggleNbChoices,
  } = useQuizContext();

  const options: Array<OptionsType> = React.useMemo(
    () => [
      {
        name: 'advanced-name',
        displayName: <FormattedMessage id="settings.advancedName" />,
        icon: <GoBeaker role="presentation" />,
        switch: (
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={display === ABBR}
            />
            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-natagora/40 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-natagora"></div>
          </label>
        ),
        onClick: () => !!toggleDisplay && toggleDisplay(),
      },
      {
        name: 'advanced-answer',
        displayName: <FormattedMessage id="settings.advancedAnswer" />,
        icon: <GoBeaker role="presentation" />,
        switch: (
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={selectToAnswerMode}
            />
            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-natagora/40 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-natagora"></div>
          </label>
        ),
        onClick: () => !!toggleSelectToAnswer && toggleSelectToAnswer(),
      },
      {
        name: 'nb-questions',
        displayName: <FormattedMessage id="settings.modeFourQuestions" />,
        icon: <GoHash role="presentation" />,
        switch: (
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={nbChoices === FOUR_CHOICES}
            />
            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-natagora/40 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-natagora"></div>
          </label>
        ),
        onClick: () => !!toggleNbChoices && toggleNbChoices(),
      },
      {
        name: 'question-10',
        displayName: (
          <FormattedMessage
            id="settings.nb"
            values={{ nb: <strong>10</strong> }}
          />
        ),
        icon: <GoNumber role="presentation" />,
        onClick: () => !!setQuestions && setQuestions(10),
      },
      {
        name: 'question-25',
        displayName: (
          <FormattedMessage
            id="settings.nb"
            values={{ nb: <strong>25</strong> }}
          />
        ),
        icon: <GoNumber role="presentation" />,
        onClick: () => !!setQuestions && setQuestions(25),
      },
      {
        name: 'question-50',
        displayName: (
          <FormattedMessage
            id="settings.nb"
            values={{ nb: <strong>50</strong> }}
          />
        ),
        icon: <GoNumber role="presentation" />,
        onClick: () => !!setQuestions && setQuestions(50),
      },
    ],
    [
      display,
      nbChoices,
      selectToAnswerMode,
      toggleDisplay,
      toggleSelectToAnswer,
      toggleNbChoices,
      setQuestions,
    ],
  );

  React.useEffect(() => {
    const handleBackdropClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event?.target as Node)) {
        toggleSettingsMode && toggleSettingsMode();
      }
    };

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
        } else if (event.key === 'Enter' || event.key === 'Space') {
          event.preventDefault();
          options[index].onClick();
          toggleSettingsMode && toggleSettingsMode();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    showSettings && document.addEventListener('mousedown', handleBackdropClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleBackdropClick);
    };
  }, [options, index, showSettings, toggleSettingsMode]);

  React.useEffect(() => {
    return () => setIndex(0);
  }, [showSettings]);

  if (!showSettings) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 text-base">
      <div className="fixed inset-0 flex items-center justify-center z-50 mx-6">
        <div
          ref={ref}
          role="dialog"
          className="items-center justify-center shadow-lg max-w-xl w-full"
        >
          <div className="max-w-xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
            <button
              type="button"
              role="button"
              aria-label="close"
              ref={(input) => input && input.focus()}
              onClick={toggleSettingsMode}
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
                  <GoGear role="presentation" size="24" />
                </div>
                <div>
                  <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
                    <FormattedMessage id="action.settings" />
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

                    {option.switch}
                  </li>
                );
              })}
            </ul>

            <div className="hidden sm:flex flex-wrap items-center bg-gray-100 py-2.5 px-4 text-xs text-gray-400">
              <kbd className="px-1 py-1 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                <IoReturnDownBack />
              </kbd>
              <span>
                <FormattedMessage id="settings.select" />
              </span>
              <kbd className="px-1 py-1 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                <GoArrowDown role="presentation" />
              </kbd>
              <kbd className="px-1 py-1 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                <GoArrowUp role="presentation" />
              </kbd>
              <span>
                <FormattedMessage id="settings.navigate" />
              </span>
              <kbd className="px-2 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
                <FormattedMessage id="shortcuts.esc" />
              </kbd>
              <FormattedMessage id="settings.close" />.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSettings;
