import React from 'react';
import { getRandomElement } from '../../../utils/helpers.ts';
import { authors, images, answerImages } from '../../../utils/images.ts';
import { GoLocation, GoPerson, GoDotFill, GoNote } from 'react-icons/go';
import type { ImageType } from '../../../utils/images.ts';
import type { QuizQuestionType } from '../../../utils/quiz.ts';
import useLoadedImage from '../../../hooks/useLoadedImage.ts';
import ZoomImage from './ZoomImage.tsx';

type QuestionType = {
  currentQuestion: QuizQuestionType;
  isAnwser?: boolean;
};

const Question = (props: QuestionType): React.ReactNode => {
  const { currentQuestion, isAnwser } = props;

  const [image, setImage] = React.useState<null | ImageType>(null);
  const [enlarged, setEnlarged] = React.useState<boolean>(false);

  const { imgEl, loaded } = useLoadedImage();

  const toggleEnlarged = () => {
    setEnlarged((prev) => !prev);
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
      <figure className="overflow-hidden block drop-shadow" role="none">
        <img
          src={currentImage.url}
          ref={imgEl}
          alt={"Trouver l'espèce qui se cache derrière cette image"}
          title={"Trouver l'espèce qui se cache derrière cette image"}
          className={`mx-auto hover:scale-125 ease-in duration-150 rounded-lg ${loaded ? '' : 'blurred-img'} h-auto max-h-80 size-fit sm:max-w-lg rounded-lg transition-all cursor-pointer`}
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
            <GoDotFill role="presentation" size="8px" className="mx-2" />

            <GoLocation role="presentation" size="18px" className="mr-2" />
            {image?.place || 'Lieu inconnu'}
          </dd>

          {image?.description && (
            <>
              <dt className="sr-only">Description</dt>
              <dd className="flex items-center">
                <GoDotFill role="presentation" size="8px" className="mx-2" />

                <GoNote role="presentation" size="18px" className="mr-2" />
                {image?.description}
              </dd>
            </>
          )}
        </dl>
      </div>
    </>
  );
};
export default Question;
