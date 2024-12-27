import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FormattedMessage, useIntl } from 'react-intl';
import { authors } from '../../../utils/images';
import {
  GoLocation,
  GoPerson,
  GoDotFill,
  GoScreenFull,
  GoStop,
  GoGear,
  GoArrowRight,
  GoMoveToStart,
} from 'react-icons/go';
import ZoomImage from './question/ZoomImage';
import Overlay from '../accessibility/Overlay';
import { usePlecotusContext } from '../../../hooks/usePlecotusContext';
import { BUG, K_F, K_N, K_R } from '../../../utils/constants';
import type { QuizQuestionType } from '../../../utils/quiz';

type QuestionType = {
  currentQuestion: QuizQuestionType;
  isAnwser?: boolean;
  onReset: () => void;
  onNext: () => void;
};

const Question = (props: QuestionType): React.ReactNode => {
  const { currentQuestion, isAnwser, onNext, onReset } = props;

  const ref = React.useRef<HTMLDivElement | null>(null);

  const [enlarged, setEnlarged] = React.useState<boolean>(false);

  const intl = useIntl();
  const { toggleSettingsMode } = usePlecotusContext();

  React.useEffect(() => {
    ref?.current?.focus();
  }, [currentQuestion]);

  const toggleEnlarged = () => {
    setEnlarged((prev) => !prev);
  };

  if (!currentQuestion.image) return null;

  const answerImage = (isAnwser && currentQuestion?.imageAnswer) || null;
  const currentImage = answerImage || currentQuestion.image;
  const author =
    currentImage?.authorId !== undefined
      ? authors[currentImage.authorId]
      : null;

  return (
    <>
      <figure
        ref={ref}
        tabIndex={-1}
        className="overflow-hidden block outline-none"
        role="img"
      >
        <div className="text-center transition-all ease-in duration-150 rounded-lg cursor-pointer hover:scale-125 min-h-32">
          <LazyLoadImage
            key={currentImage.url}
            src={currentImage.url}
            alt={intl.formatMessage({ id: 'image.playDetail' })}
            title={intl.formatMessage({ id: 'image.playDetail' })}
            placeholderSrc="/assets/img/resources/placeholder.jpg"
            // Transition issue with LazyLoadImage
            className="mx-auto rounded-lg h-auto max-h-80"
            effect="blur"
            onClick={toggleEnlarged}
          />
        </div>
        <figcaption className="sr-only">
          <FormattedMessage id="image.playDetail" />
        </figcaption>
      </figure>

      <ZoomImage
        isOpen={enlarged}
        url={currentImage.url}
        onClose={toggleEnlarged}
      />

      <div className="text-base text-center block">
        <dl className="mt-4 text-xs font-base flex justify-center items-center flex-wrap">
          <dt className="sr-only">
            <FormattedMessage id="image.author" />
          </dt>
          <dd className="flex items-center text-natagora">
            <GoPerson role="presentation" size="18" className="mr-2" />
            <span>
              {!author ? (
                <FormattedMessage id="image.unknownAuthor" />
              ) : (
                `${author.firstname} ${author.name}`
              )}
            </span>
          </dd>

          <dt className="sr-only">
            <FormattedMessage id="image.location" />
          </dt>
          <dd className="flex items-center">
            <GoDotFill
              role="presentation"
              size="6"
              className="mx-3 text-gray-400"
            />

            <GoLocation role="presentation" size="18" className="mr-2" />
            {currentImage?.place || (
              <FormattedMessage id="image.unknownLocation" />
            )}
          </dd>

          <div className="w-full sm:w-10">&nbsp;</div>

          <dt className="sr-only">
            <FormattedMessage id="action.raiseError" />
          </dt>
          <dd className="flex items-center">
            <button
              type="button"
              role="button"
              title={intl.formatMessage({ id: 'action.raiseError' })}
              aria-label="raiseError"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center focus:outline-none focus:ring-2 focus:ring-natagora/40"
              onClick={() => window.open(`${BUG}${currentImage.url}`, '_blank')}
            >
              <GoStop
                role="presentation"
                size="18"
                className="cursor-pointer"
                title={intl.formatMessage({ id: 'action.raiseError' })}
              />
            </button>
          </dd>

          <dt className="sr-only">
            <FormattedMessage id="action.settings" />
          </dt>
          <dd className="flex items-center relative">
            <button
              type="button"
              role="button"
              title={intl.formatMessage({ id: 'action.settings' })}
              aria-label="settings"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center focus:outline-none focus:ring-2 focus:ring-natagora/40"
              onClick={toggleSettingsMode}
            >
              <GoGear
                role="presentation"
                size="18"
                className="cursor-pointer"
                title={intl.formatMessage({ id: 'action.settings' })}
              />
            </button>
            <Overlay>
              <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-6 text-center text-natagora py-1 px-2 -ml-3 mt-1 rounded">
                <FormattedMessage id="shortcuts.Q" />
              </div>
            </Overlay>
          </dd>

          <dt className="sr-only">
            <FormattedMessage id="action.fullScreen" />
          </dt>
          <dd className="flex items-center relative">
            <button
              type="button"
              role="button"
              title={intl.formatMessage({ id: 'action.fullScreen' })}
              aria-label="fullscreen"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center focus:outline-none focus:ring-2 focus:ring-natagora/40"
              onClick={toggleEnlarged}
            >
              <GoScreenFull
                role="presentation"
                size="18"
                className="cursor-pointer"
                title={intl.formatMessage({ id: 'action.fullScreen' })}
              />
            </button>
            <Overlay onAction={toggleEnlarged} keyCode={K_F}>
              <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-6 text-center text-natagora py-1 px-2 -ml-3 mt-1 rounded">
                <FormattedMessage id="shortcuts.F" />
              </div>
            </Overlay>
          </dd>

          <div className="w-10">&nbsp;</div>

          <dt className="sr-only">
            <FormattedMessage id="action.reset" />
          </dt>
          <dd className="flex items-center relative">
            <button
              type="button"
              role="button"
              title={intl.formatMessage({ id: 'action.reset' })}
              aria-label="reset"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center focus:outline-none focus:ring-2 focus:ring-natagora/40"
              onClick={onReset}
            >
              <GoMoveToStart
                role="presentation"
                size="18"
                className="cursor-pointer"
                title={intl.formatMessage({ id: 'action.reset' })}
              />
            </button>
            <Overlay onAction={onReset} keyCode={K_R}>
              <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-6 text-center text-natagora py-1 px-2 -ml-3 mt-1 rounded">
                <FormattedMessage id="shortcuts.R" />
              </div>
            </Overlay>
          </dd>

          <dt className="sr-only">
            <FormattedMessage id="action.next" />
          </dt>
          <dd className="flex items-center relative">
            <button
              type="button"
              role="button"
              title={intl.formatMessage({ id: 'action.next' })}
              aria-label="next"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center focus:outline-none focus:ring-2 focus:ring-natagora/40"
              onClick={onNext}
            >
              <GoArrowRight
                role="presentation"
                size="18"
                className="cursor-pointer"
                title={intl.formatMessage({ id: 'action.next' })}
              />
            </button>
            <Overlay onAction={onNext} keyCode={K_N}>
              <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-6 text-center text-natagora py-1 px-2 -ml-3 mt-1 rounded">
                <FormattedMessage id="shortcuts.N" />
              </div>
            </Overlay>
          </dd>
        </dl>
      </div>
    </>
  );
};

export default Question;
