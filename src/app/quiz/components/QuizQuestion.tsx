import React from 'react';
import { getRandomElement } from '../../../utils/helpers.ts';
import { authors, images } from '../../../utils/images.ts';
import {
  GoLocation,
  GoPerson,
  GoDotFill,
  GoNote,
  GoScreenFull,
  GoStop,
  GoGear,
  GoArrowRight,
  GoMoveToStart,
} from 'react-icons/go';
import useLoadedImage from '../../../hooks/useLoadedImage.ts';
import ZoomImage from './ZoomImage.tsx';
import Overlay from '../../accessibility/Overlay.tsx';
import { usePlecotusContext } from '../../../hooks/usePlecotusContext.ts';
import { K_F, K_N, K_R } from '../../../utils/constants.ts';
import type { ImageType } from '../../../utils/images.ts';
import type { QuizQuestionType } from '../../../utils/quiz.ts';

type QuestionType = {
  currentQuestion: QuizQuestionType;
  isAnwser?: boolean;
  onReset: () => void;
  onNext: () => void;
};

const Question = (props: QuestionType): React.ReactNode => {
  const { currentQuestion, isAnwser, onNext, onReset } = props;

  const [image, setImage] = React.useState<null | ImageType>(null);
  const [enlarged, setEnlarged] = React.useState<boolean>(false);

  const { imgEl, loaded } = useLoadedImage();
  const { toggleSettingsMode } = usePlecotusContext();

  const toggleEnlarged = () => {
    setEnlarged((prev) => !prev);
  };

  const createBugTicket = () => {
    window.open(
      `https://docs.google.com/forms/d/e/1FAIpQLScnhzqa9nENyfEuNJMXwPKBHWpT0pxEZAWp4m-6HVB5YGw40Q/viewform?usp=pp_url&entry.1296158009=${currentImage.url}`,
      '_blank',
    );
  };

  React.useEffect(() => {
    const img = getRandomElement<ImageType>(
      images.filter((img) => img.speciesId === currentQuestion.rightAnswer),
    );
    setImage(img || null);

    return () => setImage(null);
  }, [currentQuestion]);

  if (!image) return null;

  const answerImage = (isAnwser && currentQuestion?.imageAnswer) || null;
  const currentImage = answerImage || image;
  const author =
    currentImage?.authorId !== undefined
      ? authors[currentImage.authorId]
      : null;

  return (
    <>
      <figure className="overflow-hidden block" role="none">
        <img
          src={currentImage.url}
          ref={imgEl}
          alt={"Trouver l'espèce qui se cache derrière cette image"}
          title={"Trouver l'espèce qui se cache derrière cette image"}
          className={`mx-auto hover:scale-125 ease-in duration-150 rounded-lg ${loaded ? '' : 'blurred-img'} h-auto max-h-80 rounded-lg transition-all cursor-pointer`}
          onClick={toggleEnlarged}
          loading="lazy"
        />
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
            {image?.place || 'Lieu inconnu'}
          </dd>

          {image?.description && (
            <>
              <dt className="sr-only">Description</dt>
              <dd className="flex items-center">
                <GoDotFill
                  role="presentation"
                  size="6px"
                  className="mx-3 text-gray-400"
                />

                <GoNote role="presentation" size="18px" className="mr-2" />
                {image?.description}
              </dd>
            </>
          )}

          <div className="w-full sm:w-10">&nbsp;</div>

          <dt className="sr-only">Signaler une erreur</dt>
          <dd className="flex items-center">
            <button
              type="button"
              title="Signaler une erreur"
              role="fullscreen"
              aria-label="fullscreen"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center"
              onClick={createBugTicket}
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
              title="Signaler une erreur"
              role="fullscreen"
              aria-label="fullscreen"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center"
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
              title="Plein écran"
              role="fullscreen"
              aria-label="fullscreen"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center"
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
              title="Plein écran"
              role="fullscreen"
              aria-label="fullscreen"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center"
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
              title="Plein écran"
              role="fullscreen"
              aria-label="fullscreen"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center"
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
