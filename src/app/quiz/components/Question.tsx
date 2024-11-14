import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
import Overlay from '../../accessibility/Overlay';
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

  const [enlarged, setEnlarged] = React.useState<boolean>(false);

  const { toggleSettingsMode } = usePlecotusContext();

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
      <figure className="overflow-hidden block" role="img">
        <div className="text-center transition-all ease-in duration-150 rounded-lg cursor-pointer hover:scale-125 min-h-32">
          <LazyLoadImage
            key={currentImage.url}
            src={currentImage.url}
            alt={"Trouver l'espèce qui se cache derrière cette image"}
            title={"Trouver l'espèce qui se cache derrière cette image"}
            placeholderSrc="/assets/img/ressources/placeholder.jpg"
            className="mx-auto rounded-lg h-auto max-h-80"
            effect="blur"
            onClick={toggleEnlarged}
          />
        </div>
      </figure>

      <ZoomImage
        isOpen={enlarged}
        url={currentImage.url}
        onClose={toggleEnlarged}
      />

      <div className="text-base text-center block">
        <dl className="mt-4 text-xs font-base flex justify-center items-center flex-wrap">
          <dt className="sr-only">Auteur</dt>
          <dd className="flex items-center text-natagora">
            <GoPerson role="presentation" size="18px" className="mr-2" />
            <span>
              {!author ? 'Anonyme' : `${author.firstname} ${author.name}`}
            </span>
          </dd>

          <dt className="sr-only">Lieu</dt>
          <dd className="flex items-center">
            <GoDotFill
              role="presentation"
              size="6px"
              className="mx-3 text-gray-400"
            />

            <GoLocation role="presentation" size="18px" className="mr-2" />
            {currentImage?.place || 'Lieu inconnu'}
          </dd>

          <div className="w-full sm:w-10">&nbsp;</div>

          <dt className="sr-only">Signaler une erreur</dt>
          <dd className="flex items-center">
            <button
              type="button"
              role="button"
              title="Signaler une erreur"
              aria-label="fullscreen"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center focus:outline-none focus:ring-2 focus:ring-natagora-100"
              onClick={() => window.open(`${BUG}${currentImage.url}`, '_blank')}
            >
              <GoStop
                role="presentation"
                size="18px"
                className="cursor-pointer"
                title="Signaler une erreur"
              />
            </button>
          </dd>

          <dt className="sr-only">Paramètres du quiz</dt>
          <dd className="flex items-center relative">
            <button
              type="button"
              role="button"
              title="Signaler une erreur"
              aria-label="fullscreen"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center focus:outline-none focus:ring-2 focus:ring-natagora-100"
              onClick={toggleSettingsMode}
            >
              <GoGear
                role="presentation"
                size="18px"
                className="cursor-pointer"
                title="Paramètres du quiz"
              />
            </button>
            <Overlay>
              <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-6 text-center text-natagora py-1 px-2 -ml-3 mt-1 rounded">
                Q
              </div>
            </Overlay>
          </dd>

          <dt className="sr-only">Plein écran</dt>
          <dd className="flex items-center relative">
            <button
              type="button"
              role="button"
              title="Plein écran"
              aria-label="fullscreen"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center focus:outline-none focus:ring-2 focus:ring-natagora-100"
              onClick={toggleEnlarged}
            >
              <GoScreenFull
                role="presentation"
                size="18px"
                className="cursor-pointer"
                title="Passer l'image en plein écran"
              />
            </button>
            <Overlay onAction={toggleEnlarged} keyCode={K_F}>
              <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-6 text-center text-natagora py-1 px-2 -ml-3 mt-1 rounded">
                F
              </div>
            </Overlay>
          </dd>

          <div className="w-10">&nbsp;</div>

          <dt className="sr-only">Recommencer</dt>
          <dd className="flex items-center relative">
            <button
              type="button"
              role="button"
              title="Plein écran"
              aria-label="fullscreen"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center focus:outline-none focus:ring-2 focus:ring-natagora-100"
              onClick={onReset}
            >
              <GoMoveToStart
                role="presentation"
                size="18px"
                className="cursor-pointer"
                title="Recommencer"
              />
            </button>
            <Overlay onAction={onReset} keyCode={K_R}>
              <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-6 text-center text-natagora py-1 px-2 -ml-3 mt-1 rounded">
                R
              </div>
            </Overlay>
          </dd>

          <dt className="sr-only">Question suivante</dt>
          <dd className="flex items-center relative">
            <button
              type="button"
              role="button"
              title="Plein écran"
              aria-label="fullscreen"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center focus:outline-none focus:ring-2 focus:ring-natagora-100"
              onClick={onNext}
            >
              <GoArrowRight
                role="presentation"
                size="18px"
                className="cursor-pointer"
                title="Suivant"
              />
            </button>
            <Overlay onAction={onNext} keyCode={K_N}>
              <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-6 text-center text-natagora py-1 px-2 -ml-3 mt-1 rounded">
                N
              </div>
            </Overlay>
          </dd>
        </dl>
      </div>
    </>
  );
};

export default Question;
