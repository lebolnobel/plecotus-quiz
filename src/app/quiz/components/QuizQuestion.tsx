import React from 'react';
import { getRandomElement } from '../../../utils/helpers.ts';
import { authors, images, answerImages } from '../../../utils/images.ts';
import {
  GoLocation,
  GoPerson,
  GoDotFill,
  GoNote,
  GoScreenFull,
  GoStop,
} from 'react-icons/go';
import type { ImageType } from '../../../utils/images.ts';
import type { QuizQuestionType } from '../../../utils/quiz.ts';
import useLoadedImage from '../../../hooks/useLoadedImage.ts';
import ZoomImage from './ZoomImage.tsx';
import Overlay from '../../accessibility/Overlay.tsx';
import { useQuizContext } from '../../../hooks/useQuizContext.ts';

type QuestionType = {
  currentQuestion: QuizQuestionType;
  isAnwser?: boolean;
};

const Question = (props: QuestionType): React.ReactNode => {
  const { currentQuestion, isAnwser } = props;

  const [image, setImage] = React.useState<null | ImageType>(null);
  const [enlarged, setEnlarged] = React.useState<boolean>(false);

  const { imgEl, loaded } = useLoadedImage();
  const { toggleDisplay } = useQuizContext();

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
  }, [currentQuestion]);

  if (!image) return null;

  const answerImage =
    isAnwser && currentQuestion?.imageAnswer
      ? answerImages[currentQuestion.imageAnswer]
      : null;
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
          className={`mx-auto hover:scale-125 ease-in duration-150 rounded-lg ${loaded ? '' : 'blurred-img'} h-auto max-h-80 size-fit sm:max-w-lg rounded-lg transition-all cursor-pointer`}
          onClick={toggleEnlarged}
          loading="lazy"
        />
        <Overlay onAction={toggleEnlarged} keyCode="KeyF">
          <div className="overlay absolute bottom-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mb-6 mt-1 rounded">
            F
          </div>
        </Overlay>
      </figure>

      <ZoomImage
        isOpen={enlarged}
        url={currentImage.url}
        onClose={toggleEnlarged}
      />

      <div className="text-base text-center block">
        <dl className="mt-4 text-xs font-base flex justify-center items-center row-start-2">
          <dt className="sr-only">Auteur</dt>
          <dd className="text-natagora flex items-center">
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

          <div className="w-10">&nbsp;</div>

          <dt className="sr-only">Signaler une erreur</dt>
          <dd className="hidden sm:block flex items-center">
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

          <dt className="sr-only">Nom vernaculaire vs Abbréviation</dt>
          <dd className="hidden sm:block lex items-center">
            <button
              type="button"
              title="Switch vers le mode 'abbréviation' ou 'nom vernaculaire"
              role="displayName"
              aria-label="displayName"
              className="block flex bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg space-x-3 size-8 items-center justify-center"
              onClick={toggleDisplay}
            >
              <GoNote
                role="presentation"
                size="18px"
                className="cursor-pointer"
                title="Switch vers le mode 'abbréviation' ou 'nom vernaculaire'"
              />
            </button>
          </dd>

          <dt className="sr-only">Plein écran</dt>
          <dd className="hidden sm:block flex items-center">
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
          </dd>
        </dl>
      </div>
    </>
  );
};
export default Question;
