import { ImageType } from './images';

export type QuizQuestionType = {
  // Image of the question
  image: ImageType;

  // If exist, use this image in the answer screen, otherwise the selected answer images will be used
  imageAnswer?: ImageType;
};
