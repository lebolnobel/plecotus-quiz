import React from 'react';
import { getRandomElement } from '../../../utils/helpers.ts';
import { authors, images, answerImages } from '../../../utils/images.ts';
import type { ImageType } from '../../../utils/images.ts';
import type { QuizQuestionType } from '../../../utils/quiz.ts';

type QuestionType = {
  currentQuestion: QuizQuestionType;
  isAnwser?: boolean;
};

const Question = (props: QuestionType): React.ReactNode => {
  const { currentQuestion, isAnwser } = props;

  const [image, setImage] = React.useState<null | ImageType>(null);
  const [enlarged, setEnlarged] = React.useState<boolean>(false);

  const toggleEnlarged = () => {
    setEnlarged(!enlarged);
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
      <picture className="overflow-hidden block drop-shadow">
        <img
          src={currentImage.url}
          alt={"Trouver l'espèce qui se cache derrière cette image"}
          title={"Trouver l'espèce qui se cache derrière cette image"}
          width="350"
          className={`mx-auto hover:scale-200 ${enlarged ? 'scale-200' : ''} ease-in duration-150 rounded-lg `}
          onClick={toggleEnlarged}
        />
      </picture>

      <div className="text-base text-center block">
        <dl className="mt-4 text-xs font-base flex justify-center items-center row-start-2">
          <dt className="sr-only">Auteur</dt>
          <dd className="text-natagora flex items-center">
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="mr-1 stroke-current"
            >
              <path
                d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              {!author ? 'Anonyme' : `${author.firstname} ${author.name}`}
            </span>
          </dd>

          <dt className="sr-only">Lieu</dt>
          <dd className="flex items-center">
            <svg
              width="2"
              height="2"
              aria-hidden="true"
              fill="currentColor"
              className="mx-3 text-slate-300"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 text-slate-400"
              aria-hidden="true"
            >
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            {image?.place || 'Lieu inconnu'}
          </dd>

          {image?.description && (
            <>
              <dt className="sr-only">Description</dt>
              <dd className="flex items-center">
                <svg
                  width="2"
                  height="2"
                  aria-hidden="true"
                  fill="currentColor"
                  className="mx-3 text-slate-300"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
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
